import jwtDecode from 'jwt-decode';
import { DecodedToken, IUser } from './types';
import { useAuth } from './useAuth';

export function setUserLocalStorage(user: IUser | null) {
	localStorage.setItem('@JKMMT:Token', JSON.stringify(user));
}

export function getUserLocalStorage() {
	const json = localStorage.getItem('@JKMMT:Token');

	if (!json) {
		return null;
	}

	const user = JSON.parse(json);
	return user ?? null;
}

function isTokenExpired(token: string): boolean {
	const decodedToken = jwtDecode<DecodedToken>(token);
	const expirationTime = decodedToken.exp;
	const currentTime = Date.now() / 1000;

	return expirationTime < currentTime;
}

export function validToken() {
	const authContext = useAuth();
	const token = authContext?.token;

	if (token) {
		const isExpired = isTokenExpired(token);

		if (isExpired) {
			authContext.logout();
			return false;
		} else {
			return true;
		}
	}
}
