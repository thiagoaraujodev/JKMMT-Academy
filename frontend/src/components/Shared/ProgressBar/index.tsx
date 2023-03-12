import React from 'react';

interface IProgressBarProps {
	progress: number;
}

const ProgressBar: React.FC<IProgressBarProps> = ({ progress }) => (
	<div className="progress-bar">
		<div className="progress-status">
			<p>Progresso</p>
			<p>{progress}%</p>
		</div>
		<progress value={progress} max="100" />
	</div>
);

export default ProgressBar;
