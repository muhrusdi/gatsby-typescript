import React from "react";
import Layout from "../layouts";
import { HeroTitle } from "./styled";

const Home: React.FC = () => (
  <Layout>
    <div
      css={`
        padding-top: 20px;
        text-align: center;
      `}
    >
      <HeroTitle>
        <span style={{ color: "#663399" }}>Gatsby</span> Starter
      </HeroTitle>
      <p>Starter project for Gatsby.js</p>
    </div>
    <div
      css={`
        max-width: 576px;
        margin: 0 auto;
        padding: 0 16px;
        ul {
          padding: 0;
          margin-top: 40px;
        }
      `}
    >
      <ul>
        <li>
          <span>👍🏼TypeScripts</span>
        </li>
      </ul>
    </div>
  </Layout>
);

export default Home;
