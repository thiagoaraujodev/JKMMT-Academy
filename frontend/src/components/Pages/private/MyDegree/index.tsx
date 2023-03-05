import { Link } from 'react-router-dom';
import styled from 'styled-components';
import localize from '../../../../assets/Images/localize.png';
import { IPropsStyled } from '../../../../interfaces/styled';
import Footer from '../../../shared/Footer';
import HeaderPrivate from '../../../shared/Header/HeaderPrivate';

const MyDegree: React.FC<IPropsStyled> = ({ className }) => {
	return (
		<>
			<HeaderPrivate />
			<main className={className}>
				<div className="container flex">
					<div className="description">
						<div>
							<h1>Diploma</h1>
							<p>Compartilhe suas conquistas</p>
						</div>
						<div className="buttons">
							<Link className="bt bt-primary" to="/dashboard">
								Incluir Novo Curso
							</Link>
							<Link className="bt bt-primary-outlined" to="/historico">
								Consultar Histórico
							</Link>
						</div>
					</div>
					<div className="contents">
						<img src={localize} alt="Boneco com lupa" />
						<h3>Nenhum diploma encontrado</h3>
						<p>
							Não encontramos nenhum diploma em sua conta. Inscreva-se em um novo curso e comece sua rotina de estudos
							diários!
						</p>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default styled(MyDegree)`
	margin-top: 80px;

	.container.flex {
		padding-top: 80px;
		padding-bottom: 80px;
		flex-wrap: wrap;
		justify-content: space-evenly;
		height: 81vh;

		.description {
			width: 100%;
			height: fit-content;
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

			.buttons {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				gap: 16px;
			}
		}

		.contents {
			width: 100%;
			max-width: 567px;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 15px;
			font-family: 'Open Sans', sans-serif;

			img {
				max-width: 99px;
			}

			h3 {
				font-weight: 700;
				font-size: 18px;
				line-height: 24px;
				color: #78909c;
			}
			p {
				font-size: 14px;
				line-height: 24px;
				text-align: center;
				color: #546e7a;
			}
		}
	}
`;
