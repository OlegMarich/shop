import React from 'react'

export default function Header() {
	return (
		<header>
			<div>
				<span className='logo'>House Stuff</span>
				<div className="header__menu menu">
					{/* <button type="button" className="menu__icon icon-menu"><span></span></button> */}
					<nav className="menu__body">
						<ul className="menu__list">
							<li className="menu__item">
								<a href="" className="menu__link">About Us</a>
							</li>
							<li className="menu__item">
								<a href="" className="menu__link">Contacts</a>
							</li>
							<li className="menu__item">
								<a href="" className="menu__link">Menu</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
			<div className='presentation'></div>
		</header>
	)
}
