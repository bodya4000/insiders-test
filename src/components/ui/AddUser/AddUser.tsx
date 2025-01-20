import { FC, useEffect, useMemo } from 'react';
import { Country, Department, enumToList, Status } from '../../../enums';
import { useAppDispatch, useUserEditSelector } from '../../../state/store';
import { resetUserInformation, setCountry, setDepartment, setName, setStatus } from '../../../state/userEditSlice';
import { saveUser, togglePopPup } from '../../../state/userSlice';
import styles from '../Edit/UserInformation/UserInformation.module.scss';
import DefaultInput from '../common/DefaultInput/DefaultInput';
import DefaultSelect from '../common/DefaultSelect/DefaultSelect';
import WhiteButton from '../common/WhiteButton/WhiteButton';

interface AddUserProps {
	className?: string;
}

const AddUser: FC<AddUserProps> = ({ className }) => {
	const dispatch = useAppDispatch();
	const state = useUserEditSelector();
	
	console.log(state);
	
	useEffect(() => {
		return () => {
			dispatch(resetUserInformation());
		};
	}, []);

	const handleNameChange = (name: string) => {
		dispatch(setName(name));
	};
	const handleDepartmentChange = (department: { name: string; value: string }) => {
		dispatch(setDepartment({ name: department.name, value: department.value as Department }));
	};
	const handleCountryChange = (country: { name: string; value: string }) => {
		dispatch(setCountry({ name: country.name, value: country.value as Country }));
	};
	const handleStatusChange = (status: { name: string; value: string }) => {
		dispatch(setStatus({ name: status.name, value: status.value as Status }));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	const handleSave = () => {
		dispatch(
			saveUser({
				currentUser: state.currentName,
				name: state.name,
				department: state.department,
				country: state.country,
				status: state.status,
			})
		);
		dispatch(resetUserInformation());
		dispatch(togglePopPup());
	};

	const isSaveDisabled = () => {
		const { name, department, country, status } = state;
		return name === '' && country == undefined && department == undefined && status == undefined;
	};

	const departments = useMemo(() => enumToList(Department), []);
	const countries = useMemo(() => enumToList(Country), []);
	const statuses = useMemo(() => enumToList(Status), []);

	return (
		<section className={`${styles.info} ${className && className}`}>
			<h2 className={styles.info__title}>User Information</h2>
			<form onSubmit={handleSubmit}>
				<div className={styles.info__fields}>
					<DefaultInput value={state.name} onChange={handleNameChange} placeholder='New name' label='Full Name' />
					<DefaultSelect value={state.department?.value} onChange={handleDepartmentChange} className={styles.info__field_to_end} label='Department' options={departments} />
					<DefaultSelect value={state.country?.value} onChange={handleCountryChange} label='Country' options={countries} />
					<DefaultSelect value={state.status?.value} onChange={handleStatusChange} className={styles.info__field_to_end} label='Status' options={statuses} />
				</div>

				<div className={styles.info__btns}>
					<WhiteButton
						onClick={() => {
							dispatch(togglePopPup());
							dispatch(resetUserInformation());
						}}
						text='Undo'
					/>
					<WhiteButton disabled={isSaveDisabled()} onClick={handleSave} text='Save' />
				</div>
			</form>
		</section>
	);
};

export default AddUser;
