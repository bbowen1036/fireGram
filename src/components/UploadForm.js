import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {

  const [ file, setFile ] = useState(null);
  const [ error, setError ] = useState(null);

  const allowedTypes = ['image/png', 'image/jpg', 'image/jpeg'];


  const changeHandler = (e) => {
    let selected = e.target.files[0];
    
    //this is tp prevent an 'undefined' to be set, as in the event that file upload is CANCLED
    if (selected && allowedTypes.includes(selected.type)) {
      setFile(selected);
      setError('')
    } else {
      setFile(null);
      setError('Please select an image file (png or jpeg)');
    }
  };
  
  return (
    <form>
      <label>
        <input type="file" onChange={changeHandler}/>
        <span>+</span>
      </label>

      <div className="output">
        { error ? <div className="error">{ error }</div> : null}
        { file ? <div className="file">{ file.name }</div> : null}
        { file ? <ProgressBar file={file} setFile={setFile} /> : null}
      </div>
    </form>
  )
};

export default UploadForm;
