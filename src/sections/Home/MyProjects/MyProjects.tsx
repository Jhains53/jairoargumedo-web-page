import Image from 'next/image';
import Link from 'next/link';
import { MarginContainer, Titles } from '@/components';

import styles from './my-projects.module.scss';

interface IMyProjects {
	img: string;
	imgtablet: string;
	link: string;
	title: string;
	description: string;
}

const data: Array<IMyProjects> = [
	{
		img: '/images/Agencia-Topty.webp',
		imgtablet: '/images/Agencia-Topty.webp',
		link: 'https://www.agenciatopty.com/es',
		title: 'Web Agencia Topty',
		description: `<p>Esta es una web para mostrar los servicios de la Agencia, al mismo tiempo mostrar su experiencia en diferentes proyectos, para esta web realice las siguientes tareas:</p>
		<ul role='list'>
			<li>Desarrollar con Next.js Y TypeScript la primera version de la web.</li>
            <li>Configuracion de despliegue a producción (GitHub Actions).</li>
			<li>Implementación de formulario de contacto, con servicio externo para notificaciones.</li>
			<li>Implementación de traducción y configuracion de SEO multi idiomas.</li>
            <li>Implementación de boton flotante para contacto.</li>
			<li>Desarrollo de landings de servicios.</li>
            <li>Implementación de carrousel vertical paginas de servicios.</li>
            <li>Implementación de menu dinamico de categorias (paginas de servicios).</li>
		</ul>`
	},
	{
		img: '/images/Agencia-Topty.webp',
		imgtablet: '/images/Agencia-Topty.webp',
		link: 'https://www.agenciatopty.com/es',
		title: 'Web Good Club',
		description: `<p>Esta es una web para mostrar sus servicios, facilitando la reservas y mejorando la experiencia del usuario en cada interacción, para esta web realice las siguientes tareas:</p>
		<ul role='list'>
			<li>Refactor de landings de servicio en diseño y en responsive.</li>
			<li>Integracion con herramientas de analítica.</li>
			<li>Desarrollo de seccion de blogs.</li>
			<li>Integración de CRM para captación de información de formularios.</li>
            <li>Implementación de boton flotante para navegacion rapida a formulario.</li>
            <li>Implementación de paginación y recuento de numero de blogs.</li>
		</ul>`
	},
	{
		img: '/images/Agencia-Topty.webp',
		imgtablet: '/images/Agencia-Topty.webp',
		link: 'https://www.agenciatopty.com/es',
		title: 'Web Psicotips',
		description: `<p>Esta es una web para mostrar sus servicios, mejora la captación de clientes y optimiza la comunicación con empresas interesadas en potenciar sus equipos de trabajo, para esta web realice las siguientes tareas:</p>
		<ul role='list'>
			<li>Desarrollar con Next.js y TypeScript la primera version de la web.</li>
			<li>Configuracion de despliegue a producción (GitHub Actions).</li>
			<li>Implementación de carrousel vertical (pagina del Home).</li>
			<li>Implementación de formulario de contacto, con servicio externo para notificaciones.</li>
            <li>Implementación de boton flotante para contacto.</li>
            <li>Desarrollo de una landing de servicio.</li>
		</ul>`
	}
];

export default function MyProjects() {
	return (
		<section className={styles.container}>
			<div className={styles.spacing} id='myprojects'></div>
			<MarginContainer>
				<div className={styles.container__title}>
					<Titles title={'Proyectos'} />
					<p>
						{
							'Actualmente, me desempeño como Desarrollador Full-Stack en Agencia Topty, donde desarrollo y mantengo aplicaciones web, implemento nuevas funcionalidades y participo en la documentación técnica.'
						}
					</p>
				</div>
				<article className={styles.container__center}>
					<div className={styles.container__center__one}>
						<div className={styles.image}>
							<Image
								width={608}
								height={360}
								src={data[0].img}
								alt={data[0].title}
							/>
						</div>
						<div className={styles.info}>
							<h3>{data[0].title}</h3>
							<div className={styles.tecnologies}>
								<span className={styles.tecnologi}>
									<Image
										width={16}
										height={16}
										src={'/images/React.webp'}
										alt={'React'}
									/>
									<p>{'React'}</p>
								</span>
								<span className={styles.tecnologi}>
									<Image
										width={16}
										height={16}
										src={'/images/NextJs.webp'}
										alt={'Next.js'}
									/>
									<p>{'Next.js'}</p>
								</span>
								<span className={styles.tecnologi}>
									<Image
										width={16}
										height={16}
										src={'/images/TypeScript.webp'}
										alt={'TypeScript'}
									/>
									<p>{'TypeScript'}</p>
								</span>
							</div>
							<div className={styles.info__description}>
								<p>
									{
										'Esta es una web para mostrar los servicios de la Agencia, al mismo tiempo mostrar su experiencia en diferentes proyectos de desarrollo web, marketing, produccion audio visual y diseño grafico.'
									}
								</p>
								<Link
									href={data[0].link}
									target='_blank'
									className={styles.button}>
									{'Ver Proyecto'}
								</Link>
							</div>
						</div>
					</div>
					<div className={styles.container__center__two}>
						<div className={styles.image}>
							<Image
								width={608}
								height={360}
								src={
									'https://firebasestorage.googleapis.com/v0/b/agency-topty.appspot.com/o/agency-topty%2Fimages%2FGood-clup.webp?alt=media&token=19fb6086-f097-4c1b-a300-3eb704b3d3e9'
								}
								alt={'Web Good Club'}
							/>
						</div>
						<div className={styles.info}>
							<h3>{'Web Good Club'}</h3>
							<div className={styles.tecnologies}>
								<span className={styles.tecnologi}>
									<Image
										width={16}
										height={16}
										src={'/images/NextJs.webp'}
										alt={'Next.js'}
									/>
									<p>{'Next.js'}</p>
								</span>
								<span className={styles.tecnologi}>
									<Image
										width={16}
										height={16}
										src={'/images/TypeScript.webp'}
										alt={'TypeScript'}
									/>
									<p>{'TypeScript'}</p>
								</span>
								<span className={styles.tecnologi}>
									<Image
										width={16}
										height={16}
										src={'/images/API-REST.webp'}
										alt={'API REST'}
									/>
									<p>{'API REST'}</p>
								</span>
							</div>
							<div className={styles.info__description}>
								<p>
									{
										'Esta es una web para mostrar sus servicios de fitness, natación, salud para mamas y bebes, facilitando la reserva de estos y mejorando la experiencia del usuario en cada interacción, ademas brindando información en cuidados de salud a travez de su blog.'
									}
								</p>
								<Link
									href={'https://www.goodclub.com.co/'}
									target='_blank'
									className={styles.button}>
									{'Ver Proyecto'}
								</Link>
							</div>
						</div>
					</div>
					<div className={styles.container__center__one}>
						<div className={styles.image}>
							<Image
								width={608}
								height={360}
								src={
									'https://firebasestorage.googleapis.com/v0/b/agency-topty.appspot.com/o/agency-topty%2Fimages%2FPsicotips.webp?alt=media&token=fbc5d91e-dbf2-4b81-8091-34ce039c6575'
								}
								alt={data[0].title}
							/>
						</div>
						<div className={styles.info}>
							<h3>{'Web Psicotips'}</h3>
							<div className={styles.tecnologies}>
								<span className={styles.tecnologi}>
									<Image
										width={16}
										height={16}
										src={'/images/React.webp'}
										alt={'React'}
									/>
									<p>{'React'}</p>
								</span>
								<span className={styles.tecnologi}>
									<Image
										width={16}
										height={16}
										src={'/images/NextJs.webp'}
										alt={'Next.js'}
									/>
									<p>{'Next.js'}</p>
								</span>
								<span className={styles.tecnologi}>
									<Image
										width={16}
										height={16}
										src={'/images/TypeScript.webp'}
										alt={'TypeScript'}
									/>
									<p>{'TypeScript'}</p>
								</span>
							</div>
							<div className={styles.info__description}>
								<p>
									{
										'Esta es una web para mostrar sus servicios de talleres, capacitaciones y experiencias, mejorar la captación de clientes y optimizar la comunicación con empresas interesadas en potenciar sus equipos de trabajo.'
									}
								</p>
								<Link
									href={'https://www.psicotips.com.co/'}
									target='_blank'
									className={styles.button}>
									{'Ver Proyecto'}
								</Link>
							</div>
						</div>
					</div>
					<div className={styles.container__center__two}>
						<div className={styles.image}>
							<Image
								width={608}
								height={360}
								src={
									'https://firebasestorage.googleapis.com/v0/b/agency-topty.appspot.com/o/agency-topty%2Fimages%2FPlanet-ip.webp?alt=media&token=92a1969b-6a3d-4141-862d-ea36860c6497'
								}
								alt={'Web Planet IP'}
							/>
						</div>
						<div className={styles.info}>
							<h3>{'Web Planet IP'}</h3>
							<div className={styles.tecnologies}>
								<span className={styles.tecnologi}>
									<Image
										width={16}
										height={16}
										src={'/images/React.webp'}
										alt={'React'}
									/>
									<p>{'React'}</p>
								</span>
								<span className={styles.tecnologi}>
									<Image
										width={16}
										height={16}
										src={'/images/NextJs.webp'}
										alt={'Next.js'}
									/>
									<p>{'Next.js'}</p>
								</span>
								<span className={styles.tecnologi}>
									<Image
										width={16}
										height={16}
										src={'/images/TypeScript.webp'}
										alt={'TypeScript'}
									/>
									<p>{'TypeScript'}</p>
								</span>
							</div>
							<div className={styles.info__description}>
								<p>
									{
										'Esta es una web para mostrar sus servicios de soluciones tecnologicas para pequeñas y medianas empresas,  generar confianza en clientes y facilitar la solicitud de asesorías con una interfaz clara y profesional.'
									}
								</p>
								<Link
									href={'https://www.planet-ip.com/es'}
									target='_blank'
									className={styles.button}>
									{'Ver Proyecto'}
								</Link>
							</div>
						</div>
					</div>
					<div className={styles.container__center__one}>
						<div className={styles.image}>
							<Image
								width={608}
								height={360}
								src={
									'https://firebasestorage.googleapis.com/v0/b/agency-topty.appspot.com/o/agency-topty%2Fimages%2FAsdiplast.webp?alt=media&token=b8fa5e9e-defb-436e-a013-264f6d28cefe'
								}
								alt={'Web Asdiplast'}
							/>
						</div>
						<div className={styles.info}>
							<h3>{'Web Asdiplast'}</h3>
							<div className={styles.tecnologies}>
								<span className={styles.tecnologi}>
									<Image
										width={16}
										height={16}
										src={'/images/TypeScript.webp'}
										alt={'TypeScript'}
									/>
									<p>{'TypeScript'}</p>
								</span>
								<span className={styles.tecnologi}>
									<Image
										width={16}
										height={16}
										src={'/images/API-REST.webp'}
										alt={'API REST'}
									/>
									<p>{'API REST'}</p>
								</span>
								<span className={styles.tecnologi}>
									<Image
										width={16}
										height={16}
										src={'/images/Supabase.webp'}
										alt={'Supabase'}
									/>
									<p>{'Supabase'}</p>
								</span>
							</div>
							<div className={styles.info__description}>
								<p>
									{
										'Esta es una web para mostrar los servicios de elavoración de envases plasticos profecionales, facilitando la consulta de productos, mejorando la navegación y generando confianza en clientes potenciales.'
									}
								</p>
								<Link
									href={'https://www.asdiplast.com/'}
									target='_blank'
									className={styles.button}>
									{'Ver Proyecto'}
								</Link>
							</div>
						</div>
					</div>
					<div className={styles.container__center__one}>
						<p>
							<strong>{'Nota: '}</strong>
							{
								'Cuento con la aprobación de los clientes para poder anexar los anteriores proyectos a este portafolio.'
							}
						</p>
					</div>
					<div className={styles.line}></div>
				</article>
			</MarginContainer>
		</section>
	);
}
