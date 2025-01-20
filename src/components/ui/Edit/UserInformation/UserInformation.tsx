import { FC } from 'react';
import DefaultInput from '../../common/DefaultInput/DefaultInput';
import DefaultSelect from '../../common/DefaultSelect/DefaultSelect';
import styles from './UserInformation.module.scss';
import WhiteButton from '../../common/WhiteButton/WhiteButton'

const UserInformation: FC = () => {
	return (
		<section className={styles.info}>
			<h2 className={styles.info__title}>User Information</h2>

			<form>
				<div className={styles.info__fields}>
					<DefaultInput label='Full Name' /> {/* todo: replace to input */}
					<DefaultSelect className={styles.info__field_to_end} label='Department' options={['bla', 'lab']} />
					<DefaultSelect label='Country' options={['USA', 'UKRAINE', 'UK']} />
					<DefaultSelect className={styles.info__field_to_end} label='Status' options={['pending', 'filefield', 'rejected']} />
				</div>

				<div className={styles.info__btns}>
					<WhiteButton text='Undo' />
					<WhiteButton text='Save' />
				</div>
			</form>
		</section>
	);
};

export default UserInformation;
