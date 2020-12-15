import React, { useState } from 'react';
import CartModal from './components/CartModal';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
import Title from './components/Title';
import UploadForm from './components/UploadForm';

function App() {
  const [ selectedImg, setSelectedImg ] = useState(null)
  const [ toggle, setToggle ] = useState(false)

  console.log(selectedImg)
  return (
    <div className="App">
      <Title />
      <CartModal setToggle={setToggle} toggle={toggle}/>
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
    </div>
  );
}

export default App;
