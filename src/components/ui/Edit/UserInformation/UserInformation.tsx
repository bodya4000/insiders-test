import { FC } from 'react';
import { useAppDispatch } from '../../../../state/store';
import { editUser } from '../../../../state/userSlice';
import { TUserEdit } from '../../../../types';
import UserForm from '../../common/UserForm/UserForm';

const UserInformation: FC = () => {
	const dispatch = useAppDispatch();
	const handleSave = (data: TUserEdit) => {
		dispatch(editUser(data));
	};

	return <UserForm onSave={handleSave} />;
};

export default UserInformation;
