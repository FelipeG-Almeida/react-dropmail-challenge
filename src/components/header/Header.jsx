import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css';
import { getEmails } from '../../services/emailService';

export default function Header() {
	const [copied, setCopied] = useState(false);
	const [counter, setCounter] = useState(0);
	const session = JSON.parse(localStorage.getItem('session'));

	function copyToClipboard() {
		navigator.clipboard.writeText(
			session.introduceSession.addresses[0].address
		);
		setCopied(true);
		setTimeout(() => {
			setCopied(false);
		}, 2000);
	}

	function refreshEmails() {
		setCounter(0);
		getEmails(session.introduceSession.id);
	}

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter((counter) => (counter + 1) % 16);
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<header>
			<h1 className="title header__title">BounceBox</h1>
			<div className="header__container">
				<div className="email__container">
					<div className="small__container">
						<small>Seu endereço de e-mail temporário</small>
						{copied ? <small>E-mail copiado</small> : ''}
					</div>
					<div className="email__address">
						<span className="icon-text address">
							<span className="icon">
								<FontAwesomeIcon icon="fa-solid fa-envelope" />
							</span>
							<span>
								{session?.introduceSession.addresses[0].address}
							</span>
						</span>
						<button onClick={copyToClipboard}>
							<span className="icon-text has-text-white">
								<span className="icon">
									<FontAwesomeIcon icon="fa-solid fa-copy" />
								</span>
								<span>Copiar</span>
							</span>
						</button>
					</div>
					<div className="refresh__container">
						<span className="icon-text">
							<span>Atualizando em {counter} segundos</span>
							<span className="icon">
								<FontAwesomeIcon
									icon="fa-solid fa-circle-notch"
									spin
								/>
							</span>
						</span>
						<button
							onClick={refreshEmails}
							className="button is-primary is-inverted"
						>
							<span className="icon-text">
								<span>Atualizar</span>
								<span className="icon">
									<FontAwesomeIcon icon="fa-solid fa-rotate-right" />
								</span>
							</span>
						</button>
					</div>
				</div>
			</div>
		</header>
	);
}
