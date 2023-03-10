import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../../../../context/AuthProvider/useAuth';
import { IPropsStyled } from '../../../../interfaces/styled';
import Logo from '../Logo';

const HeaderPrivate = ({ className }: IPropsStyled) => {
	const { logout, name } = useAuth();
	const navigate = useNavigate();
	const dropdownRef = useRef<HTMLDivElement>(null);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const handleMenuClick = (route: string | undefined, action?: () => void) => {
		route ? navigate(route) : action && action();
	};

	const handleOutsideClick = (event: MouseEvent) => {
		if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
			setIsDropdownOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleOutsideClick);

		return () => {
			document.removeEventListener('mousedown', handleOutsideClick);
		};
	}, []);

	const menuItems: { label: string; route?: string; action?: () => void }[] = [
		{ label: 'Dashboard', route: '/dashboard' },
		{ label: 'Cadastro', route: '/cadastro' },
		{ label: 'Cursos', route: '/meus-cursos' },
		{ label: 'Diplomas', route: '/diploma' },
		{ label: 'Sair', action: logout },
	];

	return (
		<header className={className}>
			<nav className="container">
				<Logo />
				<div className="dropdown" onClick={() => setIsDropdownOpen(!isDropdownOpen)} ref={dropdownRef}>
					{isDropdownOpen && (
						<div className="dropdown-menu">
							{menuItems.map(item => (
								<div
									key={item.route ?? item.label}
									className="menu-item"
									onClick={() => handleMenuClick(item.route, item.action)}
								>
									{item.label}
								</div>
							))}
						</div>
					)}
					<div className="flex">
						<span className="initials">{name?.charAt(0) ?? ':)'}</span>
						<span className="name">{name}</span>
						<ChevronDown color="gray" size={22} />
					</div>
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

		.dropdown {
			position: relative;
			cursor: pointer;
			min-width: min(40%, 120px);

			.dropdown-menu {
				position: absolute;
				width: 100%;
				padding-top: 8px;
				top: 51px;
				background-color: var(--bg-color-primary);
				box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
				border-radius: 1 4px;
				z-index: 10;

				.menu-item {
					padding: 10px;

					&:hover {
						background-color: #7a43ed1a; //#f2f2f2
					}
				}
			}
		}

		.flex {
			align-items: center;
			justify-content: space-between;
			gap: 8px;
			font: 700 12px 'Open Sans', sans-serif;
			text-transform: uppercase;

			.initials {
				width: 30px;
				height: 30px;
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius: 50%;
				background-color: var(--color-primary);
				font-size: 16px;
				font-weight: 800;
				text-transform: uppercase;
				color: var(--bg-color-primary);
			}
		}
	}

	@media (max-width: 425px) {
		.name {
			display: none;
		}
		.dropdown-menu {
			overflow-wrap: break-word;
		}
	}
`;
