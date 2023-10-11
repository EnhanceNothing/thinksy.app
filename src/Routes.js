import React from 'react';
import {HashRouter,Routes as ReactRoutes, Route } from 'react-router-dom';
import WithLayout from 'WithLayout';
// Available layouts
import {
  Main as MainLayout,
  Fluid as FluidLayout,
  Fixed as FixedLayout,
} from './layouts';

// Landing pages
import {
  Advertisement as AdvertisementView,
} from './views/landingPages';

// Supporting pages
import {
  About as AboutView,
  ThankYou as ThankYouView,
  NotFound as NotFoundView,
  Faq as FAQView,
} from './views/supportingPages';

const Routes = () => {
  return (
    <ReactRoutes>
      <Route
        exact
        path="/"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={AdvertisementView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/faq"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={FAQView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/thankyou"
        element={(() => (
          <ThankYouView />
        ))()}
      />      
      <Route
        path="*"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={NotFoundView}
            layout={MainLayout}
          />
        ))()}
      />
    </ReactRoutes>
  );
};

export default Routes;
