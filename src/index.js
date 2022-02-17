import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ModalProvider } from './provider/ModalProvider';
import { NoteProvider } from './provider/NotesProvider';
import './styels/index.scss';

ReactDOM.render(
	<React.StrictMode>
		<NoteProvider>
			<ModalProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</ModalProvider>
		</NoteProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
