import { Star } from 'lucide-react';
import styled from 'styled-components';
import LuizHenrique from '../../../../../assets/images/testimony/ali-morshedlou-WMD64tMfc4k-unsplash.png';
import JamesRodrigues from '../../../../../assets/images/testimony/ben-parker-OhKElOkQ3RE-unsplash-scaled.png';
import AlvaroReis from '../../../../../assets/images/testimony/foto-sushi-6anudmpILw4-unsplash-scaled.png';
import { IPropsStyled } from '../../../../../interfaces/styled';

const CardTestimony: React.FC<IPropsStyled> = ({ className }) => {
	return (
		<>
			<div className={className}>
				<div className="round">
					<img src={JamesRodrigues} alt="James Rodrigues" />
				</div>
				<p className="title">James Rodrigues</p>
				<div className="star">
					<Star color="#7A43ED" fill="#7A43ED" size={18} strokeWidth={1} />
					<Star color="#7A43ED" fill="#7A43ED" size={18} strokeWidth={1} />
					<Star color="#7A43ED" fill="#7A43ED" size={18} strokeWidth={1} />
					<Star color="#7A43ED" fill="#7A43ED" size={18} strokeWidth={1} />
					<Star color="#7A43ED" fill="#f1eaff" size={18} strokeWidth={1} />
				</div>
				<p>
					“O curso de Angular me proporcionou um conhecimento amplo e atualizado do mercado de tecnologia, permitindo
					que eu atue com excelência na minha carreira.”
				</p>
			</div>

			<div className={className}>
				<div className="round">
					<img src={LuizHenrique} alt="Luiz Henrique" />
				</div>
				<p className="title">Luiz Henrique</p>
				<div className="star">
					<Star color="#7A43ED" fill="#7A43ED" size={18} strokeWidth={1} />
					<Star color="#7A43ED" fill="#7A43ED" size={18} strokeWidth={1} />
					<Star color="#7A43ED" fill="#7A43ED" size={18} strokeWidth={1} />
					<Star color="#7A43ED" fill="#7A43ED" size={18} strokeWidth={1} />
					<Star color="#7A43ED" fill="#7A43ED" size={18} strokeWidth={1} />
				</div>
				<p>
					“A equipe de instrutores dos cursos são altamente capacitados e disponibilizam um material de estudo de
					qualidade, facilitando o aprendizado. Aqui você aprende de verdade.”
				</p>
			</div>

			<div className={className}>
				<div className="round">
					<img src={AlvaroReis} alt="Alvaro Reis" />
				</div>
				<p className="title">Alvaro Reis</p>
				<div className="star">
					<Star color="#7A43ED" fill="#7A43ED" size={18} strokeWidth={1} />
					<Star color="#7A43ED" fill="#7A43ED" size={18} strokeWidth={1} />
					<Star color="#7A43ED" fill="#7A43ED" size={18} strokeWidth={1} />
					<Star color="#7A43ED" fill="#f1eaff" size={18} strokeWidth={1} />
					<Star color="#7A43ED" fill="#f1eaff" size={18} strokeWidth={1} />
				</div>
				<p>
					“O curso de React superou minhas expectativas, proporcionando um ambiente dinâmico e interativo que me motivou
					a buscar novos desafios na área de tecnologia.”
				</p>
			</div>
		</>
	);
};

export default styled(CardTestimony)`
	width: 100%;
	max-width: 370px;
	height: 100%;
	min-height: 452px;
	padding: 40px 24px;
	display: flex;
	flex-direction: column;
	align-items: center;
	border: 2px solid var(--color-primary);
	border-radius: 32px;
	text-align: center;

	.round {
		height: 170px;
		width: 170px;
		border-radius: 100%;
		overflow: hidden;

		img {
			width: 100%;
			position: relative;
			top: -10px;
		}
	}

	.title {
		padding-top: 16px;
		padding-bottom: 16px;
		font-family: 'Playfair Display';
		font-style: normal;
		font-weight: 700;
		font-size: 24px;
		line-height: 36px;
		color: var(--color-primary);
	}

	.star {
		padding-bottom: 16px;
		display: flex;
		justify-content: center;
		gap: 8px;
	}

	p {
		font-family: 'Montserrat';
		font-size: 16px;
		line-height: 24px;
	}
`;
