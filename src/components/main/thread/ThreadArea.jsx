import React from "react";
import { Thread } from "./Thread";

export const ThreadArea = ({
  threadList,
  offset,
  perPage,
  setReplyList,
  replyList,
}) => {
  return (
    <div className="threadArea">
      {/* mapでTread数に応じて出力したい。１ページ最大7レスまで。超えたらページネーション */}
      {threadList.slice(offset, offset + perPage).map((thread) => {
        return (
          <Thread
            thread={thread} //ここは指定のthreadだけど
            key={thread.id} //こいつが初期化されるからthreadに変なとこに返信が入ってる？
            setReplyList={setReplyList}
            replyList={replyList}
          />
        );
      })}
    </div>
  );
};
