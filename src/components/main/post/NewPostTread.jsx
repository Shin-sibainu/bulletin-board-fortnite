import React, { useState } from "react";

export const NewPostThread = ({ threadList, setThreadList }) => {
  const [inputName, setInputName] = useState("");
  const [inputTitle, setInputTitle] = useState("");
  const [inputComment, setInputComment] = useState("");

  const newThreadFormVailed = () => {
    if (
      inputName.length !== 0 &&
      inputTitle.length !== 0 &&
      inputComment.length !== 0
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newThreadFormVailed()) {
      console.log("new thread");
      /* 新規スレッド立ち上げ */
      setThreadList([
        ...threadList,
        { name: inputName, title: inputTitle, comment: inputComment },
      ]);
      setInputName("");
      setInputTitle("");
      setInputComment("");
    }
  };

  const handleNameChange = (e) => {
    setInputName(e.target.value);
  };

  const handleTitleChange = (e) => {
    setInputTitle(e.target.value);
  };

  const handleCommentChange = (e) => {
    setInputComment(e.target.value);
  };

  return (
    <div>
      {/* <form method="POST"> */}
      <form onSubmit={handleSubmit}>
        <div className="postArea">
          <div className="postBox">
            <span>新規スレッド立ち上げ</span>
            <table className="postTable">
              <tbody>
                <tr>
                  <th>おなまえ</th>
                  <td>
                    <input
                      onChange={handleNameChange}
                      type="text"
                      name="name"
                      maxLength="12"
                      className="nameInput"
                      value={inputName}
                    />
                  </td>
                </tr>
                <tr>
                  <th>タイトル</th>
                  <td>
                    <input
                      onChange={handleTitleChange}
                      type="text"
                      name="sub"
                      maxLength="12"
                      className="titleInput"
                      value={inputTitle}
                    />
                  </td>
                </tr>
                <tr>
                  <th colSpan="2">
                    コメント
                    <br />
                    <textarea
                      name="comment"
                      className="textArea"
                      onChange={handleCommentChange}
                      value={inputComment}
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
          </div>
        </div>
      </form>
    </div>
  );
};
