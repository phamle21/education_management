import React from 'react';
import { NavLink } from 'react-router-dom';
import LayoutFullpage from 'layout/LayoutFullpage';
import CsLineIcons from 'cs-line-icons/CsLineIcons';
import HtmlHead from 'components/html-head/HtmlHead';

const InvalidAccess = () => {
  const title = 'Invalid Access';
  const description = 'Invalid Access Page';

  const rightSide = (
    <div className="sw-lg-80 min-h-100 bg-foreground d-flex justify-content-center align-items-center shadow-deep py-5 full-page-content-right-border">
      <div className="sw-lg-60 px-5">
        <div className="sh-11">
          <NavLink to="/">
            <div className="logo-default" />
          </NavLink>
        </div>
        <div className="mb-5">
          <h2 className="cta-1 mb-0 text-primary">Ooops, it looks like an error!</h2>
          <h2 className="display-2 text-primary">Invalid Access</h2>
        </div>
        <div className="mb-5">
          <p className="h6">It looks like the page you are looking for is not available.</p>
          <p className="h6">
            If you think that is a mistake, please <NavLink to="/">contact</NavLink> us.
          </p>
        </div>
        <div>
          <NavLink to="/" className="btn btn-icon btn-icon-start btn-primary">
            <CsLineIcons icon="arrow-left" /> <span>Back to Home</span>
          </NavLink>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <HtmlHead title={title} description={description} />
      <LayoutFullpage right={rightSide} />
    </>
  );
};

export default InvalidAccess;
