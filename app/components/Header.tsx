import type { FC } from 'react';
import { NavLink } from 'remix';

const links = {
	home: 'Home',
	aboutus: 'About Us',
};

const activeStyle = {
	textDecoration: 'underline',
};

const Header: FC = () => (
	<header>
		<nav>
			<ul>
				{Object.entries(links).map(([key, value]) => (
					<li key={key}>
						<NavLink
							className="nav-link"
							style={({ isActive }) => (isActive ? activeStyle : undefined)}
							to={key === 'home' ? '/' : `/${key}`}
						>
							{value}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	</header>
);

export default Header;
