import { FC, useMemo, useState } from 'react';
import { Country, enumToList } from '../../../../enums';
import { useAppDispatch, useUsersSelector } from '../../../../state/store';
import { togglePopPup } from '../../../../state/userSlice';
import AddUser from '../../AddUser/AddUser';
import DefaultSelect from '../../common/DefaultSelect/DefaultSelect';
import WhiteButton from '../../common/WhiteButton/WhiteButton';
import styles from './FilterBox.module.scss';

interface FilterBoxProps {
	propName?: string;
}

const FilterBox: FC<FilterBoxProps> = () => {
	const [selectedActive, setSelected] = useState(false);
	const [statusActive, setStatusesActive] = useState(false);
	const dispatch = useAppDispatch();
	const { popup } = useUsersSelector();
	const countries = useMemo(() => enumToList(Country), []);

	return (
		<>
			{popup && (
				<div className={styles.popup_container}>
					<AddUser className={styles.popup} />
				</div>
			)}

			<section className={styles.filter}>
				<div className={styles.filterBox}>
					<div onClick={() => setSelected(!selectedActive)} className={styles.selected}>
						<h3>Selected(2)</h3>
						{selectedActive && (
							<ul className={styles.selected__list}>
								<li className={styles.selected__list_item}>
									<div className={styles['checkbox-container']}>
										<input type='checkbox' className={styles['checkbox-container_checkbox']} id='checkbox' />
										<label for='checkbox' className={styles['checkbox-container_custom']}>
											hello
										</label>
									</div>
									<div className={styles['checkbox-container']}>
										<input type='checkbox' className={styles['checkbox-container_checkbox']} id='checkbox' />
										<label for='checkbox' className={styles['checkbox-container_custom']}>
											hello
										</label>
									</div>

									<div className={styles['checkbox-container']}>
										<input type='checkbox' className={styles['checkbox-container_checkbox']} id='checkbox' />
										<label for='checkbox' className={styles['checkbox-container_custom']}>
											hello
										</label>
									</div>
								</li>
							</ul>
						)}
					</div>

					<DefaultSelect value={'US'} onChange={() => {}} options={countries} />

					<div onClick={() => setStatusesActive(!statusActive)} className={styles.selected}>
						<h3>Selected(2)</h3>
						{statusActive && (
							<ul className={styles.selected__list}>
								<li className={styles.selected__list_item}>
									<div className={styles['checkbox-container']}>
										<input type='checkbox' className={styles['checkbox-container_checkbox']} id='checkbox' />
										<label for='checkbox' className={styles['checkbox-container_custom']}>
											hello
										</label>
									</div>
									<div className={styles['checkbox-container']}>
										<input type='checkbox' className={styles['checkbox-container_checkbox']} id='checkbox' />
										<label for='checkbox' className={styles['checkbox-container_custom']}>
											hello
										</label>
									</div>

									<div className={styles['checkbox-container']}>
										<input type='checkbox' className={styles['checkbox-container_checkbox']} id='checkbox' />
										<label for='checkbox' className={styles['checkbox-container_custom']}>
											hello
										</label>
									</div>
								</li>
							</ul>
						)}
					</div>

					<div className={styles.trash}>
						<img height={20} width={20} src='trash.svg' alt='trash icon' />
					</div>
				</div>
				<WhiteButton text='Add User' onClick={() => dispatch(togglePopPup())} />
			</section>
		</>
	);
};

export default FilterBox;
