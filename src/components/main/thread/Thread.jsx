import React from "react";

export const Thread = () => {
  return (
    <div className="thread">
      <strong>
        <span id="threadnumber">No.1:</span>
        PC勢FPS値高いから撃ち負けるんだがwww
      </strong>
      <p className="threadComment">
        <p id="username">
          No.1 名前: <b> ShinCode</b>
          <span className="threadInfo">
            2021/08/26(木)14:29
            <a href="#">[返信]</a>
          </span>
        </p>
        <span id="threadContent">
          PS4勢涙目。こっちが上手くても壁張かえられるから絶対に負けるくそげーすぎるwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
          PS4勢涙目。こっちが上手くても壁張かえられるから絶対に負けるくそげーすぎる
          PS4勢涙目。こっちが上手くても壁張かえられるから絶対に負けるくそげーすぎる
          PS4勢涙目。こっちが上手くても壁張かえられるから絶対に負けるくそげーすぎる
        </span>
      </p>
      {/* 返信用 */}
      <form>
        <table className="replyTable">
          <tbody>
            <tr>
              <th>おなまえ</th>
              <td>
                <input
                  type="text"
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
                <textarea name="comment" className="textArea"></textarea>
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
