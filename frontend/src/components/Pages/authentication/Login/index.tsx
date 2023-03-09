import { ChangeEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../../../../context/AuthProvider/useAuth';
import { IPropsStyled } from '../../../../interfaces/styled';
import BackgroundImage from '../../../shared/BackgroundImage';
import HeaderAuthentication from '../../../shared/Header/HeaderAuthentication';
import Input from '../../../shared/Input';

const Login = ({ className }: IPropsStyled) => {
	const auth = useAuth();
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});
	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		try {
			await auth.authenticate(formData.email, formData.password);
			navigate('/dashboard');
		} catch (error) {
			setErrorMessage('Email ou Senha inválidos!!');
		}
	};

	return (
		<div className={className}>
			<BackgroundImage />

			<div className="form">
				<HeaderAuthentication />

				<main>
					<h1>Entrar</h1>
					<p>Preencha seus dados para entrar</p>

					<form onSubmit={handleSubmit}>
						<Input
							label="Email"
							name="email"
							type="email"
							value={formData.email}
							onChange={handleInputChange}
							required
							placeholder="Email"
						/>

						<Input
							label="Senha"
							name="password"
							type="password"
							value={formData.password}
							onChange={handleInputChange}
							required
							placeholder="Senha"
						/>

						<Link className="forgot-password" to="/nova-senha">
							Esqueci minha senha
						</Link>

						{errorMessage && <div className="error"> {errorMessage} </div>}

						<button className="bt bt-primary" type="submit">
							Entrar
						</button>
					</form>

					<p
						style={{
							padding: 0,
						}}
					>
						Ainda não tem uma conta?
					</p>

					<Link className="create-account" to="/registro">
						Criar Conta
					</Link>
				</main>
			</div>
		</div>
	);
};

export default styled(Login)`
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
				div:nth-child(2) {
					margin-bottom: 0;
				}

				.forgot-password {
					display: flex;
					justify-content: flex-end;
					font-size: 14px;
					color: var(--color-primary) !important;
				}

				.error {
					padding-top: 16px;
					display: flex;
					justify-content: center;
					color: #ff0000;
				}

				button {
					margin: 16px 0;
					width: 100%;
					height: 40px;
					cursor: pointer;
				}
			}

			.create-account {
				color: var(--color-primary) !important;
			}
		}
	}
`;
