import Debug from "../temp/Debug";
import {Wrapper} from "../utils/Wrapper";
import Placeholder from "../utils/Placeholder";
import Token from "../utils/Token";
import React from "react";

// TODO: Replace this `any` with a model once we know what data would come back for this "block".
const Marketing = ({ data }: any) => (
  <section id={'marketing'}>
    <Wrapper>
      <Placeholder style={{ height: '250px' }} title={'This is a marketing block'} />
      <p></p>
      <p style={{ fontSize: '18px' }}><Token token={'hero.description'} /></p>
      <Debug title={"Marketing data"} data={data} />
    </Wrapper>
  </section>
)

export default Marketing;
