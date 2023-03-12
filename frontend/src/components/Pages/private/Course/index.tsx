import { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import courses from '../../../../data/courses.json';
import { IPropsStyled } from '../../../../interfaces/styled';
import CourseDescription from '../../../shared/CourseDescription';
import Footer from '../../../shared/Footer';
import HeaderPrivate from '../../../shared/Header/HeaderPrivate';
import ProgressCard from '../../../shared/ProgressCard';
import VideoPlayer from '../../../shared/VideoPlayer';

const Course = ({ className }: IPropsStyled) => {
	const { courseLink } = useParams();

	const course = courses.find(c => c.link === `/curso/${courseLink}`);

	if (!course) {
		return <Navigate replace to="/404" />;
	}

	const [isVideoPlayerShown, setIsVideoPlayerShown] = useState(false);

	const handleStartButtonClick = () => {
		setIsVideoPlayerShown(true);
	};

	return (
		<>
			<HeaderPrivate />
			<main className={className}>
				<div className="container flex">
					<div className="course-content">
						<div className="title">
							<h1>Curso: {course?.title}</h1>
							<p>Autor: {course?.author}</p>
						</div>
						<div className="buttons">
							<Link className="bt bt-primary-outlined" to="/historico">
								Consultar Histórico
							</Link>
						</div>
					</div>
					<div className="course-card">
						<CourseDescription course={course} />

						<ProgressCard
							image={course.image}
							onStartButtonClick={handleStartButtonClick}
							isVideoPlayerShown={isVideoPlayerShown}
						/>
					</div>
				</div>
				{isVideoPlayerShown && (
					<>
						<div className="divider"></div>
						<div className="container flex">
							<VideoPlayer
								isVideoPlayerShown={isVideoPlayerShown}
								videoSrc="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
							/>
						</div>
					</>
				)}
			</main>
			<Footer />
		</>
	);
};

export default styled(Course)`
	margin-top: 80px;

	.container.flex {
		padding-top: 80px;
		padding-bottom: 80px;
		flex-wrap: wrap;
		justify-content: space-evenly;
		gap: 64px;

		.course-content {
			width: 100%;
			height: fit-content;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-family: 'Open Sans', sans-serif;

			.title {
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

			.buttons {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				gap: 16px;
			}
		}

		.course-card {
			width: 100%;
			display: flex;
			justify-content: space-between;

			.course-card-description {
				width: 100%;
				max-width: 890px;
				padding-right: 110px;

				p {
					margin-bottom: 16px;
					line-height: 1.8;
					text-align: justify;
				}
				ul {
					margin-left: 0.5cm;
					margin-bottom: 16px;
				}

				li {
					text-indent: -1.25cm;
					margin-left: 1.25cm;
					line-height: 1.8;
					text-align: justify;

					::before {
						content: '- ';
					}
				}
			}
		}
	}
`;
