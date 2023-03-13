import styled from 'styled-components';
// import localize from '../../../../assets/Images/localize.png';
import historic from '../../../../data/historic.json';
import { IPropsStyled } from '../../../../interfaces/styled';
import Footer from '../../../shared/Footer';
import HeaderPrivate from '../../../shared/Header/HeaderPrivate';
import HistoricTable from '../../../shared/HistoricTable';

const Historic: React.FC<IPropsStyled> = ({ className }) => {
	return (
		<>
			<HeaderPrivate />
			<main className={className}>
				<div className="container">
					<div className="description">
						<div>
							<h1>Histórico</h1>
							<p>Consulte suas conquistas</p>
						</div>
					</div>
					<div className="contents">
						{/* <div className="no-contents">
							<img src={localize} alt="Boneco com lupa" />
							<h3>Nenhum histórico encontrado</h3>
							<p>
								Não encontramos nenhum histórico de curso em sua conta. Inscreva-se em um novo curso e comece sua rotina
								de estudos diários!
							</p>
						</div> */}
						<HistoricTable historicData={historic} />
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default styled(Historic)`
	margin-top: 80px;

	.container {
		min-height: 81vh;
		padding-top: 80px;
		padding-bottom: 80px;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;

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
		}

		.contents {
			width: 100%;
			max-width: 890px;
			display: flex;
			flex-direction: column;
			align-items: center;

			.no-contents {
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

			table {
				width: 100%;
				font-family: 'Open Sans', sans-serif;
				border-collapse: collapse;

				tr {
					padding: 10px;
					display: flex;
					flex-wrap: wrap;
					font-size: 14px;
					line-height: 21px;
					color: var(--text-color-black-gray-light);
					border-bottom: 1px solid var(--color-gray-lighter);

					th:nth-child(1),
					td:nth-child(1) {
						width: 100%;
						max-width: 110px;
					}

					th:nth-child(2),
					td:nth-child(2) {
						width: 100%;
						max-width: 320px;
					}

					th:nth-child(3),
					td:nth-child(3) {
						width: 100%;
						max-width: 100px;
					}

					th:nth-child(4),
					td:nth-child(4) {
						width: 100%;
						max-width: 120px;
					}

					th:nth-child(5),
					td:nth-child(5) {
						width: 100%;
						max-width: 120px;
					}

					th:nth-child(6),
					td:nth-child(6) {
						width: 100%;
						max-width: 100px;
					}

					th:nth-child(1),
					th:nth-child(2) {
						text-align: left;
					}

					td:nth-child(3) {
						color: var(--color-primary);
						text-align: center;
					}

					td:nth-child(4),
					td:nth-child(5),
					td:nth-child(6) {
						text-align: center;
					}

					td:nth-child(6) {
						font-size: 30px;
						transform: rotate(-90deg);
					}
				}
			}
		}
	}
`;
