
import PropTypes from 'prop-types';


const Modal3 = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2 style={{color: 'aqua', textShadow: '2px 2px 4px rgba(0, 0, 0, 1)'}} className='text-4xl font-bold '>TempuraTales</h2>
        <p className='font-bold my-4 ml-2 text-xl'>TempuraTales wholeheartedly embraces its mission of promoting Japanese cuisine and culture. The website proudly showcases a dedicated team driven by an unwavering passion for creating mouthwatering and genuinely authentic Japanese dishes.</p>
        <h3 style={{color: 'aqua', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)'}} className='text-3xl font-bold '>Technologies</h3>
        <p className='text-2xl font-bold my-6'>React.js, Node.js, Express.js, MongoDB, Firebase, React Bootstrap</p>
      </div>
    </div>
  );
};

Modal3.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal3;
