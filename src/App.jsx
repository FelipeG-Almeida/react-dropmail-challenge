import { useEffect } from 'react';
import { getSession } from './services/dropMailService';
import './App.css';

function App() {
	useEffect(() => {
		console.log(getSession());
	}, []);

	return (
		<>
			<button>Iniciar</button>
		</>
	);
}

export default App;
