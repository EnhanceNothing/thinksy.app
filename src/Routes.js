import React from 'react';
import { Routes as ReactRoutes, Route } from 'react-router-dom';
import WithLayout from 'WithLayout';
// Available layouts
import {
  Main as MainLayout,
  Fluid as FluidLayout,
  Fixed as FixedLayout,
} from './layouts';

// Landing pages
import {
  Home as HomeView,
  Advertisement as AdvertisementView,
  PaymentApp as PaymentAppView,
  Marketing as MarketingView,
  Software as SoftwareView,
  Course as CourseView,
  Crypto as CryptoView,
  DesignAgency as DesignAgencyView,
  Consulting as ConsultingView,
  Application as ApplicationView,
  DomainHosting as DomainHostingView,
  Travel as TravelView,
  Event as EventView,
} from './views/landingPages';

// Supporting pages
import {
  About as AboutView,
  Services as ServicesView,
  Contact as ContactView,
  Pricing as PricingView,
  Customers as CustomersView,
  HireUs as HireUsView,
  Faq as FaqView,
  Privacy as PrivacyView,
  ComingSoon as ComingSoonView,
  MaintenanceMode as MaintenanceModeView,
  ThankYou as ThankYouView,
  Cover as CoverView,
  NotFound as NotFoundView,
} from './views/supportingPages';

// Authentication pages
import {
  Login as LoginView,
  LoginSimple as LoginSimpleView,
  Signup as SignupView,
  SignupSimple as SignupSimpleView,
  ForgotPassword as ForgotPasswordView,
  ForgotPasswordSimple as ForgotPasswordSimpleView,
} from './views/authPages';

// Documentation pages
import {
  Introduction as IntroductionView,
  QuickStart as QuickStartView,
  Colors as ColorsView,
  TypographyComponent as TypographyComponentView,
  Shadows as ShadowsView,
  ContainerComponent as ContainerComponentView,
  Layouts as LayoutsView,
  Plugins as PluginsView,
  Support as SupportView,
  Icons as IconsView,
  Illustrations as IllustrationsView,
  ChangeLog as ChangeLogView,
} from './views/docs';
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
        path="/about"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={AboutView}
            layout={MainLayout}
          />
        ))()}
      />
      <Route
        exact
        path="/thankyou"
        element={((matchProps) => (
          <WithLayout
            {...matchProps}
            component={ThankYouView}
            layout={MainLayout}
          />
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
