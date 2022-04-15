import Debug from "../temp/Debug";
import {Wrapper} from "../utils/Wrapper";
import Placeholder from "../utils/Placeholder";
import React from "react";

// TODO: Replace this `any` with a model once we know what data would come back for this "block".
const Content = ({ data }: any) => (
  <section id={'content'}>
    <Wrapper>
      <Placeholder style={{ height: '250px' }} title={'This is a "content" block'}/>
      <Debug title={'Content data'} data={data} />
    </Wrapper>
  </section>
)

export default Content;
