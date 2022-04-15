import React from "react";
import styled from "styled-components";

const PlaceholderElement = styled.div`
  background: #EEF2F5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3vw;
  font-weight: bold;
`;

/**
 * This is a temporary component to easily make nice looking placeholder blocks
 * @param title
 * @param props
 * @constructor
 */
const Placeholder = ({ title, ...props } : any) => {
  return <PlaceholderElement {...props}><span>{ title }</span></PlaceholderElement>
}

export default Placeholder;
