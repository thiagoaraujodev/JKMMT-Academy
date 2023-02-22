import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { IPropsStyled } from '../../../interfaces/styled';

import logo from '../../../assets/images/logo.png';
import NavBar from './NavBar';

const Header: React.FC<IPropsStyled> = ({ className }) => {
	return (
		<header className={className}>
			<nav className="container">
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
				<NavBar />
			</nav>
		</header>
	);
};

export default styled(Header)`
	height: 80px;
	min-width: 100%;
	padding: 10px 0;
	position: fixed;
	right: 0;
	top: 0;
	display: flex;
	background-color: var(--bg-color-primary);
	border-bottom: 1px solid rgba(0, 0, 0, 0.16);
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.16);
	z-index: 1000;

	nav {
		width: 100%;
		display: flex;
		align-self: center;
		align-items: center;
		justify-content: space-between;

		> a {
			max-width: 65%;
		}
	}
`;
