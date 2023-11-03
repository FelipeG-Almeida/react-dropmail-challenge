import { useContext } from 'react';
import './EmailContent.css';
import { GlobalContext } from '../../global/globalContext';

export default function EmailContent() {
	const { states } = useContext(GlobalContext);

	return (
		<section className="email__content">
			{states.selectedEmail ? (
				<div>
					<h3 className="title is-5">
						{states.selectedEmail?.headerSubject}
					</h3>
					<p className="email__text">{states.selectedEmail?.text}</p>
				</div>
			) : (
				<div className="noEmail">
					<h3 className="title is-1 has-text-grey-light">
						Bem-vindo
					</h3>
					<p className="has-text-grey">
						Seu email temporário será desativado após 10 minutos
						inativo
					</p>
				</div>
			)}
		</section>
	);
}
