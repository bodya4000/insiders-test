import { FC, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { enumToList, Status } from '../../../../../enums';
import { useUsersSelector } from '../../../../../state/store';
import { setStatus } from '../../../../../state/userSlice';
import NonDefaultSelect from '../../../common/NonDefaultSelect/NonDefaultSelect';

const Statuses: FC = () => {
	const [selected, setSelected] = useState(false);
	const statuses = useMemo(() => enumToList(Status), []);
	const { departments, status: active } = useUsersSelector();
	const dispatch = useDispatch();
	const onSetStatus = (status: string) => {
		dispatch(setStatus(status as Status));
	};
	return <NonDefaultSelect onChange={onSetStatus} active={active ? [active] : []} disabled={departments ? departments?.length < 3 : true} options={statuses} onClick={() => setSelected(!selected)} show={selected} />;
};

export default Statuses;
