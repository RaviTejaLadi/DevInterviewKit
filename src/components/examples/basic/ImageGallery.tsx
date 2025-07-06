import React, { useState } from 'react';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="image-gallery flex flex-col gap-4">
      <div className="gallery-main">
        {selectedImage ? (
          <img src={selectedImage} alt="Selected" className="w-full max-h-96 object-contain border rounded" />
        ) : (
          <img src={images[0]} alt="Gallery" className="w-full max-h-96 object-contain border rounded" />
        )}
      </div>
      <div className="gallery-thumbnails flex gap-2 overflow-x-auto">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            onClick={() => setSelectedImage(image)}
            className={`w-20 h-20 object-cover cursor-pointer border rounded ${
              selectedImage === image ? 'ring-2 ring-blue-500' : ''
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;

export const ImageGalleryUsage = () => {
  const images = [
    'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&h=300',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&h=300',
    'https://images.unsplash.com/photo-1604079628043-94317f1de3f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400&h=300',
  ];
  return <ImageGallery images={images} />;
};
