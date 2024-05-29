import React, { useState } from 'react';
import './ImageGallery.css';
import ImageModal from './ImageModal';

const images = [
    { src: 'istockphoto.jpg', likes: 110, views: 200 , tags: ['packaging', 'design', 'art'] },
    { src: 'istockphoto2.jpg', likes: 200, views: 220 , tags: ['ui', 'photography', 'landscape'] },
    { src: 'istockphoto3.jpg', likes: 180, views: 300 , tags: ['twitch overlay', 'portrait', 'studio'] },
    { src: 'istockphoto4.jpg', likes: 130, views: 150 , tags: ['app', 'design', 'illustration'] },
    { src: 'istockphoto5.jpg', likes: 100, views: 170 , tags: ['ui', 'photography', 'landscape'] },
    { src: 'istockphoto7.jpg', likes: 30, views: 49 ,tags: ['twitch overlay', 'portrait', 'studio'] },
    { src: 'istockphoto8.jpg', likes: 70, views: 85  , tags: ['app', 'design', 'illustration'] },
    { src: 'istockphoto9.jpg', likes: 85, views: 101 , tags: ['ui', 'photography', 'landscape'] },
    { src: 'istockphoto10.jpg', likes: 92, views:116 ,tags: ['twitch overlay', 'portrait', 'studio'] },
    { src: 'istockphoto11.jpg', likes: 180, views: 222 , tags: ['packaging', 'design', 'art'] },
    { src: 'istockphoto12.jpg', likes: 182, views: 242  , tags: ['app', 'design', 'illustration'] },
    { src: 'image3.jpg', likes: 233, views: 242 ,tags: ['twitch overlay', 'portrait', 'studio'] },
];

const ImageGallery = ({ searchQuery }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageData, setImageData] = useState(images);

    const openImageModal = (image) => {
        setSelectedImage(image);
    };

    const closeImageModal = () => {
        setSelectedImage(null);
    };

    const handleLikeClick = (index) => {
        const newImageData = [...imageData];
        newImageData[index].likes += 1;
        setImageData(newImageData);

        const heart = document.getElementById(`heart-${index}`);
        heart.classList.add('is_animating');
        setTimeout(() => heart.classList.remove('is_animating'), 800); // Reset after animation duration
    };

    const filteredImages = imageData.filter(image =>
        image.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <div className="image-gallery">
            {filteredImages.map((image, index) => (
                <div key={index} className="image-item">
                    <img src={require(`../components/images/${image.src}`)} alt="" onClick={() => openImageModal(image)} />
                    <div className="image-info">
                        <div className="heart-container">
                            <div id={`heart-${index}`} className="heart" onClick={() => handleLikeClick(index)}></div>
                            <span className="likes">{image.likes}</span>
                        </div>
                        <span className="views">{image.views} views</span>
                    </div>
                </div>
            ))}
            {selectedImage && <ImageModal image={selectedImage} onClose={closeImageModal} />}
        </div>
    );
};

export default ImageGallery;
