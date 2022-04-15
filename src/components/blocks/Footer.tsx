import styled from "styled-components";
import Debug from "../temp/Debug";
import {Wrapper} from "../utils/Wrapper";
import Token from "../utils/Token";
import React from "react";

const FooterElement = styled.section`
  background: #eee;
  padding: 1rem 0;
`;

// TODO: Replace this `any` with a model once we know what data would come back for this "block".
const Footer = ({data}: any) => (
  <FooterElement id={'footer'}>
    <Wrapper>
      <div><Token token={'footer.copyright'} /></div>
      <Debug title={'Footer data'} data={data} />
    </Wrapper>
  </FooterElement>
)

export default Footer;
