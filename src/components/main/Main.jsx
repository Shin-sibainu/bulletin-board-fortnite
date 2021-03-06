import React from "react";
import { TopButtons } from "./button/TopButtons";
import { NewPostThread } from "./post/NewPostTread";
import { ThreadArea } from "./thread/ThreadArea";
import { useState } from "react";
import ReactPaginate from "react-paginate";
// import { Paginate } from "./paginate/Paginate";

//sliceの練習。
/* const list = ["0", "1", "2", "3"];
console.log(list);
list.slice(0, 2).map((list) => console.log(list)); */

const threadItemNumberPerPage = 3;

export const Main = () => {
  const [replyList, setReplyList] = useState([]);
  let testThreadList = [
    {
      id: 1,
      name: "うんこ1",
      title: "うんこだな1ｗ",
      comment: "これはテストだよ",
    },
    {
      id: 2,
      name: "うんこ2",
      title: "うんこだな2ｗ",
      comment: "これはテストだよ",
    },
    {
      id: 3,
      name: "うんこ3",
      title: "うんこだな3ｗ",
      comment: "これはテストだよ",
    },
    {
      id: 4,
      name: "うんこ4",
      title: "うんこだな4ｗ",
      comment: "これはテストだよ",
    },
  ];
  const [threadList, setThreadList] = useState(testThreadList);

  /* ここからpaginate関係 */
  const [pagenateInfoList, setPagenateInforList] = useState({
    offset: 0, //始まりの位置
    perPage: threadItemNumberPerPage, //１ページに表示するスレッド数
  });

  //offset変えてるだけ。
  const handlePageChange = (data) => {
    let pageNumber = data["selected"]; //2を押したら１が返る。
    setPagenateInforList({
      offset: pageNumber * threadItemNumberPerPage, //ここが３になるはず。
      perPage: threadItemNumberPerPage,
    }); //始まりの位置が変更されるだけ
    //pageのトップに移動する。
  };
  /* ここまでpaginate関係 */

  return (
    <div>
      <TopButtons />
      <ThreadArea
        threadList={threadList}
        offset={pagenateInfoList.offset}
        perPage={pagenateInfoList.perPage}
        setReplyList={setReplyList}
        replyList={replyList}
      />
      {/* paginateゾーン */}
      <ReactPaginate
        pageCount={Math.ceil(testThreadList.length / pagenateInfoList.perPage)} //総ページ数
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageChange}
        containerClassName="paginateContainer"
        pageClassName="pageItem"
        pageLinkClassName="pageLink"
        activeClassName={"active"}
        previousLabel={"previous"}
        nextLabel={"next"}
        previousClassName="pageItem" // '<'の親要素(li)のクラス名
        nextClassName="pageItem"
        disabledClassName="disabled" //先頭or末尾に行ったときにそれ以上戻れ(進め)なくするためのクラス
        breakLabel={"..."}
        breakClassName="pageItem" // 上記の「…」のクラス名
        breakLinkClassName="pageIink" // 「…」の中のリンクにつけるクラス
      />
      {/* pagenateゾーン */}
      <NewPostThread threadList={threadList} setThreadList={setThreadList} />
    </div>
  );
};
