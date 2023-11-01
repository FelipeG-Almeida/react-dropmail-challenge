import { useContext } from 'react';
import { getSession } from './services/sessionService';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import 'bulma/css/bulma.min.css';
import './App.css';
import Header from './components/header/Header';
import Inbox from './components/inbox/Inbox';
import { GlobalContext } from './global/globalContext';
import EmailContent from './components/emailContent/EmailContent';

function App() {
	const { states, setters } = useContext(GlobalContext);

	function createEmail() {
		setters.setSession(getSession());
	}

	return (
		<main
			style={{
				justifyContent: states.session ? 'flex-start' : 'center',
			}}
		>
			{states.session ? (
				<div className="content-grid">
					<Header></Header>
					<Inbox></Inbox>
					<EmailContent></EmailContent>
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
