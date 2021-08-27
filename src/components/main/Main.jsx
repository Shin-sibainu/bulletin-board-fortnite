import React from "react";
import { TopButtons } from "./button/TopButtons";
import { NewPostThread } from "./post/NewPostTread";
import { ThreadArea } from "./thread/ThreadArea";
import { useState } from "react";

export const Main = () => {
  let testThreadList = [
    { name: "うんこ", title: "うんこだなｗ", comment: "これはテストだよ" },
    { name: "うんこ", title: "うんこだなｗ", comment: "これはテストだよ" },
    { name: "うんこ", title: "うんこだなｗ", comment: "これはテストだよ" },
    { name: "うんこ", title: "うんこだなｗ", comment: "これはテストだよ" },
    { name: "うんこ", title: "うんこだなｗ", comment: "これはテストだよ" },
    { name: "うんこ", title: "うんこだなｗ", comment: "これはテストだよ" },
    { name: "うんこ", title: "うんこだなｗ", comment: "これはテストだよ" },
  ];
  const [threadList, setThreadList] = useState(testThreadList);
  return (
    <div>
      <TopButtons />
      <ThreadArea threadList={threadList} />
      <NewPostThread threadList={threadList} setThreadList={setThreadList} />
    </div>
  );
};
