/* Theme Settings & Niches Buttons */
import React, { useState } from 'react';
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import SettingsModal from './SettingsModal';
import NichesModal from './NichesModal';

const RightButtons = () => {
  const [isShowSettingsModal, setIsShowSettingsModal] = useState(false);
  const [isShowNichesModal, setIsShowNichesModal] = useState(false);
  const showSettingsModal = () => {
    setIsShowSettingsModal(true);
  };
  const closeSettingsModal = () => {
    setIsShowSettingsModal(false);
    document.documentElement.click();
  };
  const showNichesModal = () => {
    setIsShowNichesModal(true);
  };
  const closeNichesModal = () => {
    setIsShowNichesModal(false);
    document.documentElement.click();
  };

  return (
    <>
      <div className="settings-buttons-container">
        <OverlayTrigger delay={{ show: 1000, hide: 0 }} overlay={<Tooltip>Settings</Tooltip>} placement="left">
          <Button variant="primary" className="settings-button p-0" onClick={showSettingsModal}>
            <span>
              <CsLineIcons icon="gear" className="position-relative" />
            </span>
          </Button>
        </OverlayTrigger>
      </div>
      <SettingsModal show={isShowSettingsModal} handleClose={closeSettingsModal} />
      <NichesModal show={isShowNichesModal} handleClose={closeNichesModal} />
    </>
  );
};
export default RightButtons;
