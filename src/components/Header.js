import React, { useState } from 'react'
import {BsFillCartPlusFill} from "react-icons/bs"

export default function Header() {
	let [cartOpen, setCartOpen] = useState(false)
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
					<BsFillCartPlusFill onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}/>

					{cartOpen && (
						<div className='shop-cart'></div>
					)}
				</div>
			</div>
			<div className='presentation'></div>
		</header>
	)
}
