import React from "react";
import { TopButtons } from "./button/TopButtons";
import { NewPostThread } from "./post/NewPostTread";
import { ThreadArea } from "./thread/ThreadArea";

export const Main = () => {
  return (
    <div>
      <TopButtons />
      <ThreadArea />
      <NewPostThread />
    </div>
  );
};
