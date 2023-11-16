import React, { useState } from 'react'
import { BsFillCartPlusFill } from "react-icons/bs"
import Order from './Order'

const showOrders = (props) => {
	let summa = 0 
	props.orders.forEach(el => summa += Number.parseFloat(el.price));
	return (
		<div>
			{props.orders.map(el => (
				<Order onDelete={props.onDelete} key={el.id} item={el} />
			))}
			<p className='total'>Total: {new Intl.NumberFormat().format(summa)}$</p>
		</div>
	)
}

const showNothing = () => {
	return (
		<div className='empty'>
			<h2>The cart is empty</h2>
		</div>
	)
}

export default function Header(props) {
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
					<BsFillCartPlusFill onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />

					{cartOpen && (
						<div className='shop-cart'>
							{props.orders.length > 0 ? showOrders(props) : showNothing()}
						</div>
					)}
				</div>
			</div>
			<div className='presentation'></div>
		</header>
	)
}
