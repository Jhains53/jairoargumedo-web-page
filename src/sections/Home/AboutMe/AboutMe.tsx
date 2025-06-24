import Image from 'next/image';
import { MarginContainer, StepsLine, Titles } from '@/components/';

import styles from './about-me.module.scss';

export default function AboutMe() {
	return (
		<div className={styles.container}>
			<div className={styles.spacing} id='aboutme'></div>
			<MarginContainer>
				<Titles title={'Sobre mí'} />
				<div className={styles.container__center}>
					<div className={styles.container__center__one}>
						<div className={styles.text}>
							<p>
								{
									'Ingeniero de Software con más de un año de experiencia en el desarrollo de aplicaciones tanto en el frontend como en el backend, utilizando tecnologías como JavaScript y TypeScript.'
								}
							</p>
							<br />
							<p>
								{
									'He trabajado en la implementación y mantenimiento de soluciones software, apoyando en la creación de funcionalidades eficientes mediante frameworks modernos y APIs RESTful.'
								}
							</p>
							<br />
							<p>
								{
									'Mi experiencia incluye la gestión de sistemas, soporte técnico, pruebas automatizadas y control de calidad, además de colaborar estrechamente con equipos multidisciplinarios para garantizar entregas de alta calidad.'
								}
							</p>
						</div>
						<StepsLine />
					</div>
					<div className={styles.container__center__two}>
						<Image
							width={500}
							height={500}
							src={'/images/Imagen-ilustration.webp'}
							alt={'sobre mi'}
							quality={100}
						/>
					</div>
				</div>
			</MarginContainer>
		</div>
	);
}
