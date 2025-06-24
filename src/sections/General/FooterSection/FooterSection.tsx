import Link from 'next/link';
import { MarginContainer } from '@/components';
import { GithubIcon, LinkedinIcon } from '@/components/icons';

import styles from './footer-section.module.scss';

export default function FooterSection() {
	const currentYear: Date = new Date();
	return (
		<footer className={styles.container}>
			<MarginContainer>
				<div className={styles.container__content}>
					<div className={styles.container__copyright}>
						<p>
							<strong>
								{'© Copyright '} {currentYear.getFullYear()}
							</strong>
							{'    Jairo Argumedo'}
						</p>
					</div>
					<div className={styles.socialmedia}>
						<p>{'Sigueme en:'}</p>

						<Link
							href={'https://www.linkedin.com/in/jairo-argumedo-483723242'}
							className={styles.button}
							target='_blank'
							rel='noopener noreferrer'
							aria-label='Linkedin'>
							<LinkedinIcon />
						</Link>
						<Link
							href={'https://github.com/Jhains53'}
							className={styles.button}
							target='_blank'
							rel='noopener noreferrer'
							aria-label='GitHub'>
							<GithubIcon />
						</Link>
					</div>
				</div>
			</MarginContainer>
		</footer>
	);
}
