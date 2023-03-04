import { Link } from 'react-router-dom';
import logo from '../../../../assets/images/logo.png';

export default function Logo() {
	return (
		<Link
			to="/"
			title="JKMT Academy"
			onClick={() =>
				window.scroll({
					top: 0,
					behavior: 'smooth',
				})
			}
		>
			<img src={logo} className="logo" alt="Logo JKMT Academy" />
		</Link>
	);
}
