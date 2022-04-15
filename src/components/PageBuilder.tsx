import React from "react";
import styled from "styled-components";
import {Header, Marketing, Offer, Content, Footer} from "./blocks";

const UnmappedComponent = styled.section`
  background: yellow;
`;

// TODO: Replace this `any` with a model once we know what data would come back for all the "blocks".
const PageBuilder = ({pageData}: any) => {

  const slices = pageData;

  const componentMapping = {
    header: Header,
    marketing: Marketing,
    offer: Offer,
    content: Content,
    footer: Footer,
  }

  if (!slices.regions) {
    return <>Unable to load data from content API.</>
  }

  return (
    <main id={'storefront'}>
      { slices.regions.map((slice: any) => {
        // @ts-ignore
        const SliceComponent = componentMapping[slice.id];
        if (SliceComponent) {
          return (
            <SliceComponent data={slice.components} key={`slice-${slice.id}`}/>
          )
        }
        return (
          <UnmappedComponent key={`slice-${new Date().toISOString()}`}>
            No slice component mapped for: <code>{JSON.stringify(slice.id)}</code>
          </UnmappedComponent>
        )
      })}
    </main>
  )
}

export default PageBuilder;
