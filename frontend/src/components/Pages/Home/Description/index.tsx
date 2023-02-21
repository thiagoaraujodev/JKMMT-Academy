import styled from 'styled-components';
import { IPropsStyled } from '../../../../interfaces/styled';

import { Link } from 'react-router-dom';
import description from '../../../../assets/Images/description.png';

const Description: React.FC<IPropsStyled> = ({ className }) => {
	return (
		<section className={className}>
			<div className={`container`}>
				<div className="description">
					<h1>A Melhor Academia de Gestão de Cursos Online do Mercado!</h1>
					<p>
						Com a JKMMT Academy, você gerencia e controla a forma de aprendizado ideal para desenvolver as habilidades
						necessárias para adquirir novos Soft e Hard Skills, ou seja, capacidades específicas e diretamente ligadas a
						funções de um bom profissional. E tudo isso de forma totalmente integrada e online!
					</p>
					<div className="flex">
						<Link className="bt bt-green uppercase" to="/">
							experimente gratis. click aqui!!!
						</Link>
					</div>
				</div>
				<div className="image">
					<img src={description} alt="Pessoas trabalhando em seus cards." />
				</div>
			</div>
		</section>
	);
};

export default styled(Description)`
	background-color: var(--color-primary);

	& .container {
		padding: 120px 0;
		display: flex;
		gap: 16px;

		@media (max-width: 992px) {
			flex-wrap: wrap;
			justify-content: center;
		}
	}

	& .description {
		color: #ffffff;
		padding: 0 24px;

		h1 {
			font-size: 36px;
			line-height: 50px;
			font-weight: 800;
			padding-bottom: 60px;
		}
		p {
			font-size: 20px;
			line-height: 32px;
			padding-bottom: 60px;
		}
		.bt {
			padding: 16px 24px;
		}
		.flex {
			justify-content: center;
		}
	}

	& .image {
		min-width: 48%;
		max-width: 100%;
		height: auto;
		padding: 0 24px;
		align-self: center;

		@media (max-width: 767.98px) {
			display: none;
		}
	}
`;
