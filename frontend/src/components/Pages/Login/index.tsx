import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LoginImage from '../../../assets/images/login.png';
import logo from '../../../assets/images/logo.png';
import { IPropsStyled } from '../../../interfaces/styled';

const Login: React.FC<IPropsStyled> = ({ className }) => {
	return (
		<>
			<div className={className}>
				<div className="backgroundImage">
					<img src={LoginImage} alt="" />
					<h2>JKMMT ACADEMY</h2>
					<p>Aprimore seus conhecimentos com a maior plataforma de conteúdos.</p>
				</div>
				<div className="form">
					<header>
						<div className="container">
							<img src={logo} className="logo" alt="Logo JKMT Academy" />
						</div>
					</header>
					<main>
						<h1>Entrar</h1>
						<p>Preencha seus dados para entrar</p>

						<div className="label-float">
							<input
								type="email"
								placeholder="Email"
								// value={email}
								// onChange={handleEmailInput}
								required
							/>
							<label>E-mail</label>
						</div>

						<div className="label-float">
							<input
								type="password"
								placeholder="password"
								// value={password}
								// onChange={handlePasswordInput}
								required
							/>
							<label>Senha</label>
						</div>

						<Link className="forgot-password" to="/">
							Esqueci minha senha
						</Link>

						<button className="bt bt-primary" type="button">
							Entrar
						</button>

						<p
							style={{
								padding: 0,
							}}
						>
							Ainda não tem uma conta?
						</p>

						<Link className="create-account" to="/">
							Criar Conta
						</Link>
					</main>
				</div>
			</div>
		</>
	);
};

export default styled(Login)`
	width: 100%;
	display: flex;

	.backgroundImage {
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
	}

	.form {
		width: 100%;
		padding: 32px;

		header {
			width: 100%;
			padding-top: 32px;

			.container {
				width: 100%;

				img {
					max-width: 110px;
				}
			}
		}

		main {
			max-width: 350px;
			padding-top: 100px;
			margin-left: auto;
			margin-right: auto;

			h1 {
				font-size: 32px;
				font-weight: 700;
				line-height: 40px;
				padding-bottom: 24px;
			}
			p {
				color: var(--color-gray-light);
				line-height: 175%;
				padding-bottom: 16px;
			}

			.label-float {
				position: relative;
				padding-top: 13px;

				label {
					padding: 0 8px;
					position: absolute;
					top: 13px;
					left: 16px;
					background-color: var(--bg-color-primary);
					text-align: center;

					font-family: 'Open Sans';
					font-weight: 600;
					line-height: 18px;
					color: var(--color-gray-light);
				}

				input {
					width: 100%;
					font-size: 16px;
					margin: 8px 0;
					padding: 14px 16px;
					border: 1px solid var(--color-gray);
					border-radius: 4px;
					background: var(--bg-color-primary);
					color: var(--color-gray-light);
				}
				input::placeholder {
					color: var(--bg-color-primary);
				}
			}

			.forgot-password {
				color: var(--color-primary) !important;
				float: right;
				padding: 8px 0;
			}

			button {
				margin-top: 16px;
				margin-bottom: 24px;
				width: 100%;
				height: 40px;
				cursor: pointer;
			}

			.create-account {
				color: var(--color-primary) !important;
			}
		}
	}
`;
