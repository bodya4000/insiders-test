import { FC } from 'react';
import { useAppDispatch, useUserFormSelector, useUsersSelector } from '../../../../state/store';
import { setCurrentUser } from '../../../../state/userFormSlice';
import DefaultSelect from '../../common/DefaultSelect/DefaultSelect';

const UserSelect: FC = () => {
	const { users } = useUsersSelector();
	const { currentName } = useUserFormSelector();
	const dispatch = useAppDispatch();

	const usersNames = users.map(user => user.name);

	if (currentName == '') {
		dispatch(setCurrentUser(usersNames[0]));
	}
	const onUserChange = (name: string) => {
		dispatch(setCurrentUser(name));
	};
	return <DefaultSelect value={currentName} onChange={onUserChange} label='User' options={usersNames} />;
};

export default UserSelect;
