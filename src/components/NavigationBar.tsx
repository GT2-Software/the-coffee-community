function NavigationBar() {
	return (
		<nav className="nav-container">
			<ul className="nav-list">
				<li>
					<a href="/">
						<img src="assets/svgs/coffee2.svg" alt="logo" />Home
					</a>
				</li>
			</ul>
			<ul className="nav-list">
				<li>
					<a href="/">Recipes</a>
				</li>
				<li>
					<a href="/">Coffe catalog</a>
				</li>
				<li>
					<a href="/">Coffee diseases</a>
				</li>
			</ul>
			<ul className="nav-list">
				<li>
					<a href="/">Login</a>
				</li>
			</ul>
		</nav>
	);
}

export default NavigationBar;
