import { MAIN_ROUTES } from '@/routes';
import Link from 'next/link';

import styles from './logo.module.scss';

export default function Logo() {
	return (
		<Link
			className={styles.logo}
			href={MAIN_ROUTES.home}
			aria-label='Página principal'>
			{'Jhains'}
		</Link>
	);
}
