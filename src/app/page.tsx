import { Content } from "@/components/content/content";

import { Header } from "@/components/header/header";

const Page = () => (
  <main className="mx-auto flex min-h-svh max-w-xl flex-col px-4 py-4 md:py-24">
    <Header />
    <Content />
  </main>
);

export default Page;
