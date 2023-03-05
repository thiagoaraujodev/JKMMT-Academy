import { useAuth } from '../../../context/AuthProvider/useAuth';
import Login from '../../Pages/authentication/Login';

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
	const auth = useAuth();

	if (!auth.email) {
		return <Login />;
	}
	return children;
};
