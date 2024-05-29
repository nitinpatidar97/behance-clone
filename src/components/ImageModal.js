import React from 'react';
import './ImageModal.css';

const ImageModal = ({ image, onClose }) => {
    return (
        <div className="image-modal" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close" onClick={onClose}>&times;</span>
                <img src={require(`../components/images/${image.src}`)} alt="" />
            </div>
        </div>
    );
};

export default ImageModal;
