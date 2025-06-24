import Link from 'next/link';
import { IButtonCustom } from '@/interfaces';
import IconButton from './IconButton/IconButton';

import styles from './button-custom.module.scss';

export default function ButtonCustom({
	onTarget,
	title,
	url,
	icon,
	colorTitle,
	colorBackground,
	isBorder
}: IButtonCustom) {
	const backgroun = '#001C65';

	const buttonStyle = {
		color: colorTitle ?? '#FFF',
		background: colorBackground ?? backgroun,
		border: isBorder ? `2px solid ${colorTitle ?? '#0095FF'}` : ''
	};

	return (
		<Link
			href={url}
			target={onTarget ? '_blank' : ''}
			className={styles.button}
			style={buttonStyle}>
			<IconButton icon={icon} />
			{title}
		</Link>
	);
}
