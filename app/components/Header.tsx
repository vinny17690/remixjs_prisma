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
					<li>
						<NavLink
							style={({ isActive }) => (isActive ? activeStyle : undefined)}
							to={`/${key}`}
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
