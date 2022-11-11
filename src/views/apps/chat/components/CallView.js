import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import { useDispatch, useSelector } from 'react-redux';
import { chatChangeMode, chatSetCurrentCall } from '../chatSlice';

const CallView = () => {
  const dispatch = useDispatch();
  const { currentCall } = useSelector((state) => state.chat);

  const [camera, setCamera] = useState(true);
  const [mic, setMic] = useState(true);

  const micToggleClick = () => {
    setMic(!mic);
  };
  const cameraToggleClick = () => {
    setCamera(!camera);
  };

  const endCallClick = () => {
    dispatch(chatChangeMode('chat'));
    dispatch(chatSetCurrentCall(null));
  };
  if (currentCall) {
    return (
      <Card className="flex-column h-100 w-100 bg-gradient-single-2" id="callMode">
        <div className="bg-vertical-ornament-3 w-100 h-100 d-flex flex-column justify-content-between align-items-center">
          <Card.Body className="d-flex align-items-center flex-column flex-grow-1 w-100">
            <div className="sw-10 mb-2 position-relative">
              <img src={currentCall.thumb} className="img-fluid rounded-xl border border-2 border-foreground profile" alt={currentCall.name} />
            </div>
            <div className="name text-white">{currentCall.name}</div>
            <div className="text-white text-small time">00:00:00</div>
          </Card.Body>
          <Card.Body className="d-flex flex-grow-0">
            <Button variant="foreground" className="btn-icon btn-icon-only me-2" onClick={cameraToggleClick}>
              <CsLineIcons icon={camera ? 'camera' : 'camera-off'} />
            </Button>
            <Button variant="foreground" className="btn-icon btn-icon-only me-2" onClick={micToggleClick}>
              <CsLineIcons icon={mic ? 'mic' : 'mic-off'} />
            </Button>
            <Button variant="foreground" className="btn-icon" onClick={endCallClick}>
              <CsLineIcons icon="phone-off" />
              <span>End Call</span>
            </Button>
          </Card.Body>
        </div>
      </Card>
    );
  }
  return <></>;
};
export default CallView;
