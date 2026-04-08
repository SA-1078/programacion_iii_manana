import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  border: 1px solid #30363d;
  background: #161b22;
  border-radius: 12px;
  padding: 16px;
`;

const Title = styled.h3`
  margin: 0 0 8px 0;
  color: #58a6ff;
  font-weight: 900;
`;

const Btn = styled.button`
  background: #58a6ff;
  color: white;
  border: 0;
  padding: 10px 16px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 700;

  &:hover {
    filter: brightness(1.05);
  }
`;

export default function StyledComponentsDemo() {
    return (
        <Wrap>
            <Title>Styled-components</Title>
            <Btn>Click Styled</Btn>
            
        </Wrap>
    );
}