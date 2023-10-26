import axios from 'axios';
import { AUTH_TOKEN } from '../constants/constants';

export async function getSession() {
	if (localStorage.getItem('session') == null) {
		const session = await axios.get(
			`https://dropmail.me/api/graphql/${AUTH_TOKEN}.`
		);
		localStorage.setItem('session', JSON.stringify(session));
		return session;
	}
	return localStorage.getItem('session');
}
