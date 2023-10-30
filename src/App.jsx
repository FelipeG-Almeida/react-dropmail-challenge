import { useEffect, useState } from 'react';
import { getSession } from './services/sessionService';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import 'bulma/css/bulma.min.css';
import './App.css';
import Header from './components/header/Header';

function App() {
	const [session, setSession] = useState();

	useEffect(() => {
		if (localStorage.getItem('session')) {
			setSession(getSession());
		}
	}, []);

	function createEmail() {
		setSession(getSession());
	}

	return (
		<main>
			{session ? (
				<div className="content-grid">
					<Header></Header>
				</div>
			) : (
				<div className="boas-vindas__container">
					<h1 className="title">BounceBox</h1>
					<h2 className="subtitle">
						Clique no botão abaixo para obter seu e-mail temporário.
					</h2>
					<button
						className="button is-primary is-large is-responsive is-rounded"
						onClick={createEmail}
					>
						Gerar email
					</button>
				</div>
			)}
		</main>
	);
}

export default App;
library.add(fas);
