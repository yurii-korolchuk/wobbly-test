import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ModalContext } from '../../../context/ModalContext';
import { NoteContext } from '../../../context/NoteContext';

export const Note = ({ name, text, id }) => {
	const { open } = useContext(ModalContext);
	const { removeNote } = useContext(NoteContext);

	const handleDelete = () => {
		open('delete this note', () => {
			removeNote(id);
		});
	};

	return (
		<li className='list-group-item note'>
			<div className='d-flex flex-row'>
				<div className='d-flex flex-column flex-grow-1'>
					<strong>{name}</strong>
					<small>{text}</small>
				</div>
				<div className='d-flex flex-row align-items-center'>
					<NavLink className='btn btn-outline-warning me-3' to={`/redact/${id}`}>
						Redact
					</NavLink>
					<button onClick={handleDelete} type='button' className='btn btn-outline-danger'>
						&times;
					</button>
				</div>
			</div>
		</li>
	);
};
