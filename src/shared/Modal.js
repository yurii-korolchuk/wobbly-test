import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ModalContext } from '../context/ModalContext';

export const Modal = () => {
	const { data, close } = useContext(ModalContext);

	const handleSuccess = () => {
		data.callback();
		close();
	};

	const handleReject = () => {
		close();
	};

	return (
		<div
			className='modal d-flex flex-row align-items-center'
			tabIndex='-1'
			style={{ backgroundColor: 'rgba(0, 0, 0, .5)' }}
		>
			<div className='modal-dialog'>
				<div className='modal-content'>
					<div className='modal-header'>
						<h5 className='modal-title'>{`Are you really sure you want to ${data.action} ?`}</h5>
						<button
							onClick={handleReject}
							type='button'
							className='btn-close'
							aria-label='Close'
						></button>
					</div>
					<div className='modal-footer d-flex justify-content-between'>
						<div onClick={handleSuccess}>
							<NavLink className='btn btn-primary' to={data.redirect}>
								Yes
							</NavLink>
						</div>
						<button type='button' className='btn btn-secondary' onClick={handleReject}>
							No
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
