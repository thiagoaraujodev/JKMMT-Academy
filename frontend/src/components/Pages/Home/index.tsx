import styled from 'styled-components';
import { IPropsStyled } from '../../../interfaces/styled';
import Footer from '../../Shared/Footer';
import Header from '../../Shared/Header';
import Courses from './Courses';
import Description from './Description';
import Testimony from './Testimony';

const Home: React.FC<IPropsStyled> = ({ className }) => {
	return (
		<>
			<Header />
			<main className={className}>
				<Description />
				<Courses />
				<div className="divider"></div>

				<Testimony />

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
