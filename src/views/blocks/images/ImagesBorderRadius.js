import React from 'react';

const ImagesBorderRadius = () => {
  return (
    <>
      <p>Size</p>
      <div className="mb-3">
        <div className="sw-6 me-1 mb-1 d-inline-block">
          <img src="/img/profile/profile-6.webp" className="img-fluid" alt="thumb" />
        </div>
        <div className="sw-6 me-1 mb-1 d-inline-block">
          <img src="/img/profile/profile-6.webp" className="img-fluid rounded-sm" alt="thumb" />
        </div>
        <div className="sw-6 me-1 mb-1 d-inline-block">
          <img src="/img/profile/profile-6.webp" className="img-fluid rounded-md" alt="thumb" />
        </div>
        <div className="sw-6 me-1 mb-1 d-inline-block">
          <img src="/img/profile/profile-6.webp" className="img-fluid rounded-xl" alt="thumb" />
        </div>
      </div>
      <p>Corners</p>
      <div>
        <div className="sw-6 me-1 mb-1 d-inline-block">
          <img src="/img/profile/profile-2.webp" className="img-fluid rounded-top" alt="thumb" />
        </div>
        <div className="sw-6 me-1 mb-1 d-inline-block">
          <img src="/img/profile/profile-2.webp" className="img-fluid rounded-end" alt="thumb" />
        </div>
        <div className="sw-6 me-1 mb-1 d-inline-block">
          <img src="/img/profile/profile-2.webp" className="img-fluid rounded-bottom" alt="thumb" />
        </div>
        <div className="sw-6 me-1 mb-1 d-inline-block">
          <img src="/img/profile/profile-2.webp" className="img-fluid rounded-start" alt="thumb" />
        </div>
      </div>
      <div>
        <div className="sw-6 me-1 mb-1 d-inline-block">
          <img src="/img/profile/profile-8.webp" className="img-fluid rounded-top-start" alt="thumb" />
        </div>
        <div className="sw-6 me-1 mb-1 d-inline-block">
          <img src="/img/profile/profile-8.webp" className="img-fluid rounded-top-end" alt="thumb" />
        </div>
        <div className="sw-6 me-1 mb-1 d-inline-block">
          <img src="/img/profile/profile-8.webp" className="img-fluid rounded-bottom-start" alt="thumb" />
        </div>
        <div className="sw-6 me-1 mb-1 d-inline-block">
          <img src="/img/profile/profile-8.webp" className="img-fluid rounded-bottom-end" alt="thumb" />
        </div>
      </div>
    </>
  );
};

export default ImagesBorderRadius;
