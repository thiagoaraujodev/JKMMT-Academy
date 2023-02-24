import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import styled from 'styled-components';
import { IPropsStyled } from '../../../../../interfaces/styled';

const source = [
	{
		summary: 'Quanto custa para usar a JKMMT?',
		details:
			'Nosso site é totalmente gratuito para uso. Não cobramos nenhuma taxa ou mensalidade para acessar nossos serviços. Aproveite e explore todas as funcionalidades sem se preocupar com custos adicionais.',
		open: false,
	},
	{
		summary: 'Quais tipos de cursos posso encontrar aqui?',
		details:
			'Oferecemos uma ampla variedade de cursos de TI, desde programação e desenvolvimento web até segurança cibernética e análise de dados. Nossos cursos são projetados para atender às necessidades de iniciantes e profissionais experientes, com conteúdo atualizado e instrutores qualificados. Confira nossa lista completa de cursos disponíveis e escolha o melhor para você.',
		open: false,
	},
	{
		summary: 'Como funciona o suporte ao cliente?',
		details:
			'Nosso suporte ao cliente é dedicado e eficiente. Oferecemos várias opções de suporte. Nossa equipe de suporte está disponível para responder a todas as suas dúvidas e ajudá-lo a solucionar problemas. Estamos comprometidos em fornecer a melhor experiência de suporte possível para nossos clientes.',
		open: false,
	},
	{
		summary: 'Posso vender algum curso na JKMMT?',
		details:
			'No momento, não oferecemos uma plataforma para venda de cursos. Nossa plataforma é voltada para aprendizagem e oferece cursos criados por nossos parceiros especializados. No entanto, se você está interessado em criar um curso para nossa plataforma, entre em contato conosco para discutirmos as possibilidades.',
		open: false,
	},
];

const QuestionsAndAnswers: React.FC<IPropsStyled> = ({ className }) => {
	const [openedItems, setOpenedItems] = useState(source);
	return (
		<>
			{source.map((item, index) => (
				<details
					className={className}
					key={index}
					open={openedItems[index].open}
					onClick={event => {
						event.preventDefault();

						setOpenedItems(
							openedItems.map((prevItems, prevIndex) => {
								if (prevIndex === index) {
									return { ...prevItems, open: !openedItems[index].open };
								} else {
									return { ...prevItems, open: false };
								}
							}),
						);
					}}
				>
					<summary>
						{item.summary}
						{openedItems[index].open === true ? (
							<ChevronUp color="gray" size={18} />
						) : (
							<ChevronDown color="gray" size={18} />
						)}
					</summary>
					<p>{item.details}</p>
				</details>
			))}
		</>
	);
};

export default styled(QuestionsAndAnswers)`
	padding-top: 16px;
	padding-bottom: 16px;
	border-bottom: 1px solid rgba(0, 0, 0, 0.16);

	:first-of-type {
		padding-top: 0;
	}
	summary {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-weight: 600;
		line-height: 25px;
	}
	p {
		padding-top: 16px;
		font-size: 14px;
		line-height: 25px;
	}
`;
