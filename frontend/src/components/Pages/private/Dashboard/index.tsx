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
				********** Tem que acessar apenas se tiver logado e remover os botões do Header e colocar o nome da pessoa
				logada... **********
			</main>
			<Footer />
		</>
	);
};

export default styled(Dashboard)`
	margin-top: 80px;

	.container.flex {
		flex-wrap: wrap;
		justify-content: space-evenly;
		gap: 48px;
	}
`;
