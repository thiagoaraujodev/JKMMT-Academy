import styled from 'styled-components';
import LoginImage from '../../../assets/Images/login.png';
import { IPropsStyled } from '../../../interfaces/styled';

const BackgroundImage: React.FC<IPropsStyled> = ({ className }) => {
	return (
		<div className={className}>
			<img src={LoginImage} alt="" />
			<h2>JKMMT ACADEMY</h2>
			<p>Aprimore seus conhecimentos com a maior plataforma de conteúdos.</p>
		</div>
	);
};

export default styled(BackgroundImage)`
	width: min(70%, 960px);
	height: 100vh;
	padding: 125px 40px 40px 40px;
	background: linear-gradient(359deg, #282760 25%, rgba(31, 30, 90, 0.35) 80%);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h2 {
		padding-top: 32px;
		font-family: 'Coda Caption', sans-serif;
		font-style: normal;
		font-weight: 800;
		font-size: 26px;
		line-height: 46px;
		color: #ffffff;
	}
	p {
		padding-top: 16px;
		width: 100%;
		max-width: 335px;
		height: 100%;
		max-height: 35vh;
		font-family: 'Open Sans', sans-serif;
		font-size: 18px;
		line-height: 26px;
		text-align: center;
		color: var(--color-gray-lighter);
	}

	@media (max-width: 991px) {
		display: none;
	}
`;
