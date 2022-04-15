import React, {useContext} from "react";
import Token from "../../utils/Token";

const OrderSummary = () => {

  // TODO: Work out why TS is mad at this. I think there is something wrong with how I am
  //  initializing the `storefrontContext`.
  // @ts-ignore

  return (
    <section style={{ border: '5px solid #EEF2F5' }}>
      <h3><Token token={'payment.order-summary.heading'} /></h3>
      <table>
        <tbody>
        <tr>
          <td><Token token={'pts-order-summary.number-of-points.label'} /></td>
          <td>{ new Intl.NumberFormat().format(10000) }</td>
        </tr>
        <tr>
          <td><Token token={'receipt.order-details.order-date.label'} /></td>
          <td>{ new Date().toLocaleDateString() }</td>
        </tr>
        </tbody>
      </table>
    </section>
  )
}

export default OrderSummary;
