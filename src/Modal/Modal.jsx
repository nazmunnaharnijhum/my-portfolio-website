
import PropTypes from 'prop-types';
import './Modal.css';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2 style={{color: 'aqua', textShadow: '2px 2px 4px rgba(0, 0, 0, 1)'}} className='text-4xl font-bold '>ZenZone Camp</h2>
        <p className='font-bold my-4 ml-2 text-xl'>ZenZone Camp is a platform that facilitates yoga learning through various features and functionalities. It allows admins to manage users and classes, instructors to post classes, and normal users (students) to bookmark classes for enrollment and make payments.</p>
        <h3 style={{color: 'aqua', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)'}} className='text-3xl font-bold '>Technologies</h3>
        <p className='text-2xl font-bold my-6'>React.js, Node.js, Express.js, MongoDB, Firebase, Tailwind CSS</p>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
