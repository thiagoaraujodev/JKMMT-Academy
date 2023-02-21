import { memo } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import GlobalStyle from '../../styles/globalStyles';
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
								<main>
									<h1
										style={{
											margin: '100px 0 20px 16px',
										}}
									>
										Página não encontrada
									</h1>
								</main>
								{/* <Footer /> */}
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
