import { AUTH_TOKEN } from '../constants/constants';
import { request, gql } from 'graphql-request';

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
	const endpoint = 'https://dropmail.me/api/graphql/' + AUTH_TOKEN;
	const query = gql`
		mutation {
			introduceSession {
				id
				expiresAt
				addresses {
					address
				}
			}
		}
	`;
	const session = await request(endpoint, query);
	localStorage.setItem('session', JSON.stringify(session.data.data));
	return session.data.data;
}
