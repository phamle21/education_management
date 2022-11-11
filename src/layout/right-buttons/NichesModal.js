import React from 'react';
import { Modal } from 'react-bootstrap';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

const Niche = ({ title = '', img = '', urls = { html: '', laravel: '', dotnet: '', react: '' } }) => (
  <div className="mb-5">
    <label className="mb-2 d-inline-block form-label">{title}</label>
    <div className="hover-reveal-buttons position-relative hover-reveal cursor-default">
      <div className="position-relative mb-3 mb-lg-5 rounded-sm">
        <a target="_blank" href={urls.react} rel="noreferrer">
          <img src={img} className="img-fluid rounded-sm lower-opacity" alt={title} />
        </a>
      </div>
    </div>
  </div>
);

const NichesModal = ({ handleClose, show = false }) => {
  return (
    <>
      <Modal
        show={show}
        id="settings"
        onHide={handleClose}
        className="modal-right scroll-out-negative"
        dialogClassName="full"
        aria-labelledby="settings"
        tabIndex="-1"
        scrollable
      >
        <Modal.Header>
          <Modal.Title as="h5">Niches</Modal.Title>
          <button type="button" className="btn-close" onClick={handleClose} />
        </Modal.Header>
        <Modal.Body>
          <OverlayScrollbarsComponent options={{ overflowBehavior: { x: 'hidden', y: 'scroll' } }} className="scroll-track-visible">
            <Niche
              title="Classic Dashboard"
              img="https://acorn.coloredstrategies.com/img/page/classic-dashboard.webp"
              urls={{
                react: 'https://acorn-react-classic-dashboard.coloredstrategies.com/',
              }}
            />
            <Niche
              title="Ecommerce Platform"
              img="https://acorn.coloredstrategies.com/img/page/ecommerce-platform.webp"
              urls={{
                react: 'https://acorn-react-ecommerce-platform.coloredstrategies.com/',
              }}
            />
            <Niche
              title="Elearning Portal"
              img="https://acorn.coloredstrategies.com/img/page/elearning-portal.webp"
              urls={{
                react: 'https://acorn-react-elearning-portal.coloredstrategies.com/',
              }}
            />
            <Niche
              title="Service Provider"
              img="https://acorn.coloredstrategies.com/img/page/service-provider.webp"
              urls={{
                react: 'https://acorn-react-service-provider.coloredstrategies.com/',
              }}
            />
            <Niche
              title="Starter Project"
              img="https://acorn.coloredstrategies.com/img/page/starter-project.webp"
              urls={{
                react: 'https://acorn-react-starter-project.coloredstrategies.com/',
              }}
            />
          </OverlayScrollbarsComponent>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NichesModal;
