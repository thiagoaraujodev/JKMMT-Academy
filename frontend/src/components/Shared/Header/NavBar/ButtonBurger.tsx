import styled from 'styled-components';
import { IPropsStyled } from '../../../../interfaces/styled';

interface ButtonBurgerProps extends IPropsStyled {
	cColor?: string;
}

export default function ButtonBurger(props: ButtonBurgerProps) {
	return (
		<>
			<StyledButtonBurger
				className={props.toggle ? 'menu-toggle is-active' : 'menu-toggle'}
				cColor={props.cColor}
				onClick={props.onClick}
			>
				Menu
			</StyledButtonBurger>
		</>
	);
}

const StyledButtonBurger = styled.button<ButtonBurgerProps>`
	border: none;
	outline: none;
	cursor: pointer;

	&.menu-toggle {
		width: 22px;
		height: 16px;
		position: relative;
		background: transparent;
		border-top: 2px solid;
		border-bottom: 2px solid;
		font-size: 0;
		${({ cColor }) => (cColor ? `color: ${cColor}` : 'color:#000')};
		transition: all 0.25s ease-in-out;

		&:before,
		&:after {
			content: '';
			width: 100%;
			height: 2px;
			position: absolute;
			top: 50%;
			left: 50%;
			background: currentColor;
			transform: translate(-50%, -50%);
			transition: transform 0.25s ease-in-out;
		}
	}

	@media (min-width: 768px) {
		display: none;
	}
	&.menu-toggle.is-active {
		border-color: transparent;

		&:before {
			transform: translate(-50%, -50%) rotate(45deg);
		}

		&:after {
			transform: translate(-50%, -50%) rotate(-45deg);
		}
	}
`;
