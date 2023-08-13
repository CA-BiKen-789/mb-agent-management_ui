import classNames from 'classnames/bind';
import styles from './Header.module.css';

const cx = classNames.bind(styles);

function Header() {
	return (
		<div className={cx('wrapper')}>
			<img className={cx('menu')} src='/images/menu.png' alt='Menu' />
			<img className={cx('header_logo')} src='/images/header_logo.png' alt='Logo' />
			<img className={cx('chat')} src='/images/chat.png' alt='Chat' />
		</div>

	);
}

export default Header;