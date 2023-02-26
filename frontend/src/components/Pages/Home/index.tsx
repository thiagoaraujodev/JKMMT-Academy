import styled from 'styled-components';
import { IPropsStyled } from '../../../interfaces/styled';
import Footer from '../../shared/Footer';
import Header from '../../shared/Header';
import Courses from './Courses';
import Description from './Description';
import Questions from './Questions';
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

				<Questions />

				<div className="divider"></div>
			</main>
			<Footer />
		</>
	);
};

export default styled(Home)`
	margin-top: 80px;
`;
