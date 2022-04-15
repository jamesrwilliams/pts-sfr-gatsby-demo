import React from "react";
import {useContext} from "react";

const Token = ({token, noSpan = false}: { token: string; noSpan?: boolean }) => {
  return <>Missing token: { token }</>
}

export default Token;
