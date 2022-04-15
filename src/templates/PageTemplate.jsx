import React from 'react';
import {graphql} from "gatsby";
import PageBuilder from "../components/PageBuilder";

export default function Template({data, ...other}) {

  const { pageData } = data.ptsCcPage;

 return (
   <div>
     <PageBuilder pageData={pageData} />
     <details>
       <summary>JSON</summary>
       <pre>{ JSON.stringify(other, null, 2) }</pre>
     </details>
   </div>
 )
}

/**
 * This is where we select what bits from the raphQL object we want for this page...
 * @type {StaticQueryDocument}
 */
export const query = graphql`
    query PtsCcPage($id: String!) {
        ptsCcPage(pageData: { id: { eq: $id } }) {
            pageData {
                regions {
                    id
                    components {
                        id
                        type_id
                        data {
                            alt
                            previewData
                        }
                    }
                }
            }
        }
    }
`;
