import { useContext } from 'react';
import { GlobalContext } from '../../global/globalContext';
import './Inbox.css';

export default function Inbox() {
	const { states, setters } = useContext(GlobalContext);

	function openEmail(text) {
		setters.setSelectedEmail(text);
	}

	return (
		<aside className="emails">
			<h3 className="title is-5 has-text-centered">Caixa de Entrada</h3>
			<div>
				{states.emails ? (
					states.emails.map((email, index) => {
						return (
							<div
								className="card__container"
								key={index}
								onClick={() => openEmail(email.text)}
							>
								<p className="titulo">
									{email.headerSubject.slice(0, 27) + '...'}
								</p>
								<p>{email.fromAddr}</p>
								<small className="has-text-grey">
									{email.text.slice(0, 47) + '...'}
								</small>
							</div>
						);
					})
				) : (
					<p className="has-text-centered">
						Sua caixa de entrada está vazia
					</p>
				)}
			</div>
		</aside>
	);
}
