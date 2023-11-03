import axios from 'axios';
import { AUTH_TOKEN } from '../constants/constants';

export function isSessionExpired() {
	const session = JSON.parse(localStorage.getItem('session'));
	const dataExpiracao = new Date(session.introduceSession.expiresAt);
	if (new Date() > dataExpiracao) {
		return true;
	} else {
		return false;
	}
}

export async function getSession() {
	if (localStorage.getItem('session')) {
		return JSON.parse(localStorage.getItem('session'));
	}
	const url =
		'https://corsproxy.io/?' +
		encodeURIComponent(
			`https://dropmail.me/api/graphql/${AUTH_TOKEN}?query=mutation%20%7BintroduceSession%20%7Bid%2C%20expiresAt%2C%20addresses%20%7Baddress%7D%7D%7D`
		);
	const session = await axios.get(url);
	localStorage.setItem('session', JSON.stringify(session.data.data));
	return session.data.data;
}
