import { memo } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import GlobalStyle from '../../styles/globalStyles';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';
import Home from './Home';

const Pages = memo(() => {
	return (
		<>
			<BrowserRouter>
				<GlobalStyle />
				<Routes>
					<Route path="/" element={<Home />} />
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
