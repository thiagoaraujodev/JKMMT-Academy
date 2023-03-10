import { createContext, useEffect, useState } from 'react';
import { getUserByEmail, loginRequest } from '../../services/resources/user';
import { IAuthProvider, IContext, IUser } from './types';
import { getUserLocalStorage, setUserLocalStorage } from './util';

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
	const [user, setUser] = useState<IUser | null>(null);

	useEffect(() => {
		const user = getUserLocalStorage();

		if (user) {
			setUser(user);
		}
	}, []);

	useEffect(() => {
		setUserLocalStorage(user);
	}, [user]);

	async function authenticate(email: string, password: string) {
		const response = await loginRequest(email, password);
		const payload = response;

		setUser(payload);
		setUserLocalStorage(payload);

		await getCurrentUser(email);
	}

	function logout() {
		setUser(null);
		setUserLocalStorage(null);
		location.reload();
	}

	async function getCurrentUser(email: string) {
		const response = await getUserByEmail(email);
		setUser(prevState => {
			return { ...prevState, ...response.data };
		});
	}

	return (
		<AuthContext.Provider value={{ ...user, authenticate, getCurrentUser, logout }}>{children}</AuthContext.Provider>
	);
};
