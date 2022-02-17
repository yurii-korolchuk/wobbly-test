import { useState } from 'react';
import { ModalContext } from '../context/ModalContext';

export const ModalProvider = ({ children, props }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [data, setData] = useState({
		action: '',
		redirect: '/',
		callback: () => {},
	});

	const open = (action, callback, redirect) => {
		setIsOpen(true);
		setData({
			action,
			callback,
			redirect: redirect ? redirect : '/',
		});
	};

	const close = () => {
		setIsOpen(false);
		setData({
			action: '',
			callback: () => {},
		});
	};

	return (
		<ModalContext.Provider value={{ isOpen, data, open, close }} {...props}>
			{children}
		</ModalContext.Provider>
	);
};
