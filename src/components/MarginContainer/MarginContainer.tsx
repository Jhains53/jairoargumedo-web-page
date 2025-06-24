import styles from './margin-container.module.scss';

import { IMarginContainer } from '@/interfaces';

export default function MarginContainer({ children }: IMarginContainer) {
	return (
		<div className={styles.marginContainer}>
			<div className={styles.marginContainer__main}>{children}</div>
		</div>
	);
}
