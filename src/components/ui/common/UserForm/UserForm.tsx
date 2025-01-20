// Shared component logic for AddUser and UserInformation components
import { FC, useEffect, useMemo } from 'react';
import { Country, Department, enumToList, Status } from '../../../../enums';
import { useAppDispatch, useUserFormSelector } from '../../../../state/store';
import { resetUserInformation, setCountry, setDepartment, setName, setStatus } from '../../../../state/userFormSlice';
import DefaultInput from '../../common/DefaultInput/DefaultInput';
import DefaultSelect from '../../common/DefaultSelect/DefaultSelect';
import WhiteButton from '../../common/WhiteButton/WhiteButton';
import styles from './UserInformation.module.scss';

interface UserFormProps {
	onSave: (data: { currentUser: string; name: string; department: { name: string; value: Department } | undefined; country: { name: string; value: Country } | undefined; status: { name: string; value: Status } | undefined }) => void;
	className?: string;
}

const UserForm: FC<UserFormProps> = ({ onSave, className }) => {
	const dispatch = useAppDispatch();
	const state = useUserFormSelector();

	useEffect(() => {
		return () => {
			dispatch(resetUserInformation());
		};
	}, [dispatch]);

	const handleNameChange = (name: string) => {
		dispatch(setName(name));
	};

	const handleDepartmentChange = (department: string | { name: string; value: string }) => {
		if (typeof department === 'string') {
			dispatch(setDepartment({ name: department, value: department as Department }));
		} else {
			dispatch(setDepartment({ name: department.name, value: department.value as Department }));
		}
	};

	const handleCountryChange = (country: string | { name: string; value: string }) => {
		if (typeof country === 'string') {
			dispatch(setCountry({ name: country, value: country as Country }));
		} else {
			dispatch(setCountry({ name: country.name, value: country.value as Country }));
		}
	};

	const handleStatusChange = (status: string | { name: string; value: string }) => {
		if (typeof status === 'string') {
			dispatch(setStatus({ name: status, value: status as Status }));
		} else {
			dispatch(setStatus({ name: status.name, value: status.value as Status }));
		}
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	const handleSave = () => {
		onSave({
			currentUser: state.currentName,
			name: state.name,
			department: state.department,
			country: state.country,
			status: state.status,
		});
		dispatch(resetUserInformation());
	};

	const isSaveDisabled = () => {
		const { name, department, country, status } = state;
		return !name && !country && !department && !status;
	};

	const departments = useMemo(() => enumToList(Department), []);
	const countries = useMemo(() => enumToList(Country), []);
	const statuses = useMemo(() => enumToList(Status), []);

	return (
		<section className={`${styles.info} ${className ?? ''}`}>
			<h2 className={styles.info__title}>User Information</h2>
			<form onSubmit={handleSubmit}>
				<div className={styles.info__fields}>
					<DefaultInput value={state.name} onChange={handleNameChange} placeholder='New name' label='Full Name' />
					<DefaultSelect value={state.department?.value} onChange={handleDepartmentChange} className={styles.info__field_to_end} label='Department' options={departments} />
					<DefaultSelect value={state.country?.value} onChange={handleCountryChange} label='Country' options={countries} />
					<DefaultSelect value={state.status?.value} onChange={handleStatusChange} className={styles.info__field_to_end} label='Status' options={statuses} />
				</div>

				<div className={styles.info__btns}>
					<WhiteButton onClick={() => dispatch(resetUserInformation())} text='Undo' />
					<WhiteButton disabled={isSaveDisabled()} onClick={handleSave} text='Save' />
				</div>
			</form>
		</section>
	);
};

export default UserForm;
