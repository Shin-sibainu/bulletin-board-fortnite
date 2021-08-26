import React from "react";
import { Thread } from "./Thread";

export const ThreadArea = () => {
  return (
    <div className="threadArea">
      {/* mapでTread数に応じて出力したい。１ページ最大１０レスまで。超えたらページネーション */}
      <Thread />
      <Thread />
    </div>
  );
};
