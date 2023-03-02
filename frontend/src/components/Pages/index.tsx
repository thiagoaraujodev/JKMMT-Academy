import { memo } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import GlobalStyle from '../../styles/globalStyles';
import Footer from '../shared/Footer';
import Header from '../shared/Header';
import CreateAccount from './authentication/CreateAccount';
import ForgotPassword from './authentication/ForgotPassword';
import Login from './authentication/Login';
import Home from './Home';
import Dashboard from './private/Dashboard';

const Pages = memo(() => {
	return (
		<>
			<BrowserRouter>
				<GlobalStyle />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/registro" element={<CreateAccount />} />
					<Route path="/nova-senha" element={<ForgotPassword />} />
					<Route path="/dashboard" element={<Dashboard />} />
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
		</>
	);
});

export default Pages;
