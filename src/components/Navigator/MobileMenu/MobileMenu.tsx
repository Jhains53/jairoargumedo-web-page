import { NavigationLink } from '@/components';
import { IMobileMenu } from '@/interfaces';
import Logo from '../Logo/Logo';
import { XIcon } from '@/components/icons';

import styles from './mobile-menu.module.scss';

export default function MobileMenu({ isOpen, onClose }: IMobileMenu) {
	return (
		<div
			className={`${styles.container} ${isOpen ? styles.open : styles.close}`}>
			<div className={styles.content}>
				<div className={styles.menu}>
					<Logo />
					<ul role='list'>
						<li role='listitem' onClick={onClose}>
							<NavigationLink href={'#aboutme'}>{'Sobre mí'}</NavigationLink>
						</li>
						<li role='listitem' onClick={onClose}>
							<NavigationLink href={'#myskills'}>
								{'Mis Habilidades'}
							</NavigationLink>
						</li>
						<li role='listitem' onClick={onClose}>
							<NavigationLink href={'#myprojects'}>
								{'Proyectos'}
							</NavigationLink>
						</li>
						<li role='listitem' onClick={onClose}>
							<NavigationLink href={'mailto:jalarguna@gmail.com'}>
								{'Contacto'}
							</NavigationLink>
						</li>
						<li className={styles.languages} role='listitem'>
							{/*<DropdownLanguages />*/}
						</li>
					</ul>
				</div>
				<button
					role='button'
					aria-label='Botón de Cerrar'
					className={styles.closeButton}
					onClick={onClose}>
					<XIcon color='#0B0B0B' />
				</button>
			</div>
		</div>
	);
}
