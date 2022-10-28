import React, { memo } from 'react';
import { Route, Redirect } from 'react-router-dom';

const RouteItem = ({ redirect = false, exact = false, path, to, component }) => {
  if (!path && !to) {
    return () => {};
  }
  if (redirect) {
    const props = {};
    if (path) props.from = path;
    if (exact) props.exact = exact;
    if (to) props.to = to;
    return <Redirect {...props} />;
  }
  const props = {};
  if (path) props.path = path;
  if (exact) props.exact = exact;
  if (component) props.component = component;

  return <Route {...props} />;
};

export default memo(RouteItem);
