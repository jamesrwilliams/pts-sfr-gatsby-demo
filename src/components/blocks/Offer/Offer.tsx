import Debug from "../../temp/Debug";
import React from "react";
import IncrementSelector from "./IncrementSelector";
import OrderSummary from "./OrderSummary";
import {Wrapper} from "../../utils/Wrapper";
import PaymentForm from "./PaymentForm";

// Replace this any with a model once we know what data would come back for this "block".
const Offer = ({ data }: any) => (
  <section id={'offer'}>
    <Wrapper>
      <IncrementSelector />
      <PaymentForm />
      <OrderSummary />
      <Debug title={'Offer data'} data={data} />
    </Wrapper>
  </section>
)



export default Offer;
