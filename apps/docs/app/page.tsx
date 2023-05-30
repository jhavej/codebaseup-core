"use client";

import { Button } from "ui";

const Page = () => (
  <Button
    className="m-4"
    onClick={() => {
      alert("Documentation app");
    }}
  >
    Docs
  </Button>
);

export default Page;
