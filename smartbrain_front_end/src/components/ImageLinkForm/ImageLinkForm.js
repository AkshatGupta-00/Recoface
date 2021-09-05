import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className='white f3'>
                {'Do you want to identify faces in your photos? Paste the image URL here and off you go.'}
            </p>
            <div className='center'>
                <div className = 'form center pa4 br3 shadow-4'>
                    <input className = 'f4 pa2 w-70 center' type = 'tex' onChange = {onInputChange} />
                    <button 
                        className = 'w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
                        onClick = {onButtonSubmit}
                    > Detect </button>
                </div>
            </div>
        </div>
        
    );
}

export default ImageLinkForm;