import { FC, useState, useEffect } from 'react';

const Lightbox: FC<{ images: string[]; startIndex: number; onClose: () => void }> = ({ images, startIndex, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const showPrev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  const showNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  useEffect(() => {
    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);
  return (
    <div id="galleryLightbox" className="lightbox-overlay" onClick={onClose}>
      <button id="lightboxClose" className="lightbox-close" aria-label="Close" onClick={onClose}>
        &times;
      </button>
      <button id="lightboxPrev" className="lightbox-nav prev" aria-label="Previous image" onClick={(e) => { e.stopPropagation(); showPrev(); }}>
        &#10094;
      </button>
      <button id="lightboxNext" className="lightbox-nav next" aria-label="Next image" onClick={(e) => { e.stopPropagation(); showNext(); }}>
        &#10095;
      </button>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img src={images[currentIndex]} alt={`Enlarged gallery image ${currentIndex + 1}`} />
        <div id="lightboxCounter" className="lightbox-counter">{`${currentIndex + 1} / ${images.length}`}</div>
      </div>
    </div>
  );
};

export default Lightbox;