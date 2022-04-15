import {Wrapper} from "../../utils/Wrapper";
import Token from "../../utils/Token";
import React from "react";

const IncrementSelector = () => {

  // @ts-ignore I am not sure why the functions are annoying TS

  const pricePerMile = .04;
  const blockSize = 1000;
  const exampleTiers = 25;

  const tiers = [];

  for (let i = 0; i < exampleTiers; i++) {
    let tierMiles = i * blockSize;
    tiers.push({
      currency: tierMiles,
      price: Math.round(pricePerMile * tierMiles)
    });
  }

  return (
    <Wrapper style={{ border: '5px solid #EEF2F5', padding: '1rem' }}>
      <div>
        <span style={{ marginRight: '.5rem' }}>Select currency:</span>
      </div>
    </Wrapper>
  )
}

export default IncrementSelector;
