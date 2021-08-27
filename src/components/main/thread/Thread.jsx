import React, { useState } from "react";

export const Thread = () => {
  const [inputName, setInputName] = useState("");
  const [inputTextArea, setInputTextArea] = useState("");
  const [replyList, setReplyList] = useState([]);

  const handleChange = (e) => {
    setInputName(e.target.value);
  };

  const handleTextAreaChange = (e) => {
    setInputTextArea(e.target.value);
  };

  const formVailed = () => {
    /* 名前とテキストエリアに文字が１文字であればtrueを返す。
    それ以外はfalseとエラー文を配列に格納する。 */
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
        { name: inputName, replyComment: inputTextArea },
      ]);
      setInputName("");
      setInputTextArea("");
    }
  };

  return (
    <div className="thread">
      <strong>
        <span id="threadnumber">No.1:</span>
        PC勢FPS値高いから撃ち負けるんだがwww
      </strong>
      <div className="threadComment">
        <p id="username">
          No.1 名前: <b> ShinCode</b>
          <span className="threadInfo">
            2021/08/26(木)14:29
            <a href="http://shincode.info">[返信]</a>
          </span>
        </p>
        <p id="threadContentArea">
          {/* ここから返信コメントを複数生成 */}
          <span id="threadContent">
            PS4勢涙目。こっちが上手くても壁張かえられるから絶対に負けるくそげーすぎるwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
            PS4勢涙目。こっちが上手くても壁張かえられるから絶対に負けるくそげーすぎる
            PS4勢涙目。こっちが上手くても壁張かえられるから絶対に負けるくそげーすぎる
            PS4勢涙目。こっちが上手くても壁張かえられるから絶対に負けるくそげーすぎる
          </span>
        </p>
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
              {/* ここから返信コメントを複数生成 */}
              <span id="threadContent">{reply.replyComment}</span>
            </p>
          </div>
        ))}
      </div>
      {/* 返信用 */}
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
