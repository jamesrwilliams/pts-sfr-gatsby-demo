import React from "react";

const Debug = ({ data = {}, title = 'JSON' }) => {
  return <details style={{ color: 'red', background: 'yellow', display: 'inline-block' }}>
    <summary>{ title }</summary>
    <pre style={{ color: '#000' }}>{ JSON.stringify(data, null, 4) }</pre>
  </details>
}

export default Debug;
