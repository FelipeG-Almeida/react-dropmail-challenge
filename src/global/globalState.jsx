/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { GlobalContext } from './globalContext';
import { getSession, isSessionExpired } from '../services/sessionService';

export default function GlobalState({ children }) {
	const [session, setSession] = useState();
	const [emails, setEmails] = useState();
	const [selectedEmail, setSelectedEmail] = useState();

	useEffect(() => {
		if (localStorage.getItem('session')) {
			if (isSessionExpired()) {
				localStorage.removeItem('session');
				setSession();
			} else {
				setters.setSession(getSession());
			}
		}
	}, []);

	const states = { session, emails, selectedEmail };
	const setters = { setSession, setEmails, setSelectedEmail };
	return (
		<GlobalContext.Provider value={{ states, setters }}>
			{children}
		</GlobalContext.Provider>
	);
}
