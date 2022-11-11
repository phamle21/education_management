import React from 'react';
import GlideGallery from 'components/carousel/GlideGallery';

const CarouselGalleryHalfBoxed = () => {
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
    <GlideGallery>
      <GlideGallery.LargeItems>
        {galleyItems.map((item, index) => (
          <GlideGallery.Item key={`half.boxed.large.${index}`}>
            <img alt="detail" src={item.large} className="responsive border-0 rounded-top-start rounded-top-end img-fluid mb-3 w-100" />
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
    </GlideGallery>
  );
};

export default CarouselGalleryHalfBoxed;
