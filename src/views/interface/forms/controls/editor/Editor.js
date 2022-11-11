import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useQuill } from 'react-quilljs';
import Scrollspy from 'components/scrollspy/Scrollspy';
import Active from 'components/quill/Active';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import HtmlHead from 'components/html-head/HtmlHead';
import EditorBubble from './EditorBubble';
import EditorFilled from './EditorFilled';
import EditorSnow from './EditorSnow';
import EditorTopLabel from './EditorTopLabel';
import EditorFloatingLabel from './EditorFloatingLabel';

const Editor = () => {
  const title = 'Quill Editor';
  const description = 'A Quill component for React.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', text: 'Interface' },
    { to: 'interface/forms', title: 'Forms' },
    { to: 'interface/forms/controls', title: 'Controls' },
  ];

  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'bubble', text: 'Bubble' },
    { id: 'snow', text: 'Snow' },
    { id: 'filled', text: 'Filled' },
    { id: 'topLabel', text: 'Top Label' },
    { id: 'floatingLabel', text: 'Floating Label' },
  ];

  /* Registering active module */
  const { Quill, quill } = useQuill();
  if (Quill && !quill) {
    Quill.debug('error');
    Quill.register('modules/active', Active);
  }

  return (
    <>
      <HtmlHead title={title} description={description} />
      <Row>
        <Col>
          {/* Title Start */}
          <section className="scroll-section" id="title">
            <div className="page-title-container">
              <h1 className="mb-0 pb-0 display-4">{title}</h1>
              <BreadcrumbList items={breadcrumbs} />
            </div>
            <Card className="mb-5" body>
              <Card.Text>{description}</Card.Text>
            </Card>
          </section>
          {/* Title End */}

          {/* Bubble Start */}
          <section className="scroll-section" id="bubble">
            <h2 className="small-title">Quill Bubble</h2>
            <Card body className="mb-5">
              <EditorBubble />
            </Card>
          </section>
          {/* Bubble End */}

          {/* Snow Start */}
          <section className="scroll-section" id="snow">
            <h2 className="small-title">Quill Snow</h2>
            <Card className="mb-5">
              <Card.Body className="editor-container">
                <EditorSnow />
              </Card.Body>
            </Card>
          </section>
          {/* Snow End */}

          {/* Filled Start */}
          <section className="scroll-section" id="filled">
            <h2 className="small-title">Filled</h2>
            <Card className="mb-5">
              <Card.Body className="editor-container">
                <EditorFilled />
              </Card.Body>
            </Card>
          </section>
          {/* Filled End */}

          {/* Top Label Start */}
          <section className="scroll-section" id="topLabel">
            <h2 className="small-title">Top Label</h2>
            <Card className="mb-5">
              <Card.Body className="editor-container">
                <EditorTopLabel />
              </Card.Body>
            </Card>
          </section>
          {/* Top Label End */}

          {/* Floating Label Start */}
          <section className="scroll-section" id="floatingLabel">
            <h2 className="small-title">Floating Label</h2>
            <Card>
              <Card.Body className="editor-container">
                <EditorFloatingLabel />
              </Card.Body>
            </Card>
          </section>
          {/* Floating Label End */}
        </Col>
        <Scrollspy items={scrollspyItems} />
      </Row>
    </>
  );
};

export default Editor;
