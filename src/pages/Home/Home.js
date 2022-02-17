import { AddNewNote } from './components/AddNewNote';
import { Notes } from './components/Notes';

export const Home = () => {
	return (
		<div className='container mt-3'>
			<AddNewNote />
			<Notes />
		</div>
	);
};
