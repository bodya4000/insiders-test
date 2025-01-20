import { FC, useMemo, useState } from 'react';
import { Department, enumToList } from '../../../../../enums';
import { useAppDispatch, useUsersSelector } from '../../../../../state/store';
import { addDepartment, removeDepartment } from '../../../../../state/userSlice';
import NonDefaultSelect from '../../../common/NonDefaultSelect/NonDefaultSelect';

const Departments: FC = () => {
	const [selected, setSelected] = useState(false);
	const departments = useMemo(() => enumToList(Department), []);
	const dispatch = useAppDispatch();
	const onDepartmentAdd = (dep: string) => {
		dispatch(addDepartment(dep as Department));
	};
	const onDepartmentRemove = (dep: string) => {
		dispatch(removeDepartment(dep as Department));
	};

	const { departments: activeDeps } = useUsersSelector();
	return <NonDefaultSelect counter={activeDeps.length} active={activeDeps ? activeDeps : []} onTrue={onDepartmentAdd} onFalse={onDepartmentRemove} options={departments} onClick={() => setSelected(!selected)} show={selected} />;
};

export default Departments;
