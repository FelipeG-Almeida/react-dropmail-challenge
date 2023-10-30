import axios from 'axios';
import { AUTH_TOKEN } from '../constants/constants';

export async function getSession() {
	if (localStorage.getItem('session')) {
		return JSON.parse(localStorage.getItem('session'));
	}
	const session = await axios.get(
		`https://cors-anywhere.herokuapp.com/https://dropmail.me/api/graphql/${AUTH_TOKEN}?query=mutation%20%7BintroduceSession%20%7Bid%2C%20expiresAt%2C%20addresses%20%7Baddress%7D%7D%7D`
	);
	localStorage.setItem('session', JSON.stringify(session.data.data));
	return session.data.data;
}
