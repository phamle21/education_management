import React from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';

const DropzonePreview = ({ meta, fileWithMeta }) => {
  const { remove } = fileWithMeta;
  const { name, status, previewUrl, size } = meta;

  return (
    <Row className="sw-40 border border-1 border-separator g-0 rounded-sm me-2 mb-2 position-relative z-index-1">
      <Col xs="auto" className="position-relative">
        {previewUrl ? (
          <img src={previewUrl} alt="preview image" className="sw-12 sh-9 rounded-sm-start" />
        ) : (
          <div className="sw-12 sh-9 d-flex justify-content-center align-items-center">
            <i className="cs-file-text dzu-preview-icon" />
          </div>
        )}
        {(status === 'error_upload_params' || status === 'exception_upload' || status === 'error_upload') && (
          <div className="dzu-preview-error">
            <i className="cs-close-circle" />
          </div>
        )}
        {status === 'done' && (
          <div className="dzu-preview-success">
            <i className="cs-check" />
          </div>
        )}
        {status !== 'error_upload_params' && status !== 'exception_upload' && status !== 'error_upload' && status !== 'done' && (
          <div className="dzu-preview-spinner">
            <Spinner animation="border" size="sm" variant="primary" className="dzu-spinner-border" />
          </div>
        )}
      </Col>
      <Col className="px-3 d-flex flex-column justify-content-center">
        <div className="d-flex justify-content-between">
          <div>
            <p className="mb-1 pe-2 sw-20 dzu-preview-file-name">{name}</p>
            <div className="text-small text-primary">{Math.round(size / 1000)} KB</div>
          </div>
          {status !== 'preparing' && status !== 'getting_upload_params' && status !== 'uploading' && (
            <button className="btn btn-link p-0 sh-3 text-muted" type="button" onClick={remove}>
              <i className="cs-bin" />
            </button>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default DropzonePreview;
