import styled from "styled-components";
import React from "react";

const MessageContainer = styled.div`
  padding: .7rem 1rem;
  color: #664d03;
  background: #fff3cd;
  border: 1px solid #ffecb5;
  text-align: center;
  display: flex;
  position: relative;
  justify-content: space-between;
  
  a {
    text-decoration: none;
    color: inherit;
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  button {
    border: 0;
    padding: .7rem;
    top: 5px;
    right: 0;
    background: transparent url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000'%3e%3cpath d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/%3e%3c/svg%3e") center/1em auto no-repeat;
  }
`;

const BannerMessage: React.FC = ({ children }) => (
  <MessageContainer>{ children }</MessageContainer>
)



export default BannerMessage;
