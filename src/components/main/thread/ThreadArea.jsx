import React from "react";
import { Thread } from "./Thread";

export const ThreadArea = ({ threadList }) => {
  return (
    <div className="threadArea">
      {/* mapでTread数に応じて出力したい。１ページ最大１０レスまで。超えたらページネーション */}
      {threadList.map((thread, index) => (
        <Thread thread={thread} index={index} key={index} />
      ))}
    </div>
  );
};
