import React from 'react';

interface CourseDescriptionProps {
	course: {
		title: string;
		sub_title: string;
		image: string;
		link: string;
		author: string;
		description: {
			intro: string;
			para1: string;
			para2: string;
			para3: string;
			topics: string[];
			para4: string;
			para5: string;
		};
	};
}

const CourseDescription: React.FC<CourseDescriptionProps> = ({ course }) => {
	return (
		<div className="course-card-description">
			<p>{course.description.intro}</p>
			<p>{course.description.para1}</p>
			<p>{course.description.para2}</p>
			<p>{course.description.para3}</p>
			<ul>
				{course.description.topics.map(topic => (
					<li key={topic}>{topic}</li>
				))}
			</ul>
			<p>{course.description.para4}</p>
			<p>{course.description.para5}</p>
		</div>
	);
};

export default CourseDescription;
