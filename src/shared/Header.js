import { NavLink } from 'react-router-dom';

export const Header = () => {
	return (
		<nav className='navbar navbar-dark navbar-expand-lg bg-primary'>
			<div className='container-fluid'>
				<NavLink className='navbar-brand' to='/'>
					Wobbly Test
				</NavLink>
				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav'>
						{/* <li className='nav-item'>
							<NavLink className='nav-link' aria-current='page' to='/'>
								All Notes
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink className='nav-link' aria-current='page' to='/redact'>
								Redact Note
							</NavLink>
						</li> */}
					</ul>
				</div>
			</div>
		</nav>
	);
};
