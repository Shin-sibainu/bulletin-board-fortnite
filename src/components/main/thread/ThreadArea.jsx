import React from "react";
import { Thread } from "./Thread";

export const ThreadArea = ({ threadList, offset, perPage, setReplyList, replyList }) => {
  return (
    <div className="threadArea">
      {/* mapでTread数に応じて出力したい。１ページ最大7レスまで。超えたらページネーション */}
      {threadList.slice(offset, offset + perPage).map((thread, index) => {
        return (
          <Thread
            thread={thread}
            index={index}
            key={index}
            setReplyList={setReplyList}
            replyList={replyList}
          />
        );
      })}
    </div>
  );
};
