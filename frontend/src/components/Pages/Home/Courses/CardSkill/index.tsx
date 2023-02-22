import styled from 'styled-components';
import { IPropsStyled } from '../../../../../interfaces/styled';

import imgIconAngular from '../../../../../assets/images/skills/angular.svg';
import imgIconCsharp from '../../../../../assets/images/skills/csharp.svg';
import imgIconCss from '../../../../../assets/images/skills/css.svg';
import imgIconGit from '../../../../../assets/images/skills/git.svg';
import imgIconHtml from '../../../../../assets/images/skills/html.svg';
import imgIconJavascript from '../../../../../assets/images/skills/javascript.svg';
import imgIconPhp from '../../../../../assets/images/skills/php.svg';
import imgIconReact from '../../../../../assets/images/skills/react.svg';
import imgIconSpringBoot from '../../../../../assets/images/skills/spring.svg';
import imgIconTypescript from '../../../../../assets/images/skills/typescript.svg';

const CardSkill: React.FC<IPropsStyled> = ({ className }) => {
	return (
		<div className={className}>
			<img src={imgIconHtml} alt="HTML 5" />
			<img src={imgIconCss} alt="CSS 3" />
			<img src={imgIconJavascript} alt="Javascript" />
			<img src={imgIconTypescript} alt="Typescript" />
			<img src={imgIconGit} alt="Git" />
			<img src={imgIconReact} alt="React" />
			<img src={imgIconAngular} alt="Angular" />
			<img src={imgIconSpringBoot} alt="Spring Boot" />
			<img src={imgIconCsharp} alt="C#" />
			<img src={imgIconPhp} alt="PHP" />
		</div>
	);
};

export default styled(CardSkill)`
	width: 100%;
	max-width: 1180px;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	gap: 60px;

	img {
		width: 100%;
		max-width: 100px;
		height: auto;
		padding: 1px;

		border: 4px solid #f3f3f3de;
		box-shadow: 1px 4px 20px 2px rgba(0, 0, 0, 0.35);
		border-radius: 10px;
		background: var(--bg-color-primary);
		transition: all 1s;
	}

	img:hover {
		transform: scale(1.1);
	}

	@media (min-width: 992px) {
		img {
			max-width: 130px;
		}
	}

	@media (min-width: 1200px) {
		justify-content: space-between;
		gap: 70px;

		img {
			max-width: 140px;
		}
	}
`;
