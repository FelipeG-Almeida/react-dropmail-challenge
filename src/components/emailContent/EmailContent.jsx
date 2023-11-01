import { useContext } from 'react';
import './EmailContent.css';
import { GlobalContext } from '../../global/globalContext';

export default function EmailContent() {
	const { states } = useContext(GlobalContext);

	function formatText(text) {
		text = text.replace(/\*(.*?)\*/gm, '<strong>$1</strong>');
		text = text.replace(/\r\n/g, '<br>');

		return <p dangerouslySetInnerHTML={{ __html: text }} />;
	}

	return (
		<section className="email__content">
			{states.selectedEmail ? (
				formatText(states.selectedEmail)
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
