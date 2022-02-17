import { useContext, useState } from 'react';
import { useParams } from 'react-router';
import { ModalContext } from '../../context/ModalContext';
import { NoteContext } from '../../context/NoteContext';

export const RedactNote = () => {
	const { id } = useParams();
	const { notes, removeNote, changeNote } = useContext(NoteContext);
	const selectedNote = notes.filter((note) => note.id === id)[0];

	const [newName, setNewName] = useState(selectedNote.name);
	const [newText, setNewText] = useState(selectedNote.text);
	const [isDataValid, setIsDataValid] = useState(true);

	const { open } = useContext(ModalContext);

	const handleDelete = () => {
		open('delete this note', () => {
			removeNote(id);
		});
	};

	const handleCancel = () => {
		open('cancel redacting', () => {});
	};

	const handleSaveChanges = () => {
		open('change this note', () => {
			changeNote({ id, newName, newText });
		});
	};

	return (
		<div className='container mt-3'>
			<form>
				<div className='mb-3 row'>
					<label htmlFor='note-name' className='col-sm-2 col-form-label'>
						<strong>Name</strong>
					</label>
					<div className='col-sm-10'>
						<input
							className='form-control'
							id='note-name'
							value={newName}
							onChange={(e) => {
								if (!e.target.value.trim()) {
									setIsDataValid(false);
								} else {
									setIsDataValid(true);
								}
								setNewName(e.target.value);
							}}
						/>
					</div>
				</div>
				<div className='mb-3 row'>
					<label htmlFor='note-text' className='col-sm-2 col-form-label'>
						<strong>Text</strong>
					</label>
					<div className='col-sm-10'>
						<input
							className='form-control'
							id='note-text'
							value={newText}
							onChange={(e) => {
								if (!e.target.value.trim()) {
									setIsDataValid(false);
								} else {
									setIsDataValid(true);
								}
								setNewText(e.target.value);
							}}
						/>
					</div>
				</div>
			</form>
			<div className='d-flex flex-row align-items-center'>
				<div className='flex-grow-1'>
					<button
						className='btn btn-outline-success me-3'
						to='/'
						onClick={handleSaveChanges}
						disabled={!isDataValid}
					>
						Save
					</button>
					<button className='btn btn-outline-warning' onClick={handleCancel}>
						Cancel
					</button>
				</div>
				<div>
					<button className='btn btn-outline-danger' onClick={handleDelete}>
						Delete
					</button>
				</div>
			</div>
			{isDataValid ? null : <p className='text-danger'>Please provide valid data</p>}
		</div>
	);
};
