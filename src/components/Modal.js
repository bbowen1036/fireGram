import React from 'react';
import { motion } from 'framer-motion';
import { projectFirestore } from '../firebase/config';


const Modal = ({ selectedImg, setSelectedImg }) => {

  const handleClick = (e) => {
    if(e.target.classList.contains('backdrop')) {
      setSelectedImg(null);
    }
  };

  const handleDelete = (obj) => {
    setSelectedImg(null);
    projectFirestore.collection('images').doc(obj.id).delete();
  }
  

  return (
    <motion.div className='backdrop' onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div className='modal-group'
      
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      >
        <motion.img src={selectedImg.url} alt='enlarged-pic'
        />
        <div className="img-modal-des">
          <header className="img-header">
            <h4>USERNAME</h4>
            <button>Following</button>
          </header>

          <button className="delete-bttn" onClick={() => handleDelete(selectedImg)}>delete</button>
        </div>

      
      </motion.div>
    </motion.div>
  )
};


export default Modal;