import { useState } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { IPropsStyled } from '../../../interfaces/styled';
import ProgressBar from '../ProgressBar';

interface CourseCardProps extends IPropsStyled {
	title?: string;
	image?: string;
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
				<ProgressBar progress={progress} />

				<Link
					className="bt bt-primary"
					onClick={handleStartButtonClick}
					to="footer"
					smooth="easeOutQuad"
					duration={1000}
				>
					Continuar
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

		.bt {
			margin-top: 8px;
			cursor: pointer;
		}
	}
`;
