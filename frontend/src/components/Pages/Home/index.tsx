import styled from 'styled-components';
import { IPropsStyled } from '../../../interfaces/styled';
import Footer from '../../Shared/Footer';
import Header from '../../Shared/Header';
import Courses from './Courses';
import Description from './Description';

const Home: React.FC<IPropsStyled> = ({ className }) => {
	return (
		<>
			<Header />
			<main className={className}>
				<Description />
				<Courses />
				<div className="divider"></div>

				<section id="testimony">
					<div className={`container`}>
						<h2>Depoimento de Nossos Alunos</h2>
					</div>
				</section>

				<div className="divider"></div>

				<section id="questions">
					<div className={`container`}>
						<h2>Saiba Mais</h2>
					</div>
				</section>

				<div className="divider"></div>
			</main>
			<Footer />
		</>
	);
};

export default styled(Home)`
	margin-top: 80px;
`;
