import { AUTH_TOKEN } from '../constants/constants';
import { request, gql } from 'graphql-request';

export async function getEmails(sessionId) {
	try {
		const endpoint =
			'https://corsproxy.io/?' +
			encodeURIComponent('https://dropmail.me/api/graphql/' + AUTH_TOKEN);
		const query = gql`
		query {
			session(id: "${sessionId}") {
				mails{
					rawSize,
					fromAddr,
					toAddr,
					downloadUrl,
					text,
					headerSubject
				}
			}
		}
		`;
		const response = await request(endpoint, query);
		return response.session.mails;
	} catch (error) {
		console.log(error);
	}
}
