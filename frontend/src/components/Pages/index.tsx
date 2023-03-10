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
import Course from './private/Course';
import Dashboard from './private/Dashboard';
import Historic from './private/Historic';
import MyCourses from './private/MyCourses';
import MyDegree from './private/MyDegree';
import UpdateAccount from './private/UpdateAccount';

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
						path="/cadastro"
						element={
							<ProtectedLayout>
								<UpdateAccount />
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
						path="/diploma"
						element={
							<ProtectedLayout>
								<MyDegree />
							</ProtectedLayout>
						}
					></Route>

					<Route
						path="/historico"
						element={
							<ProtectedLayout>
								<Historic />
							</ProtectedLayout>
						}
					></Route>

					<Route
						path="/curso/:courseLink"
						element={
							<ProtectedLayout>
								<Course />
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
									<h1>P??gina n??o encontrada</h1>
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
