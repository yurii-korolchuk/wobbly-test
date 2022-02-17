import { useState, useContext } from 'react';
import { NoteContext } from '../../../context/NoteContext';

export const AddNewNote = () => {
	const { addNote } = useContext(NoteContext);
	const [isAdding, setIsAdding] = useState(false);
	const [name, setName] = useState('');
	const [text, setText] = useState('');

	const [isDataValid, setIsDataValid] = useState(false);

	const handleNameChange = (e) => {
		if (e.target.value.trim() && text.trim()) {
			setIsDataValid(true);
		} else {
			setIsDataValid(false);
		}
		setName(e.target.value);
	};

	const handleTextChange = (e) => {
		if (e.target.value.trim() && name.trim()) {
			setIsDataValid(true);
		} else {
			setIsDataValid(false);
		}
		setText(e.target.value);
	};

	const handleClick = () => {
		setIsAdding(true);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (name.trim() && text.trim()) {
			addNote({
				name,
				text,
			});
			setIsAdding(false);
		}
	};

	return (
		<div>
			{isAdding ? (
				<form onSubmit={handleSubmit}>
					<div className='mb-3 row'>
						<label htmlFor='note-name' className='col-sm-2 col-form-label'>
							<strong>Name</strong>
						</label>
						<div className='col-sm-10'>
							<input
								className='form-control'
								id='note-name'
								value={name}
								onChange={handleNameChange}
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
								value={text}
								onChange={handleTextChange}
							/>
						</div>
					</div>
					<button className='btn btn-success' disabled={!isDataValid}>
						Add
					</button>
				</form>
			) : (
				<button className='btn btn-primary' onClick={handleClick}>
					Add New
				</button>
			)}
		</div>
	);
};
