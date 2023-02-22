import styled from 'styled-components';
import { IPropsStyled } from '../../../../interfaces/styled';
import CardSkill from './CardSkill';

const Courses: React.FC<IPropsStyled> = ({ className }) => {
	return (
		<>
			<section className={className}>
				<div className={`container`}>
					<h2>Alguns de Nossos Cursos</h2>

					<p>
						Aqui você encontra diversos cursos grátis para conquistar aquela vaga de emprego que você tanto almeja. Logo
						abaixo você pode verificar que estamos disponibilizando cursos voltados a tecnologia que o mercado precisa.
						Faça sua conta e verifique o que você pode aprender ainda hoje.
					</p>

					<CardSkill />
				</div>
			</section>
		</>
	);
};

export default styled(Courses)`
	& .container {
		padding: 80px 65px;

		h2 {
			font-size: 36px;
			line-height: 50px;
			font-weight: 800;
			text-align: center;
			color: var(--color-primary);
			padding-bottom: 64px;
		}
		p {
			max-width: 1100px;
			padding: 0 16px 64px 16px;
			margin-left: auto;
			margin-right: auto;
			font-size: 16px;
			line-height: 30px;
			text-align: center;
		}
	}
`;
