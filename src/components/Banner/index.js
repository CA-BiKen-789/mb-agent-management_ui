import classNames from 'classnames/bind';
import styles from './Banner.module.css';

const cx = classNames.bind(styles);

function Banner() {
	return (
		<div className={cx("wrapper")}>
			<img src="/images/banner.png" alt="Banner" />
		</div>
	);
}

export default Banner;