import React, { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Menu, Item, contextMenu } from 'react-contexify';
import classNames from 'classnames';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import 'react-contexify/dist/ReactContexify.css';

const ContextMenuActive = () => {
  const [activeCard, setActiveCard] = useState(null);

  const displayContextMenu = (event, id) => {
    contextMenu.show({
      id,
      event,
    });
  };

  const handleItemClick = ({ event, props, triggerEvent, data }) => {
    console.log(event, props, triggerEvent, data);
  };

  const activeMenuHidden = () => {
    setActiveCard(null);
  };

  return (
    <>
      <div id="securityWarning" onContextMenuCapture={(e) => displayContextMenu(e, 'context-menu-activatable1')}>
        <Card
          className={classNames('mb-5 cursor-default activatable', {
            active: activeCard === 'securityWarning',
          })}
        >
          <Row className="sh-9 p-card pt-0 pb-0 g-0">
            <Col xs="2" className="d-flex align-items-center justify-content-center">
              <div className="pe-card">
                <CsLineIcons icon="shield" width="20" height="20" className="cs-icon icon text-primary" />
              </div>
            </Col>
            <Col xs="10" className="d-flex flex-column justify-content-center">
              <p className="heading mb-0">Left Click Trigger</p>
              <p className="text-small text-muted mb-0">Sugar plum gummi bears jujubes cookie.</p>
            </Col>
          </Row>
        </Card>
      </div>
      <Menu
        id="context-menu-activatable1"
        animation={false}
        onHidden={activeMenuHidden}
        onShown={() => {
          setActiveCard('securityWarning');
        }}
      >
        <Item className="feather-copy" onClick={handleItemClick}>
          Copy
        </Item>
        <Item className="feather-archive" onClick={handleItemClick}>
          Archive
        </Item>
        <Item className="feather-trash-2" onClick={handleItemClick}>
          Delete
        </Item>
      </Menu>
    </>
  );
};

export default ContextMenuActive;
