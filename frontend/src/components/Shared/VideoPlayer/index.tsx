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

	const handlePlayPause = () => {
		setIsPlaying(!isPlaying);
	};

	const handleMouseEnter = () => {
		setShowControls(true);
	};

	const handleMouseLeave = () => {
		setShowControls(false);
	};

	return (
		<div
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
				width="940px"
				height="660px"
				ref={videoRef}
				url={videoSrc}
				playing={isPlaying}
				onPlay={() => setIsPlaying(true)}
				onPause={() => setIsPlaying(false)}
				config={{
					youtube: {
						playerVars: {
							focusable: 1,
						},
					},
				}}
				fullscreen={true}
			/>
		</div>
	);
};

export default VideoPlayer;
