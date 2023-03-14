import { api } from '../../services/api';

export interface IUserDTO {
	id?: string;
	name: string;
	email: string;
	password?: string;
}

export const getUserByEmail = async (email: string) => {
	const result = await api.get<IUserDTO>(`/api/usuario/email/${email}`);
	return result;
};

export const loginRequest = async (email: string, password: string) => {
	try {
		const request = await api.post('/login', { email, password });

		return request.data;
	} catch (error) {
		return null;
	}
};

export const newUserRequest = async (name: string, email: string, password: string) => {
	try {
		const request = await api.post('/api/usuario/salvar', { name, email, password });

		return request;
	} catch (error) {
		throw error;
	}
};

export const updateUserRequest = async (id: number, name: string, email: string, password: string) => {
	console.log(id, name, email, password);

	try {
		const request = await api.put(`/api/usuario/atualizar/${id}`, { id, name, email, password });

		return request;
	} catch (error) {
		throw error;
	}
};

export const getUserByEmailToValidateEmail = async (email: string) => {
	const result = await api.get<boolean>(`/api/usuario/validarEmail?email=${email}`);
	return result.data;
};
