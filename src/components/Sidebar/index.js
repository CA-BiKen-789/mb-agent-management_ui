import classNames from 'classnames/bind';
import styles from './Sidebar.module.css';

const cx = classNames.bind(styles);

function Sidebar({ sidebar }) {
	return (
		<div className={sidebar ? cx('wrapper', 'wrapper--open') : cx('wrapper')}>
			<a href='/#'>Giới thiệu</a>
			<a href='/#'>Về chúng tôi</a>
			<a href='/#'>Chính sách</a>
			<a href='/#'>Cách tính hoa hồng</a>
			<a href='/#'>Liên hệ</a>
		</div>
	);
}

export default Sidebar;