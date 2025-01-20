import { FC } from 'react';
import { TUser } from '../../../../../types';

interface UserRowProps {
	user: TUser;
}

const UserRow: FC<UserRowProps> = ({ user }) => {
	return (
		<tr>
			<th scope='row'>{user.name}</th>
			<td>{user.department.name}</td>
			<td>{user.country.name}</td>
			<td>{user.status.name}</td>
			<td>
				<img height={20} width={20} src='trash.svg' alt='trash icon' />
			</td>
		</tr>
	);
};

export default UserRow;
