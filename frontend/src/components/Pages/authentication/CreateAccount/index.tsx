import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IPropsStyled } from '../../../../interfaces/styled';
import BackgroundImage from '../../../shared/BackgroundImage';
import HeaderAuthentication from '../../../shared/Header/HeaderAuthentication';

const CreateAccount: React.FC<IPropsStyled> = ({ className }) => {
	return (
		<>
			<div className={className}>
				<BackgroundImage />

				<div className="form">
					<HeaderAuthentication />

					<main>
						<h1>Abra Sua Conta</h1>
						<p>Informe seus dados para criar sua conta</p>

						<div className="label-float">
							<input
								type="text"
								placeholder="Nome"
								// value={name}
								// onChange={handleNameInput}
								required
							/>
							<label>Nome</label>
						</div>

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

						<button className="bt bt-primary" type="button">
							Cadastrar
						</button>

						<p
							style={{
								padding: 0,
							}}
						>
							Já possui uma conta?
						</p>

						<Link className="login" to="/login">
							Clique Aqui
						</Link>
					</main>
				</div>
			</div>
		</>
	);
};

export default styled(CreateAccount)`
	width: 100%;
	display: flex;

	.form {
		width: 100%;
		padding: 32px;

		main {
			max-width: 350px;
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

			button {
				margin-top: 16px;
				margin-bottom: 24px;
				width: 100%;
				height: 40px;
				cursor: pointer;
			}

			.login {
				color: var(--color-primary) !important;
			}
		}
	}
`;
