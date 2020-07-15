import React from 'react';
import styled from 'styled-components';

function Header() {
  return (
    <Wrapper>
      <Title>Fruit Emporium</Title>
      <Nav>
        <div>Home</div>
        <div>About</div>
      </Nav>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  @import url('https://fonts.googleapis.com/css2?family=Sora&display=swap');
  font-family: 'Sora', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
`;

const Title = styled.h1`
  font-size: 32px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 130px;
`;

export default Header;