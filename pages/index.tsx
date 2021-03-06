import Head from "next/head";

import { Page } from "../components/blocks";
import { AboutMe, Projects, Toolbox } from "../components/pages";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Susan Zhang</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Page hasNav backgroundColor={"primary"}>
        <AboutMe />
      </Page>
      <Page backgroundColor={"gradient"}>
        <Projects />
      </Page>
      <Page backgroundColor={"primary"}>
        <Toolbox />
      </Page>
    </div>
  );
}
