import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IPropsStyled } from '../../../../interfaces/styled';
import { getUserByEmailToValidateEmail } from '../../../../services/resources/user';
import { generatePasswordResetToken } from '../../../../services/util';
import BackgroundImage from '../../../shared/BackgroundImage';
import HeaderAuthentication from '../../../shared/Header/HeaderAuthentication';
import Input from '../../../shared/Input';

interface ForgotPasswordFormProps extends IPropsStyled {
	onSubmit: (email: string) => void;
}

const ForgotPassword: React.FC<ForgotPasswordFormProps> = ({ className, onSubmit }) => {
	const [email, setEmail] = useState('');
	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!email) {
			setErrorMessage('Por favor, preencha um E-mail válido.');
			return;
		}

		try {
			const isUser = await getUserByEmailToValidateEmail(email);
			if (isUser) {
				const token = generatePasswordResetToken(email);
				//envia o token por email
				//mostra a outra tela
				//confirma o token enviado
				//e aparece os campos de alterar a senha
			}
		} catch (error) {
			setErrorMessage('Email inválido');
		}
	};

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	return (
		<>
			<div className={className}>
				<BackgroundImage />

				<div className="form">
					<HeaderAuthentication />

					<main>
						<h1>Esqueci minha senha</h1>
						<p>Insira seu e-mail cadastrado para recuperar sua senha</p>

						<form onSubmit={handleSubmit}>
							<Input
								label="Email"
								name="email"
								type="email"
								value={email}
								onChange={handleEmailChange}
								required
								placeholder="Email"
							/>

							{errorMessage && <div className="error"> {errorMessage} </div>}

							<button className="bt bt-primary" type="submit">
								Confirmar E-mail
							</button>
						</form>

						<p
							style={{
								padding: 0,
								marginTop: '16px',
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

export default styled(ForgotPassword)`
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

			form {
				.error {
					padding-bottom: 16px;
					display: flex;
					justify-content: center;
					color: #ff0000;
				}
			}

			.bt {
				width: 100%;
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
		}
	}
`;
