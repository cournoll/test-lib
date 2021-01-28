import React, { Suspense } from 'react';
import styled from 'styled-components';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import '@spectrum-css/vars/dist/spectrum-global.css';
import '@spectrum-css/vars/dist/spectrum-medium.css';
import '@spectrum-css/vars/dist/spectrum-light.css';
import '@spectrum-css/page/dist/index-vars.css';
import '@spectrum-css/typography/dist/index-vars.css';
import '@spectrum-css/icon/dist/index-vars.css';
import '@spectrum-css/button/dist/index-vars.css';

import Menu from './Menu';
import Routing from './Routing';

const App = () => {
  return (
    <Router>
      <Suspense fallback={'LOADING'}>
        <Container>
          <Menu />
          <Content>
            <Route render={(props) => <Routing {...props} />} />
          </Content>
        </Container>
      </Suspense>
    </Router>
  );
};

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Content = styled.div`
  flex: 1;
  padding: 50px;
  background-color: var(--spectrum-global-color-gray-50);
`;

export default App;
