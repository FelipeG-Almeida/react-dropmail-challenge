import axios from 'axios';
import { AUTH_TOKEN } from '../constants/constants';

export async function getEmails(sessionId) {
	try {
		const url =
			'https://corsproxy.io/?' +
			encodeURIComponent(
				`https://dropmail.me/api/graphql/${AUTH_TOKEN}?query=query%20%7B%0A%20%20session(id%3A%20%22${sessionId}%22)%20%7B%0A%20%20%20%20mails%7B%0A%20%20%20%20%20%20rawSize%2C%0A%20%20%20%20%20%20fromAddr%2C%0A%20%20%20%20%20%20toAddr%2C%0A%20%20%20%20%20%20downloadUrl%2C%0A%20%20%20%20%20%20text%2C%0A%20%20%20%20%20%20headerSubject%0A%20%20%7D%0A%7D%0A%7D`
			);
		const response = await axios.get(url);
		return response.data.data.session.mails;
	} catch (error) {
		console.log(error);
	}
}
