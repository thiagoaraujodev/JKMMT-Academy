import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../../../assets/images/logo.png';
import { IPropsStyled } from '../../../../interfaces/styled';

const HeaderAuthentication: React.FC<IPropsStyled> = ({ className }) => {
	return (
		<header className={className}>
			<div className="container">
				<Link
					to="/"
					title="JKMT Academy"
					onClick={() =>
						window.scroll({
							top: 0,
							behavior: 'smooth',
						})
					}
				>
					<img src={logo} className="logo" alt="Logo JKMT Academy" />
				</Link>
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
