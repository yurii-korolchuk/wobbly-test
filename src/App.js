import { Routes, Route } from 'react-router';
import { Home } from './pages/Home/Home';
import { Header } from './shared/Header';
import { RedactNote } from './pages/RedactNotes/RedactNote';
import { Modal } from './shared/Modal';
import { useContext } from 'react';
import { ModalContext } from './context/ModalContext';

function App() {
	const { isOpen } = useContext(ModalContext);
	return (
		<div className='App'>
			{isOpen ? <Modal /> : null}
			<Header />
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/redact/:id' element={<RedactNote />}></Route>
			</Routes>
		</div>
	);
}

export default App;
