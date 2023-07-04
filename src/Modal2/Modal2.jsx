
import PropTypes from 'prop-types';


const Modal2 = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2 style={{color: 'aqua', textShadow: '2px 2px 4px rgba(0, 0, 0, 1)'}} className='text-4xl font-bold '>ToyWarriors</h2>
        <p className='font-bold my-4 ml-2 text-xl'>ToyWarriors is committed to offering a diverse selection of high-quality action figures for toy enthusiasts, collectors, and parents. Our immersive website features a vast collection from popular franchises like Avengers, Transformers, and DC.</p>
        <h3 style={{color: 'aqua', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)'}} className='text-3xl font-bold '>Technologies</h3>
        <p className='text-2xl font-bold my-6'>React.js, Node.js, Express.js, MongoDB, Firebase, Tailwind CSS</p>
      </div>
    </div>
  );
};

Modal2.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal2;
