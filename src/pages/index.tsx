import * as React from "react"
import {graphql, Link, useStaticQuery} from "gatsby";
import {Layout} from "../components/Layout";

const IndexPage = () => {

  const { allSitePage: { nodes: pages } } = useStaticQuery(graphql`
      {
          allSitePage {
              nodes {
                  path
                  component
              }
          }
      }
  `);

  return (
    <Layout>
      <main>
        <h1 style={{ paddingTop: '2rem', marginTop: 0 }}>Lets make CC work with Gatsby...</h1>
        <p>This page is a static template for this demo but this page too could use CC data</p>
        <p>Pages that use the <code>PageTemplate.jsx</code> are auto-generated from the API.</p>
        <h2>Pages:</h2>
        <ul>
          { pages.map((page: any) => (
            <li key={page.path}>
              <Link to={page.path}>
                { page.path === "/" ? 'Home' : page.path.slice(1) }
              </Link>
              <span>&nbsp;</span>
              <code>({page.component.split('/pts-sfr-gatsby-demo/').pop()})</code>
            </li>
          )) }
        </ul>
      </main>
    </Layout>
  )
}

export default IndexPage
