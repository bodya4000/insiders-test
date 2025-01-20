import { FC } from 'react';
import { useAppDispatch } from '../../../../../state/store';
import { deleteUser } from '../../../../../state/userSlice';
import { TUser } from '../../../../../types';

interface UserRowProps {
	user: TUser;
}

const UserRow: FC<UserRowProps> = ({ user }) => {
	const dispatch = useAppDispatch();
	const handleDelete = () => {
		dispatch(deleteUser(user.name))
	}
	return (
		<tr>
			<th scope='row'>{user.name}</th>
			<td>{user.department.name}</td>
			<td>{user.country.name}</td>
			<td>{user.status.name}</td>
			<td onClick={handleDelete}>
				<img height={20} width={20} src='trash.svg' alt='trash icon' />
			</td>
		</tr>
	);
};

export default UserRow;
