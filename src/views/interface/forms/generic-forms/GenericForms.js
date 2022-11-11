import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import BreadcrumbList from 'components/breadcrumb-list/BreadcrumbList';
import HtmlHead from 'components/html-head/HtmlHead';
import Scrollspy from 'components/scrollspy/Scrollspy';
import GenericFormsAddress from './GenericFormsAddress';
import GenericFormsContact from './GenericFormsContact';
import GenericFormsLogin from './GenericFormsLogin';
import GenericFormsPersonal from './GenericFormsPersonal';
import GenericFormsReservation from './GenericFormsReservation';
import GenericFormsSignUp from './GenericFormsSignUp';

const GenericForms = () => {
  const title = 'Generic Forms';
  const description = 'Various commonly used form examples with different layouts.';

  const breadcrumbs = [
    { to: '', text: 'Home' },
    { to: 'interface', text: 'Interface' },
    { to: 'interface/forms', title: 'Forms' },
  ];

  const scrollspyItems = [
    { id: 'title', text: 'Title' },
    { id: 'login', text: 'Login' },
    { id: 'signUp', text: 'Sign Up' },
    { id: 'contact', text: 'Contact' },
    { id: 'personal', text: 'Personal' },
    { id: 'address', text: 'Address' },
    { id: 'reservation', text: 'Reservation' },
  ];

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

          {/* Login Start */}
          <section className="scroll-section" id="login">
            <h2 className="small-title">Login</h2>
            <Card body className="mb-5">
              <GenericFormsLogin />
            </Card>
          </section>
          {/* Login End */}

          {/* Sign Up Start */}
          <section className="scroll-section" id="signUp">
            <h2 className="small-title">Sign Up</h2>
            <Card body className="mb-5">
              <GenericFormsSignUp />
            </Card>
          </section>
          {/* Sign Up End */}

          {/* Contact Start */}
          <section className="scroll-section" id="contact">
            <h2 className="small-title">Contact</h2>
            <Card body className="mb-5">
              <GenericFormsContact />
            </Card>
          </section>
          {/* Contact End */}

          {/* Personal Start */}
          <section className="scroll-section" id="personal">
            <h2 className="small-title">Personal</h2>
            <Card body className="mb-5">
              <GenericFormsPersonal />
            </Card>
          </section>
          {/* Personal End */}

          {/* Address Start */}
          <section className="scroll-section" id="address">
            <h2 className="small-title">Address</h2>
            <Card body className="mb-5">
              <GenericFormsAddress />
            </Card>
          </section>
          {/* Address End */}

          {/* Reservation Start */}
          <section className="scroll-section" id="reservation">
            <h2 className="small-title">Reservation</h2>
            <Card body>
              <GenericFormsReservation />
            </Card>
          </section>
          {/* Reservation End */}
        </Col>
        <Scrollspy items={scrollspyItems} />
      </Row>
    </>
  );
};

export default GenericForms;
