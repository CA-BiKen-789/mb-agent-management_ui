import classNames from 'classnames/bind';
import styles from './Header.module.css';
import Sidebar from '~/components/Sidebar';
import Backdrop from '~/components/Backdrop';
import Toolbar from '~/components/Toolbar';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Header() {

	const [sidebar, setSidebar] = useState(false);

	const toggleSidebar = () => {
		setSidebar((prevState) => !prevState);
	}

	return (
		<div className={cx('wrapper')}>
			<Toolbar openSidebar={toggleSidebar} />
			<Backdrop sidebar={sidebar} closeSidebar={toggleSidebar} />
			<Sidebar sidebar={sidebar} />
		</div>

	);
}

export default Header;