import { memo } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../../context/AuthProvider';
import GlobalStyle from '../../styles/globalStyles';
import Footer from '../shared/Footer';
import Header from '../shared/Header';
import { ProtectedLayout } from '../shared/ProtectedLayout';
import CreateAccount from './authentication/CreateAccount';
import ForgotPassword from './authentication/ForgotPassword';
import Login from './authentication/Login';
import Home from './Home';
import Dashboard from './private/Dashboard';
import MyCourses from './private/MyCourses';

const Pages = memo(() => {
	return (
		<AuthProvider>
			<BrowserRouter>
				<GlobalStyle />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/registro" element={<CreateAccount />} />
					<Route path="/nova-senha" element={<ForgotPassword />} />
					<Route
						path="/dashboard"
						element={
							<ProtectedLayout>
								<Dashboard />
							</ProtectedLayout>
						}
					></Route>
					<Route
						path="/meus-cursos"
						element={
							<ProtectedLayout>
								<MyCourses />
							</ProtectedLayout>
						}
					></Route>
					<Route
						path="/404"
						element={
							<>
								<Header />
								<main
									style={{
										height: '90vh',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
									}}
								>
									<h1>Página não encontrada</h1>
								</main>
								<Footer />
							</>
						}
					/>
					<Route path="*" element={<Navigate replace to="/404" />} />
				</Routes>
			</BrowserRouter>
		</AuthProvider>
	);
});

export default Pages;
