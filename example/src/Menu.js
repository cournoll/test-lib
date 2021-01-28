import styled from 'styled-components';

import '@spectrum-css/sidenav';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <Container>
      <nav>
        <ul className="spectrum-SideNav">
          <li className="spectrum-SideNav-item">
            <Link to={'/'} className="spectrum-SideNav-itemLink">
              Home
            </Link>
          </li>
          <li className="spectrum-SideNav-item">
            <Link to={'/example'} className="spectrum-SideNav-itemLink">
              Example
            </Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
}

const Container = styled.nav`
  overflow-y: scroll;
  background-color: #f5f5f5;
  padding: 20px;
  width: 256px;
  box-sizing: border-box;
`;

export default Menu;
