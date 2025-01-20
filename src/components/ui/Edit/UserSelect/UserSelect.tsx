import { FC } from 'react';
import DefaultSelect from '../../common/DefaultSelect/DefaultSelect';

const UserSelect: FC = () => {
	return <DefaultSelect label='User' options={['Andriy', 'Bohdan', 'John']} />;
};

export default UserSelect;
