import { useState } from 'react';
import './Header.css';

export default function Header() {
	const [copied, setCopied] = useState(false);
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
						<p>{session.introduceSession.addresses[0].address}</p>
						<button onClick={copyToClipboard}>
							<span className="icon">
								<img
									src="https://img.icons8.com/material-outlined/24/copy.png"
									alt="copy"
								/>
							</span>
							<span>Copiar</span>
						</button>
					</div>
				</div>
			</div>
		</header>
	);
}
