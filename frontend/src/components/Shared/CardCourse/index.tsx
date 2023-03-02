import { Link } from 'react-router-dom';
import styled from 'styled-components';
import imgCloud from '../../../assets/Images/cards/cloud.png';
import imgIcon from '../../../assets/Images/video-library.png';
import { IPropsStyled } from '../../../interfaces/styled';

interface ICardCourse extends IPropsStyled {
	title: string;
	subTitle: string;
	image: string;
	link: string;
}

const content = 'GRÁTIS';

const CardCourse: React.FC<ICardCourse> = ({ className, ...props }) => {
	return (
		<>
			<div className={className}>
				<img src={props.image} alt="Canva" className="image" />
				<div className="flex">
					<p className="title">{props.title}</p>
					<div className="sub-title">
						<img src={imgCloud} alt="Cloud" />
						<p>{props.subTitle}</p>
					</div>
					<Link className="bt bt-primary-outlined" to={props.link}>
						<img src={imgIcon} alt="Icon" className="icon" /> Inscreva-se grátis
					</Link>
				</div>
			</div>
		</>
	);
};

export default styled(CardCourse)`
	position: relative;
	/* margin: 8px 0; */
	width: 100%;
	max-width: 275px;
	height: 100%;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	border-radius: 10px;
	background: #ffffff;
	box-shadow: 2px 2px 4px 2px rgb(0 0 0 / 10%);

	::after {
		content: '${content}';
		position: absolute;
		top: 20px;
		left: -40px;
		padding: 5px 0;
		width: 150px;
		text-align: center;
		font-family: 'Roboto', sans-serif;
		font-weight: 700;
		font-size: 12px;
		line-height: 14px;
		color: #ffffff;
		background-color: #e3b430;
		transform: rotate(-45deg);
	}

	.image {
		max-width: 275px;
		max-height: 175px;
	}

	.flex {
		flex-direction: column;
		padding: 16px;

		.title {
			padding-bottom: 16px;
			font-family: 'Montserrat', sans-serif;
			font-style: normal;
			font-weight: 700;
			font-size: 16px;
			line-height: 20px;
			color: #2d4a22;
		}

		.sub-title {
			padding-bottom: 16px;
			display: flex;
			align-items: center;
			gap: 10px;

			img {
				max-width: 24px;
				max-height: 24px;
			}

			p {
				font-family: 'Open Sans', sans-serif;
				font-size: 14px;
				line-height: 19px;
				color: #546e7a;
			}
		}

		a {
			display: flex;
			line-height: 20px;
			align-items: center;
			justify-content: center;
			gap: 10px;
			font-family: 'Roboto', sans-serif;
			font-weight: 400;

			.icon {
				max-width: 18px;
				max-height: 18px;
			}
		}
	}
`;
