import React from 'react';
import styled from 'styled-components';

import rebel from '../../assets/rebel.png';

const LogoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Logotext = styled.h1`
  font-size: 32px;
  font-weight: 900;
  color: #fff;
  text-shadow: 0 0 10px #fff;
`;

const LogoSubtext = styled.span`
  font-size: 16px;
  color: #fff;
  font-weight: 900;
  text-shadow: 0 0 5px #fff;
`;

const RebelLogo = styled.img`
  width: 300px;
  height: 300px;
  margin: 20px 0;
  filter: invert(1) drop-shadow(0 0 10px #fff);
`;

interface LogoProps {
  text?: string;
  subtext?: string;
  children?: React.ReactNode;
}

export function Logo({ text, subtext, children }: LogoProps) {
  return (
    <LogoDiv>
      <RebelLogo src={rebel} alt="Star Wars Logo" />
      <Logotext>{text}</Logotext>
      <LogoSubtext>{subtext}</LogoSubtext>
      {children}
    </LogoDiv>
  );
}