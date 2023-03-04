import { Link } from 'react-router-dom';
import styled from 'styled-components';
import courses from '../../../../data/courses.json';
import { IPropsStyled } from '../../../../interfaces/styled';
import CardCourse from '../../../shared/CardCourse';
import Footer from '../../../shared/Footer';
import Header from '../../../shared/Header';

const Dashboard: React.FC<IPropsStyled> = ({ className }) => {
	return (
		<>
			<Header />
			<main className={className}>
				<div className="container flex">
					<div className="description">
						<div>
							<h1>Cursos</h1>
							<p>Inicie um novo curso</p>
						</div>
						<Link className="bt bt-primary-outlined" to="/meus-cursos">
							Meus Cursos
						</Link>
					</div>
					{courses.map((course, index) => (
						<CardCourse
							key={index}
							image={course.image}
							title={course.title}
							subTitle={course.sub_title}
							link={course.link}
						/>
					))}
				</div>
			</main>
			<Footer />
		</>
	);
};

export default styled(Dashboard)`
	margin-top: 80px;

	.container.flex {
		padding-top: 80px;
		padding-bottom: 80px;
		flex-wrap: wrap;
		justify-content: space-evenly;
		gap: 48px;

		.description {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-family: 'Open Sans', sans-serif;

			h1 {
				font-weight: 700;
				font-size: 32px;
				line-height: 40px;
				color: var(--text-color-black-gray);
			}
			p {
				font-size: 16px;
				line-height: 28px;
				color: var(--text-color-black-gray-light);
			}
		}
	}
`;
