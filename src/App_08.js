import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ClassDemoPage_08 from './pages/ClassDemoPage_08';
import W16_NavbarPage_08 from './pages/w16/W16_NavbarPage_08';

import W14_HooksT41Page_08 from './pages/w14/W14_HooksT41Page_08';
import W14_HooksT43Page_08 from './pages/w14/W14_HooksT43Page_08'

const App_08 = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={ClassDemoPage_08} />
        <Route exact path="/w14" component={W14_HooksT41Page_08} />
        <Route exact path="/w14/T41" component={W14_HooksT41Page_08} />
        <Route exact path="/w14/T43" component={W14_HooksT43Page_08} />
      </Switch>
    </>
  );
};

export default App_08;
