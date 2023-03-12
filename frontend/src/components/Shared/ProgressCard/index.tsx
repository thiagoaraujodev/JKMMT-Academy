import { useState } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { IPropsStyled } from '../../../interfaces/styled';

interface CourseCardProps extends IPropsStyled {
	title?: string;
	image?: string;
	link?: string;
	description?: string;
	onStartButtonClick?: () => void;
	isVideoPlayerShown?: boolean;
}

const ProgressCard = ({ className, ...props }: CourseCardProps) => {
	const [progress, setProgress] = useState(25);

	const handleStartButtonClick = () => {
		props.onStartButtonClick?.();
	};

	return (
		<div className={`'course-card-progress' ${className}`}>
			<img src={props.image} alt={props.title} className="image" />
			<div className="course-card-content">
				<div className="progress-status">
					<p>Progresso</p>
					<p>25%</p>
				</div>
				<progress value={progress} max="100" />
				<Link
					className="bt bt-primary"
					onClick={handleStartButtonClick}
					to="footer"
					smooth="easeOutQuad"
					duration={1000}
				>
					Começar
				</Link>
			</div>
		</div>
	);
};

export default styled(ProgressCard)`
	width: 100%;
	max-width: 275px;
	height: 100%;
	max-height: 285px;
	display: flex;
	flex-direction: column;
	border-radius: 10px;
	background: #ffffff;
	box-shadow: 2px 2px 4px 2px rgb(0 0 0 / 10%);

	.image {
		max-width: 275px;
		max-height: 175px;
	}

	.course-card-content {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		padding: 16px;
		gap: 4px;

		.progress-status {
			width: 100%;
			display: flex;
			justify-content: space-between;
			font-family: 'Open Sans', sans-serif;
			font-size: 12px;
			line-height: 16px;
			color: var(--text-color-black-gray-light);
		}

		progress {
			width: 100%;
			height: 12px;

			/* Altera a cor de fundo em navegadores com webkit (Chrome, Safari etc) */
			::-webkit-progress-value {
				background-color: var(--color-primary);
			}

			/* Altera a cor da barra em navegadores com webkit (Chrome, Safari etc) */
			::-webkit-progress-bar {
				background-color: var(--color-gray-lighter);
			}

			/* Altera a cor da barra em navegadores com moz (Firefox) */
			::-moz-progress-bar {
				background-color: var(--color-gray-lighter);
			}

			/* Altera a cor da barra em navegadores da Microsoft (IE e Edge) */
			::-ms-fill {
				background-color: var(--color-gray-lighter);
			}
		}
		.bt {
			margin-top: 8px;
			cursor: pointer;
		}
	}
`;
