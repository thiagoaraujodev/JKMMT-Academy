import React, { useState } from 'react';
import styled from 'styled-components';
import { ICourseContent } from '../../../interfaces/course';
import { IPropsStyled } from '../../../interfaces/styled';
import ProgressBar from '../ProgressBar';

interface ILessonsMenuProps extends IPropsStyled, ICourseContent {}

const LessonsMenu: React.FC<ILessonsMenuProps> = ({ className, content }) => {
	const [contentState, setContentState] = useState(content);

	const [progress, setProgress] = useState(25);

	const [activeSections, setActiveSections] = useState<{ [key: number]: boolean }>(() => {
		const initialActiveSections: { [key: number]: boolean } = {};
		content.forEach((_, index) => {
			initialActiveSections[index] = true;
		});
		return initialActiveSections;
	});

	const handleClick = (index: number) => {
		setActiveSections(prevState => {
			const isActive = prevState[index];
			return { ...prevState, [index]: !isActive };
		});
	};

	const handleCheck = (sectionIndex: number, lessonIndex: number) => {
		const updatedSections = [...contentState];
		updatedSections[sectionIndex].lessons[lessonIndex].completed =
			!updatedSections[sectionIndex].lessons[lessonIndex].completed;
		setContentState(updatedSections);
	};

	return (
		<div className={`lessons-menu ${className}`}>
			<div>
				{contentState.map((section, index) => (
					<div key={index}>
						<h3 onClick={() => handleClick(index)}>{section.title}</h3>
						{activeSections[index] && (
							<ul>
								{section.lessons.map((lesson, lessonIndex) => (
									<li key={lessonIndex}>
										<label>
											{lesson.name}
											<input
												className="checkbox-custom"
												type="checkbox"
												checked={lesson.completed}
												onChange={() => handleCheck(index, lessonIndex)}
												disabled={true}
											/>
										</label>
									</li>
								))}
							</ul>
						)}
					</div>
				))}
			</div>
			<ProgressBar progress={progress} />
		</div>
	);
};

export default styled(LessonsMenu)`
	width: 100%;
	max-width: 275px;
	display: flex;
	flex-direction: column;
	border: 1px solid #b2bcc0;
	border-radius: 10px 10px 0 0;
	justify-content: space-between;

	h3 {
		padding: 8px 16px;
		font-family: 'Roboto', sans-serif;
		font-size: 15px;
		line-height: 24px;
		color: #1f1e5a;
		background-color: #b2bcc0;
	}

	ul {
		li {
			padding: 8px 16px;
			font-family: 'Roboto', sans-serif;
			font-size: 15px;
			line-height: 19px;
			color: var(--color-primary);
			border-bottom: 1px solid #b2bcc0;

			label {
				display: flex;
				justify-content: space-between;

				input[type='checkbox'] {
					all: unset;
					border: 1px solid var(--color-primary);
					width: 14px;
					height: 14px;
				}

				input[type='checkbox']:checked {
					background-color: var(--color-primary);
					background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14 11'%3E%3Cpath fill='none' stroke='white' stroke-width='2' d='M1 5.5L5 9.5L13 1'%3E%3C/path%3E%3C/svg%3E");
					background-position: center;
					background-repeat: no-repeat;
				}
			}
		}
	}

	.progress-bar {
		padding: 16px;
	}
`;
