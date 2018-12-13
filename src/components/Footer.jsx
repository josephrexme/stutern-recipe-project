import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.footer`
  padding: 100px 20px;
  background: var(--color-brand-1);
  color: #fff;
  text-align: center;
`;

const Footer = () => (
  <FooterStyle>
    <p>&copy; 2018 Recipouille</p>
  </FooterStyle>
);

export default Footer;
