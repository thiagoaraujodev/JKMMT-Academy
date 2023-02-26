import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IPropsStyled } from '../../../../interfaces/styled';
import ButtonBurger from './ButtonBurger';

const NavBar: React.FC<IPropsStyled> = ({ className }) => {
	const [openMenu, setOpenMenu] = useState(false);

	return (
		<>
			<ButtonBurger toggle={openMenu} onClick={() => setOpenMenu(!openMenu)} />

			<div className={`${className} ${openMenu ? '' : openMenu}`}>
				<div className="menu">
					<Link className="bt bt-primary" to="/login">
						Entrar
					</Link>

					<Link className="bt bt-primary" to="/registro">
						Criar Conta
					</Link>
				</div>
			</div>
		</>
	);
};

export default styled(NavBar)`
	height: 100vh;
	width: 100vw;
	position: fixed;
	top: 80px;
	left: 0;
	font-size: 20px;
	letter-spacing: 1px;
	background: rgb(0 0 0 / 30%);
	transform: translate3d(0%, 0, 0);
	transition: transform 0.4s ease-in-out;

	&.false {
		transform: translate3d(100%, 0, 0);
	}

	& .menu {
		height: 100vh;
		width: 100%;
		max-width: 200px;
		padding: 40px 16px;
		margin-left: auto;
		background: var(--bg-color-primary);
		top: 80px;
		right: 0;
		display: flex;
		flex-direction: column;
		gap: 45px;
		overflow: hidden;

		a {
			color: currentColor;
		}
		a:hover {
			color: var(--color-primary);
		}
	}

	@media (min-width: 768px) {
		height: initial;
		width: initial;
		position: initial;
		background: none;

		&.false {
			transform: initial;
		}

		& .menu {
			height: 100%;
			width: auto;
			max-width: 100%;
			padding: 2px 0;
			position: static;
			flex-direction: row;
			align-items: center;
			justify-content: flex-end;
		}
	}
`;
