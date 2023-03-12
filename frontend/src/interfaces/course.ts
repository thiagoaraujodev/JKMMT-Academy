export interface ICourse {
	id: string;
	title: string;
	subtitle: string;
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
	content: {
		title: string;
		lessons: {
			name: string;
			completed: boolean;
		}[];
	}[];
}

export interface ICourseContent {
	content: {
		title: string;
		lessons: {
			name: string;
			completed: boolean;
		}[];
	}[];
}
