import classNames from 'classnames/bind';
import styles from './Backdrop.module.css';

const cx = classNames.bind(styles);

function Backdrop({ sidebar, closeSidebar }) {
	return (
		<div className={sidebar ? cx('wrapper', 'wrapper--open') : cx('wrapper')} onClick={closeSidebar}></div>
	);
}

export default Backdrop;