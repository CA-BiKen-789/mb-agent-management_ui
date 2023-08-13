import classNames from 'classnames/bind';
import styles from './Intro.module.css';

const cx = classNames.bind(styles);

function Intro({ urlImage, title, children }) {
	return (
		<div className={cx('wrapper')}>
			<img src={urlImage} alt={title} />
			{children}
		</div>
	);
}

export default Intro;