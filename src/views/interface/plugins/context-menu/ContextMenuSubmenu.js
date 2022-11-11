import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Menu, Item, Submenu, contextMenu } from 'react-contexify';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import 'react-contexify/dist/ReactContexify.css';

const ContextMenuSubmenu = () => {
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
      <div onContextMenu={(e) => displayContextMenu(e, 'context-menu-subitems')}>
        <Card className="mb-5 cursor-default">
          <Row className="sh-9 p-card pt-0 pb-0 g-0">
            <Col xs="2" className="d-flex align-items-center justify-content-center">
              <div className="pe-card">
                <CsLineIcons icon="menu-right" width="20" height="20" className="cs-icon icon text-primary" />
              </div>
            </Col>
            <Col xs="10" className="d-flex flex-column justify-content-center">
              <p className="heading mb-0">Sub Menu Items</p>
              <p className="text-small text-muted mb-0">Sugar plum gummi bears jujubes cookie.</p>
            </Col>
          </Row>
        </Card>
      </div>
      <Menu id="context-menu-subitems" animation={false}>
        <Item className="feather-edit" onClick={handleItemClick}>
          Edit
        </Item>
        <Item className="feather-scissors" onClick={handleItemClick}>
          Cut
        </Item>
        <Submenu className="feather-archive" label="Move" arrow={<span className="submenu-arrow" />}>
          <Item onClick={handleItemClick}>Archive</Item>
          <Submenu label="Folders" arrow={<span className="submenu-arrow" />}>
            <Item onClick={handleItemClick}>Alpha</Item>
            <Item onClick={handleItemClick}>Bravo</Item>
            <Item onClick={handleItemClick}>Charlie</Item>
          </Submenu>
          <Item onClick={handleItemClick}>Spam</Item>
        </Submenu>
      </Menu>
    </>
  );
};

export default ContextMenuSubmenu;
