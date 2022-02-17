import { createContext } from 'react';

export const ModalContext = createContext({
	isOpen: false,
	data: {
		action: '',
		redirect: '',
		callback: () => {},
	},
	open: (data, callback) => {},
	close: () => {},
});
