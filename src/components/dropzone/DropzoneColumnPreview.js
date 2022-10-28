import React from 'react';
import { Spinner } from 'react-bootstrap';

const DropzoneColumnPreview = ({ meta, fileWithMeta }) => {
  const { remove } = fileWithMeta;
  const { name, status, previewUrl, size } = meta;

  return (
    <div className="col">
      <div className="border border-1 border-separator g-0 rounded-sm position-relative z-index-1">
        <div className="position-relative">
          {previewUrl ? (
            <img src={previewUrl} alt="preview image" className="w-100 sh-18 rounded-sm-top" />
          ) : (
            <div className="w-100 sh-18 d-flex justify-content-center align-items-center">
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
        </div>
        <div className="px-3 d-flex flex-column justify-content-center py-3">
          <div className="d-flex justify-content-between">
            <div className="w-80">
              <p className="mb-1 pe-2 w-100 dzu-preview-file-name">{name}</p>
              <div className="text-small text-primary">{Math.round(size / 1000)} KB</div>
            </div>
            {status !== 'preparing' && status !== 'getting_upload_params' && status !== 'uploading' && (
              <button className="btn btn-link text-muted p-0 sh-3" type="button" onClick={remove}>
                <i className="cs-bin" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropzoneColumnPreview;
