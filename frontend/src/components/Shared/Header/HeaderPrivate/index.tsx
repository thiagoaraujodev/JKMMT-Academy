import styled from 'styled-components';
import { useAuth } from '../../../../context/AuthProvider/useAuth';
import { IPropsStyled } from '../../../../interfaces/styled';
import Logo from '../Logo';

const HeaderPrivate: React.FC<IPropsStyled> = ({ className }) => {
	const auth = useAuth();

	return (
		<header className={className}>
			<nav className="container">
				<Logo />
				<div>
					{auth.name}
					<button className="bt bt-primary" type="button" onClick={() => auth.logout()}>
						Sair
					</button>
				</div>
			</nav>
		</header>
	);
};

export default styled(HeaderPrivate)`
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
