import { useContext } from 'react';
import { NoteContext } from '../../../context/NoteContext';
import { Note } from './Note';

export const Notes = () => {
	const { notes } = useContext(NoteContext);
	return (
		<ul className='list-group mt-3'>
			{notes.map((note) => {
				return <Note key={note.id} id={note.id} name={note.name} text={note.text} />;
			})}
		</ul>
	);
};
