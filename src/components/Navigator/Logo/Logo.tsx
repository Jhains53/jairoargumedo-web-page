import { MAIN_ROUTES } from '@/routes';
import Link from 'next/link';
import Image from 'next/image';

import styles from './logo.module.scss';

export default function Logo() {
	return (
		<Link
			className={styles.logo}
			href={MAIN_ROUTES.home}
			aria-label='Página principal'>
			<Image
				width={174}
				height={57}
				src={'/images/Logo-web.webp'}
				alt={'Página principal'}
			/>
		</Link>
	);
}
