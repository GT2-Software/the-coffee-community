import React, { Fragment } from 'react';

function Footer() {
	return (
		<nav className="nav-container">
			<ul className="nav-list">
				<li>
					<a href="">The coffee community</a>
				</li>
				<li>
					<a href="">Our sources</a>
				</li>
				<li>
					<a href="">Buy me a coffee</a>
				</li>
			</ul>
			<ul className="nav-list">
				<li>
					<a href="">About the coffee community</a>
				</li>
				<li>
					<a href="">Privacy notice</a>
				</li>
				<li>
					<a href="">Terms and conditions</a>
				</li>
			</ul>
			<ul className="nav-list">
				<li>
					<a href="">Contact</a>
				</li>
				<li>
					<a href="">
						<img src="assets/svgs/coffee1.svg" alt="contact 1" />{' '}
					</a>
					<a href="">
						<img src="assets/svgs/coffee1.svg" alt="contact 1" />{' '}
					</a>
					<a href="">
						<img src="assets/svgs/coffee1.svg" alt="contact 1" />{' '}
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Footer;
