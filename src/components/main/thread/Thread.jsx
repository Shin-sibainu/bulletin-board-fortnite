import React, { useState } from "react";

export const Thread = ({ thread }) => {
  const [inputName, setInputName] = useState("");
  const [inputTextArea, setInputTextArea] = useState("");
  const [replyList, setReplyList] = useState([]); //これがページをまたぐと同じリストに入ってる

  const handleChange = (e) => {
    setInputName(e.target.value);
    console.log(thread.id);
  };

  const handleTextAreaChange = (e) => {
    setInputTextArea(e.target.value);
  };

  const formVailed = () => {
    if (inputName.length !== 0 && inputTextArea.length !== 0) {
      return true;
    } else {
      return false;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formVailed()) {
      /* データベースに入力したデータを送る */
      console.log("submit");
      /* スレ下に返信コメントを追加 */
      setReplyList([
        ...replyList,
        {
          name: inputName,
          replyComment: inputTextArea,
        },
      ]);
      console.log(replyList);
      setInputName("");
      setInputTextArea("");
    }
  };

  return (
    <div className="thread" key={thread.id}>
      <strong>
        <span id="threadnumber">No{thread.id}:</span>
        {thread.title}
      </strong>
      <div className="threadComment">
        <p id="username">
          No.1 名前: <b> {thread.name}</b>
          <span className="threadInfo">
            2021/08/26(木)14:29
            <a href="http://shincode.info">[返信]</a>
          </span>
        </p>
        <p id="threadContentArea">
          <span id="threadContent">{thread.comment}</span>
        </p>
        {/* ここから返信コメントを複数生成 */}
        {replyList.map((reply, index) => (
          <div key={index}>
            <p id="username">
              No.{index + 2} 名前: <b> {reply.name}</b>
              <span className="threadInfo">
                2021/08/26(木)14:29
                <a href="http://shincode.info">[返信]</a>
              </span>
            </p>
            <p id="threadContentArea">
              <span id="threadContent">{reply.replyComment}</span>
            </p>
          </div>
        ))}
      </div>
      {/* 返信用フォーム */}
      {/* method="POST"にしないと無理な気がする*/}
      <form onSubmit={handleSubmit}>
        <table className="replyTable">
          <tbody>
            <tr>
              <th>おなまえ</th>
              <td>
                <input
                  onChange={handleChange}
                  value={inputName}
                  type="name"
                  name="name"
                  maxLength="12"
                  className="nameInput"
                />
              </td>
            </tr>
            <tr>
              <th colSpan="2">
                このスレッドに書き込む
                <br />
                <textarea
                  onChange={handleTextAreaChange}
                  name="comment"
                  className="textArea"
                  value={inputTextArea}
                ></textarea>
                {/*   <input
                      type="submit"
                      value="投稿"
                      className="submitButton"
                    /> */}
                <button className="submitButton">投稿（仮）</button>
              </th>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};
