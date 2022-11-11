import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const MessageContentAttachment = ({ attachments, time }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  if (attachments && attachments.length > 0) {
    return (
      <>
        {attachments.map((attachment, aIndex) => {
          return (
            <div key={`m.attachment.${aIndex}`} className="d-inline-block sh-11 ms-2 position-relative pb-4 bg-primary rounded-md">
              <div className="lightbox h-100 attachment cursor-pointer" onClick={() => openLightbox(aIndex)}>
                <img src={attachment} className="h-100 rounded-md-top" alt={attachment} />
              </div>
              <span className="position-absolute text-extra-small text-white opacity-75 b-2 s-2 time">{time}</span>
            </div>
          );
        })}
        {isOpen && (
          <Lightbox
            mainSrc={attachments[photoIndex]}
            nextSrc={attachments[(photoIndex + 1) % attachments.length]}
            prevSrc={attachments[(photoIndex + attachments.length - 1) % attachments.length]}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() => setPhotoIndex((photoIndex + attachments.length - 1) % attachments.length)}
            onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % attachments.length)}
            loader={<Spinner animation="border" />}
            wrapperClassName="rounded-lg"
          />
        )}
      </>
    );
  }
  return <></>;
};
export default MessageContentAttachment;
