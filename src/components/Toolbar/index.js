import classNames from 'classnames/bind';
import styles from './Toolbar.module.css';

const cx = classNames.bind(styles);


function Toolbar({ openSidebar }) {
	return (
		<div className={cx('wrapper')}>
			<img className={cx('menu')} src='/images/menu.png' alt='Menu' onClick={openSidebar} />
			<img className={cx('header_logo')} src='/images/header_logo.png' alt='Logo' />
			<img className={cx('chat')} src='/images/chat.png' alt='Chat' />
		</div>
	);
}

export default Toolbar;