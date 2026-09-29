import { Head } from "$fresh/runtime.ts";
import Demo from "../islands/Demo.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Color Visualiser</title>
        <link rel="stylesheet" href="/style.css" />
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <Demo/>
      </div>
    </>
  );
}
