import { useEffect, useState } from 'react';
import { NoteContext } from '../context/NoteContext';
import { v4 as uuidv4 } from 'uuid';
import { storage } from '../model/storage';

export const NoteProvider = ({ children, props }) => {
	const [notes, setNotes] = useState(
		storage.getItem('notes') || [
			{
				name: 'Sample name 1',
				text: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
				id: uuidv4(),
			},
			{
				name: 'Sample name 2',
				text: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
				id: uuidv4(),
			},
			{
				name: 'Sample name 3',
				text: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
				id: uuidv4(),
			},
		]
	);

	useEffect(() => {
		storage.setItem('notes', notes);
	}, [notes]);

	const addNote = ({ name, text }) => {
		if (!name || !text || !name.trim() || !text.trim()) {
			return console.error('Invalid data passed as a note');
		}

		setNotes((prevNotes) => {
			return [...prevNotes, { name, text, id: uuidv4() }];
		});
	};

	const removeNote = (id) => {
		if (!id) {
			return console.error('This is pretty much impossible');
		}

		setNotes((prevNotes) => {
			return prevNotes.filter((note) => note.id !== id);
		});
	};

	const changeNote = ({ id, newName, newText }) => {
		const noteToChange = notes.filter((note) => note.id === id)[0];

		if (!newName || !newText) {
			return console.error('Invalid data passed to change a note');
		}

		if (!noteToChange) {
			return console.error('This is pretty much impossible');
		}

		setNotes((prevNotes) => {
			return prevNotes.map((note) => {
				if (note.id !== id) {
					return note;
				}

				return {
					...note,
					name: newName,
					text: newText,
				};
			});
		});
	};

	return (
		<NoteContext.Provider value={{ notes, addNote, removeNote, changeNote }} {...props}>
			{children}
		</NoteContext.Provider>
	);
};
