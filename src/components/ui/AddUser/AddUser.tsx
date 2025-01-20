import { FC } from 'react';
import { useAppDispatch } from '../../../state/store';
import { saveUser, togglePopPup } from '../../../state/userSlice';
import { TUserEdit } from '../../../types';
import UserForm from '../common/UserForm/UserForm';

interface AddUserProps {
	className?: string;
}

const AddUser: FC<AddUserProps> = ({ className }) => {
	const dispatch = useAppDispatch();
	const handleSave = (data: TUserEdit) => {
		dispatch(saveUser(data));
		dispatch(togglePopPup());
	};

	return <UserForm onSave={handleSave} className={className} />;
};

export default AddUser;
