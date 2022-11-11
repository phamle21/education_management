import React, { useState } from 'react';
import GlideGallery from 'components/carousel/GlideGallery';
import Lightbox from 'react-image-lightbox';
import { Spinner } from 'react-bootstrap';
import 'react-image-lightbox/style.css';

const CarouselGalleryWithLightbox = () => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };
  const galleyItems = [
    {
      large: '/img/product/large/product-1.webp',
      thumb: '/img/product/small/product-1.webp',
    },
    {
      large: '/img/product/large/product-2.webp',
      thumb: '/img/product/small/product-2.webp',
    },
    {
      large: '/img/product/large/product-3.webp',
      thumb: '/img/product/small/product-3.webp',
    },
    {
      large: '/img/product/large/product-4.webp',
      thumb: '/img/product/small/product-4.webp',
    },
    {
      large: '/img/product/large/product-5.webp',
      thumb: '/img/product/small/product-5.webp',
    },
  ];

  return (
    <>
      <GlideGallery>
        <GlideGallery.LargeItems className="shadow rounded mb-4">
          {galleyItems.map((item, index) => (
            <GlideGallery.Item key={`gallery.large.${index}`}>
              <img alt="detail" src={item.large} className="responsive border-0 rounded img-fluid w-100" onClick={() => openLightbox(index)} />
            </GlideGallery.Item>
          ))}
        </GlideGallery.LargeItems>
        <GlideGallery.ThumbItems className="mb-3" arrowClassName="shadow" arrowVariant="foreground-alternate">
          {galleyItems.map((item, index) => (
            <GlideGallery.Item key={`gallery.thumb.${index}`}>
              <img alt="thumb" src={item.thumb} className="responsive rounded-md img-fluid shadow" />
            </GlideGallery.Item>
          ))}
        </GlideGallery.ThumbItems>
      </GlideGallery>

      {isOpen && (
        <Lightbox
          mainSrc={galleyItems[photoIndex].large}
          nextSrc={galleyItems[(photoIndex + 1) % galleyItems.length].large}
          prevSrc={galleyItems[(photoIndex + galleyItems.length - 1) % galleyItems.length].large}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + galleyItems.length - 1) % galleyItems.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % galleyItems.length)}
          loader={<Spinner animation="border" />}
          wrapperClassName="rounded-lg"
        />
      )}
    </>
  );
};

export default CarouselGalleryWithLightbox;

/*
<GlideGallery>
    <GlideGallery.LargeItems>
        {galleyItems.map((item, index) => (
            <GlideGallery.Item key={`half.boxed.large.${index}`}>
                <img alt="detail" src={item.large} className="responsive border-0 rounded-top-start rounded-top-end img-fluid mb-3 w-100 sh-50" />
            </GlideGallery.Item>
        ))}
    </GlideGallery.LargeItems>
    <GlideGallery.ThumbItems className="mb-3">
        {galleyItems.map((item, index) => (
            <GlideGallery.Item key={`half.boxed.thumb.${index}`}>
                <img alt="thumb" src={item.thumb} className="responsive rounded-md img-fluid" />
            </GlideGallery.Item>
        ))}
    </GlideGallery.ThumbItems>
</GlideGallery> */
