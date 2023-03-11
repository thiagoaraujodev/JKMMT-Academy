export interface DecodedToken {
	exp: number;
}

export interface IUser {
	id?: string;
	name?: string;
	email?: string;
	token?: string;
}

export interface IContext extends IUser {
	authenticate: (email: string, password: string) => Promise<void>;
	getCurrentUser: (email: string) => Promise<void>;
	logout: () => void;
}

export interface IAuthProvider {
	children: JSX.Element;
}
