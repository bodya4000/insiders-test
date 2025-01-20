import { FC, useMemo } from 'react';
import { Country, enumToList } from '../../../../enums';
import { useAppDispatch, useUsersSelector } from '../../../../state/store';
import { resetFiltering, setCountry, togglePopPup } from '../../../../state/userSlice';
import AddUser from '../../AddUser/AddUser';
import DefaultSelect from '../../common/DefaultSelect/DefaultSelect';
import WhiteButton from '../../common/WhiteButton/WhiteButton';
import Departments from './Departments/Departments';
import styles from './FilterBox.module.scss';
import Statuses from './Statuses/Statuses';

interface FilterBoxProps {
	propName?: string;
}

const FilterBox: FC<FilterBoxProps> = () => {
	const dispatch = useAppDispatch();
	const { popup, country } = useUsersSelector();
	const countries = useMemo(() => enumToList(Country), []);
	const { departments } = useUsersSelector();

	const handleSetCountry = (country: { value: string; name: string }) => {
		dispatch(setCountry(country.value as Country));
	};
	return (
		<>
			{popup && (
				<div className={styles.popup_container}>
					<AddUser className={styles.popup} />
				</div>
			)}

			<section className={styles.filter}>
				<div className={styles.filterBox}>
					<Departments />
					<DefaultSelect disabled={departments.length < 3} value={country || 'US'} onChange={handleSetCountry} options={countries} />
					<Statuses />
					<div className={styles.trash} onClick={() => dispatch(resetFiltering())}>
						<img height={20} width={20} src='trash.svg' alt='trash icon' />
					</div>
				</div>
				<WhiteButton text='Add User' onClick={() => dispatch(togglePopPup())} />
			</section>
		</>
	);
};

export default FilterBox;
