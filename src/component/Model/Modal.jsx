import { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

const Modal = ({ isOpen, onClose, title, children }) => {
    useEffect(() => {
        const handleEscape = (e) => {
            if(e.key === 'Escape') onClose();
        }
        if(isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }
    }, [isOpen, onClose]);
    if(!isOpen) return null;
    return (
        <div className='modal-overlay' onClick={onClose}>
            <div className='modal'>
                <div className='modal-header'>
                    <h2>{title}</h2>
                    <button onClick={onClose}>X</button>
                </div>
                <div className='modal-content'>
                    {children}
                </div>
            </div>
        </div>
    )
};
Modal.PropTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}
export default Modal;