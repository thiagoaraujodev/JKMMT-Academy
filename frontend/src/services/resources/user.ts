import { api } from '../../services/api';

export interface IUserDTO {
	id: string;
	name: string;
	email: string;
}

export const getUser = async (email: string) => {
	const result = await api.get<IUserDTO>(`api/usuario/email/${email}`);
	return result;
};

// export async function LoginRequest(email: string, password: string) {
export const LoginRequest = async (email: string, password: string) => {
	try {
		const request = await api.post('login', { email, password });

		return request.data;
	} catch (error) {
		return null;
	}
};
