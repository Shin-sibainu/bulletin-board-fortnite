import React from "react";
// import { PostInput } from "./PostInput";

export const PostArea = () => {
  return (
    <div>
      {/* <form method="POST"> */}
      <form>
        <div className="postArea">
          <div className="postBox">
            <table className="postTable">
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
                  <th>タイトル</th>
                  <td>
                    <input
                      type="text"
                      name="sub"
                      maxLength="12"
                      className="titleInput"
                    />
                    {/*   <input
                      type="submit"
                      value="投稿"
                      className="submitButton"
                    /> */}
                    <button className="submitButton">投稿（仮）</button>
                  </td>
                </tr>
                <tr>
                  <th colSpan="2">
                    コメント
                    <br />
                    <textarea name="comment" className="textArea"></textarea>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </form>
    </div>
  );
};
