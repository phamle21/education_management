import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Menu, Item, contextMenu } from 'react-contexify';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import 'react-contexify/dist/ReactContexify.css';

const ContextMenuLeftClick = () => {
  const displayContextMenu = (event, id) => {
    contextMenu.show({
      id,
      event,
    });
  };

  const handleItemClick = ({ event, props, triggerEvent, data }) => {
    console.log(event, props, triggerEvent, data);
  };

  return (
    <>
      <div onClick={(e) => displayContextMenu(e, 'context-menu-double-click')}>
        <Card className="mb-5 cursor-default">
          <Row className="sh-9 p-card pt-0 pb-0 g-0">
            <Col xs="2" className="d-flex align-items-center justify-content-center">
              <div className="pe-card">
                <CsLineIcons icon="layout-4" width="20" height="20" className="cs-icon icon text-primary" />
              </div>
            </Col>
            <Col xs="10" className="d-flex flex-column justify-content-center">
              <p className="heading mb-0">Left Click Trigger</p>
              <p className="text-small text-muted mb-0">Sugar plum gummi bears jujubes cookie.</p>
            </Col>
          </Row>
        </Card>
      </div>
      <Menu id="context-menu-double-click" animation={false}>
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

export default ContextMenuLeftClick;
