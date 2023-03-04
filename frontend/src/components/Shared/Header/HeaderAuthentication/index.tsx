import styled from 'styled-components';
import { IPropsStyled } from '../../../../interfaces/styled';
import Logo from '../Logo';

const HeaderAuthentication: React.FC<IPropsStyled> = ({ className }) => {
	return (
		<header className={className}>
			<div className="container">
				<Logo />
			</div>
		</header>
	);
};

export default styled(HeaderAuthentication)`
	width: 100%;
	padding-top: 32px;
	padding-bottom: 64px;

	@media (min-width: 768px) {
		padding-bottom: 100px;
	}

	.container {
		width: 100%;

		img {
			max-width: 110px;
		}
	}
`;
