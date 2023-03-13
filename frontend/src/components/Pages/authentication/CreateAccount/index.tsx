import axios from 'axios';
import { ChangeEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IPropsStyled } from '../../../../interfaces/styled';
import { newUserRequest } from '../../../../services/resources/user';
import BackgroundImage from '../../../shared/BackgroundImage';
import HeaderAuthentication from '../../../shared/Header/HeaderAuthentication';
import Input from '../../../shared/Input';

const CreateAccount = ({ className }: IPropsStyled) => {
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		name: '',
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

		if (!formData.name || !formData.email || !formData.password) {
			setErrorMessage('Por favor, preencha todos os campos.');
			return;
		}

		try {
			const response = await newUserRequest(formData.name, formData.email, formData.password);
			if (response && response.status === 200) {
				navigate('/login');
			} else {
				setErrorMessage('Ocorreu um erro desconhecido. Por favor, tente novamente mais tarde.');
			}
		} catch (error) {
			if (axios.isAxiosError(error)) {
				const response = error.response;
				if (response && response.status === 409) {
					setErrorMessage('O usuário já existe!');
				} else if (error.code === 'ECONNABORTED') {
					setErrorMessage('O servidor está demorando muito para responder. Por favor, tente novamente mais tarde.');
				} else if (error.message.includes('Network Error')) {
					setErrorMessage(
						'Ocorreu um problema de conexão. Por favor, verifique sua conexão de rede e tente novamente.',
					);
				} else {
					setErrorMessage('Ocorreu um erro desconhecido. Por favor, tente novamente mais tarde.');
				}
			} else {
				setErrorMessage('Dados inválidos!!');
			}
		}
	};

	return (
		<>
			<div className={className}>
				<BackgroundImage />

				<div className="form">
					<HeaderAuthentication />

					<main>
						<h1>Abra Sua Conta</h1>
						<p>Informe seus dados para criar sua conta</p>

						<form onSubmit={handleSubmit}>
							<Input
								label="Nome"
								name="name"
								type="text"
								value={formData.name}
								onChange={handleInputChange}
								required
								placeholder="Nome"
							/>

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
							{errorMessage && <div className="error"> {errorMessage} </div>}

							<button className="bt bt-primary" type="submit">
								Cadastrar
							</button>
						</form>

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

			form {
				div:nth-child(3) {
					margin-bottom: 0;
				}

				.error {
					padding-top: 16px;
					display: flex;
					justify-content: center;
					color: #ff0000;
				}

				button {
					margin-top: 16px;
					margin-bottom: 24px;
					width: 100%;
					height: 40px;
					cursor: pointer;
				}
			}

			.login {
				color: var(--color-primary) !important;
			}
		}
	}
`;
