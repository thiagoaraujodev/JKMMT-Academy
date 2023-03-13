import { useRef, useState } from 'react';
import ReactPlayer from 'react-player';

interface IVideoPlayerProps {
	isVideoPlayerShown: boolean;
	videoSrc: string;
}

const VideoPlayer = ({ isVideoPlayerShown, videoSrc }: IVideoPlayerProps) => {
	const videoRef = useRef<ReactPlayer>(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [showControls, setShowControls] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);

	const handlePlayPause = () => {
		setIsPlaying(!isPlaying);
	};

	const handleMouseEnter = () => {
		setShowControls(true);
	};

	const handleMouseLeave = () => {
		setShowControls(false);
	};

	const handleProgress = (progress: any) => {
		setCurrentTime(progress.playedSeconds);
	};

	const handleDuration = (duration: number) => {
		setDuration(duration);
	};

	const formatTime = (seconds: number) => {
		const minutes = Math.floor(seconds / 60);
		const remainingSeconds = Math.floor(seconds % 60);
		return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
	};

	return (
		<div
			className="course-video-player"
			style={{ display: isVideoPlayerShown ? 'block' : 'none', position: 'relative' }}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<button
				type="button"
				style={{
					backgroundColor: 'transparent',
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					zIndex: showControls ? 1 : -1,
				}}
				onClick={handlePlayPause}
			>
				{isPlaying ? (
					<img src="/src/assets/Images/play.png" alt="Pause" />
				) : (
					<img src="/src/assets/Images/play.png" alt="Play" />
				)}
			</button>

			<ReactPlayer
				className="video-play"
				ref={videoRef}
				url={videoSrc}
				playing={isPlaying}
				onPlay={() => setIsPlaying(true)}
				onPause={() => setIsPlaying(false)}
				onProgress={handleProgress}
				onDuration={handleDuration}
				config={{
					youtube: {
						playerVars: {
							focusable: 1,
						},
					},
				}}
				fullscreen={'true'}
			/>
			<p>{formatTime(currentTime) + ' / ' + formatTime(duration)}</p>
		</div>
	);
};

export default VideoPlayer;
