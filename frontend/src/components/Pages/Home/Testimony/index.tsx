import styled from 'styled-components';
import { IPropsStyled } from '../../../../interfaces/styled';

const Testimony: React.FC<IPropsStyled> = ({ className }) => {
	return (
		<>
			<section className={className}>
				<div className={`container`}>
					<h2>Depoimento de Nossos Alunos</h2>
				</div>
			</section>
		</>
	);
};

export default styled(Testimony)`
	& .container {
		padding: 80px 0;

		h2 {
			font-size: 36px;
			line-height: 50px;
			font-weight: 800;
			text-align: center;
			color: var(--color-primary);
			padding-bottom: 80px;
		}
	}
`;
