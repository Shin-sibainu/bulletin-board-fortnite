import React from "react";
import { TopButtons } from "./button/TopButtons";
import { PostArea } from "./post/PostArea";
import { ThreadArea } from "./ThreadArea";

export const Main = () => {
  return (
    <div>
      <TopButtons />
      <PostArea />
      <ThreadArea />
    </div>
  );
};
