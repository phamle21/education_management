import React from 'react';

const ImagesWithText = () => {
  return (
    <>
      <div className="d-flex align-items-center mb-3">
        <div className="sw-6 d-inline-block position-relative me-2">
          <img src="/img/profile/profile-1.webp" className="img-fluid rounded-xl border border-2 border-foreground" alt="thumb" />
          <i className="p-1 border border-1 border-foreground bg-primary position-absolute rounded-xl e-0 t-0 mt-1 me-1" />
        </div>
        <div className="d-inline-block">
          <div className="text-primary">Olli Tera</div>
          <div className="text-muted text-small">Project Manager</div>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <div className="d-inline-block me-2 text-end">
          <div className="text-primary">Olli Tera</div>
          <div className="text-muted text-small">Project Manager</div>
        </div>
        <div className="sw-6 d-inline-block position-relative">
          <img src="/img/profile/profile-1.webp" className="img-fluid rounded-xl border border-2 border-foreground" alt="thumb" />
          <i className="p-1 border border-1 border-foreground bg-primary position-absolute rounded-xl e-0 t-0 mt-1 me-1" />
        </div>
      </div>
    </>
  );
};

export default ImagesWithText;
