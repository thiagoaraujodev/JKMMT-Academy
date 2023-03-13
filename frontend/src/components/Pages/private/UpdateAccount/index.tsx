import axios from 'axios';
import { ChangeEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../../../../context/AuthProvider/useAuth';
import { IPropsStyled } from '../../../../interfaces/styled';
import { updateUserRequest } from '../../../../services/resources/user';
import Footer from '../../../shared/Footer';
import HeaderPrivate from '../../../shared/Header/HeaderPrivate';
import Input from '../../../shared/Input';

interface FormState {
	name: string;
	email: string;
	password: string;
	newPassword: string;
	isDisabled: boolean;
}

const UpdateAccount = ({ className }: IPropsStyled) => {
	const { id, name, email } = useAuth();
	const navigate = useNavigate();

	const [formData, setFormData] = useState<FormState>({
		name: name ?? '',
		email: email ?? '',
		password: '',
		newPassword: '',
		isDisabled: true,
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

		if (!formData.password || !formData.newPassword) {
			setErrorMessage('Por favor, preencha todos os campos.');
			return;
		}

		if (formData.password !== formData.newPassword) {
			setErrorMessage('As senhas não coincidem');
			return;
		}

		try {
			const response = await updateUserRequest(Number(id), formData.name, formData.email, formData.password);
			if (response && response.status === 200) {
				navigate('/dashboard');
			} else {
				setErrorMessage('Ocorreu um erro desconhecido. Por favor, tente novamente mais tarde.(1)');
			}
		} catch (error) {
			if (axios.isAxiosError(error)) {
				const response = error.response;
				if (response && response.status === 404) {
					setErrorMessage('O usuário não existe!');
				} else if (error.code === 'ECONNABORTED') {
					setErrorMessage('O servidor está demorando muito para responder. Por favor, tente novamente mais tarde.');
				} else if (error.message.includes('Network Error')) {
					setErrorMessage(
						'Ocorreu um problema de conexão. Por favor, verifique sua conexão de rede e tente novamente.',
					);
				} else {
					setErrorMessage('Ocorreu um erro desconhecido. Por favor, tente novamente mais tarde.(2)');
				}
			} else {
				setErrorMessage('Dados inválidos!!');
			}
		}
	};

	return (
		<>
			<HeaderPrivate />

			<main className={className}>
				<div className="container">
					<h1>Atualizar Cadastro</h1>
					<p>Atualizar dados cadastrais</p>

					<form onSubmit={handleSubmit}>
						<Input
							label="Nome"
							name="name"
							type="text"
							value={formData.name}
							onChange={handleInputChange}
							placeholder="Nome"
							disabled={formData.isDisabled}
							required
						/>

						<Input
							label="Email"
							name="email"
							type="email"
							value={formData.email}
							onChange={handleInputChange}
							placeholder="Email"
							disabled={formData.isDisabled}
							required
						/>

						<Input
							label="Senha"
							name="password"
							type="password"
							value={formData.password}
							onChange={handleInputChange}
							required
							placeholder="Nova senha"
						/>

						<Input
							label="Confirmar Senha"
							name="newPassword"
							type="password"
							value={formData.newPassword}
							onChange={handleInputChange}
							required
							placeholder="Confirme sua nova senha"
						/>

						{errorMessage && <div className="error"> {errorMessage} </div>}

						<div className="buttons">
							<Link className="bt bt-primary-outlined" to="/dashboard">
								Cancelar
							</Link>

							<button className="bt bt-primary" type="submit">
								Atualizar
							</button>
						</div>
					</form>
				</div>
			</main>

			<Footer />
		</>
	);
};

export default styled(UpdateAccount)`
	margin-top: 80px;
	min-height: 82vh;

	.container {
		padding: 80px 16px;
		width: 100%;
		max-width: 500px;
		display: flex;
		flex-direction: column;

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
			div:nth-child(4) {
				margin-bottom: 0;
			}

			#password,
			#newPassword {
				max-width: 300px;

				&::placeholder {
					color: var(--color-gray);
				}
			}

			.error {
				padding-top: 16px;
				display: flex;
				justify-content: center;
				color: #ff0000;
			}
			.buttons {
				padding-top: 16px;
				display: flex;
				justify-content: space-evenly;

				button {
					width: 100%;
					max-width: 123px;
					cursor: pointer;
				}
			}
		}
	}
`;
