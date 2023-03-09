import { useAuth } from '../../../context/AuthProvider/useAuth';
import { validToken } from '../../../context/AuthProvider/util';
import Login from '../../Pages/authentication/Login';

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
	const auth = useAuth();
	const isValidToken = validToken();

	if (!auth.email && !isValidToken) {
		return <Login />;
	}
	return children;
};
