import { Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IPropsStyled } from '../../../../interfaces/styled';
import QuestionsAndAnswers from './QuestionsAndAnswers';

const Questions: React.FC<IPropsStyled> = ({ className }) => {
	return (
		<>
			<section className={className}>
				<div className={`container`}>
					<h2>Saiba Mais</h2>
					<div className="container flex">
						<div className="knowMore">
							<h4>Perguntas comuns</h4>
							<p>Não achou sua resposta aqui?</p>
							<Link className="bt bt-primary" to="/">
								<Phone color="white" size={15} fill="white" /> Fale Conosco Aqui
							</Link>
							<div className="flex">
								<Link className="bt bt-primary-outlined" to="/registro">
									Criar Conta
								</Link>

								<Link className="bt bt-primary-outlined" to="/login">
									Já tenho Conta
								</Link>
							</div>
						</div>
						<div className="questions">
							<QuestionsAndAnswers />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default styled(Questions)`
	& .container {
		padding: 80px 16px;

		h2 {
			font-size: 36px;
			line-height: 50px;
			font-weight: 800;
			text-align: center;
			color: var(--color-primary);
			padding-bottom: 64px;
		}
		.container.flex {
			max-width: 1036px;
			padding: 0 16px;
			flex-wrap: wrap;
			justify-content: space-between;

			@media (max-width: 768px) {
				justify-content: center;
				gap: 0;
			}

			@media (min-width: 768px) {
				gap: 32px;
			}

			.knowMore {
				width: 100%;
				max-width: 258px;

				h4 {
					padding-bottom: 8px;
					font-size: 18px;
					font-weight: 600;
					line-height: 25px;
					color: #111827;
				}

				p {
					padding-bottom: 32px;
					font-size: 14px;
					line-height: 19px;
					color: #111827;
				}

				a {
					display: flex;
					flex-direction: row;
					justify-content: center;
					align-items: center;
					gap: 12px;

					line-height: 18px;
				}

				.flex {
					padding: 32px 0;
					flex-wrap: wrap;
					justify-content: center;
					gap: 10px;

					a {
						font-weight: 400;
						font-size: 15px;
						line-height: 18px;
					}
				}
			}

			.questions {
				width: 100%;

				@media (max-width: 768px) {
					max-width: 100%;
				}

				@media (min-width: 768px) {
					max-width: calc(100% - 290px);
				}
				@media (min-width: 992px) {
					max-width: calc(100% - 380px);
				}
			}
		}
	}
`;
