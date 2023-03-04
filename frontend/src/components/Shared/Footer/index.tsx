import styled from 'styled-components';
import { IPropsStyled } from '../../../interfaces/styled';

const Footer: React.FC<IPropsStyled> = ({ className }) => {
	return <footer className={className}>Copyright ® 2022</footer>;
};

export default styled(Footer)`
	color: var(--color-primary);
	background-color: var(--bg-color-primary);
	display: flex;
	height: 80px;
	align-items: center;
	justify-content: center;
	border-top: 1px solid var(--color-gray-lighter);
`;
