import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  border-withh: 1px;
  cursor: pointer;
`;

function Button(props) {

  const {title, onClick} = props;
  return <StyledButton onClcick={onClick}>{title || "button"}</StyledButton>
}


export default Button
