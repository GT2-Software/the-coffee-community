import './App.css';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';
import Home from './pages/Home';

function App() {
	return (
		<div className="app">
			<div className="app-container">
				<header className="page-header">
					<NavigationBar />
				</header>
				<Home />
				<footer className="page-footer">
					<Footer />
				</footer>
			</div>
		</div>
	);
}

export default App;
