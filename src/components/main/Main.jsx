import React from "react";
import { TopButtons } from "./button/TopButtons";
import { NewPostThread } from "./post/NewPostTread";
import { ThreadArea } from "./thread/ThreadArea";
import { useState } from "react";
import ReactPaginate from "react-paginate";
// import { Paginate } from "./paginate/Paginate";

const threadItemNumberPerPage = 7;

export const Main = () => {
  let testThreadList = [
    { name: "うんこ", title: "うんこだなｗ", comment: "これはテストだよ" },
    { name: "うんこ", title: "うんこだなｗ", comment: "これはテストだよ" },
    { name: "うんこ", title: "うんこだなｗ", comment: "これはテストだよ" },
    { name: "うんこ", title: "うんこだなｗ", comment: "これはテストだよ" },
    { name: "うんこ", title: "うんこだなｗ", comment: "これはテストだよ" },
    { name: "うんこ", title: "うんこだなｗ", comment: "これはテストだよ" },
    { name: "うんこ", title: "うんこだなｗ", comment: "これはテストだよ" },
    { name: "うんこ", title: "うんこだなｗ", comment: "これはテストだよ" },
  ];
  const [threadList, setThreadList] = useState(testThreadList);

  /* ここからpaginate関係 */
  const [pagenateInfoList, setPagenateInforList] = useState({
    offset: 0, //始まりの位置
    perPage: threadItemNumberPerPage, //１ページに表示するスレッド数
  });
  const handlePageChange = (data) => {
    console.log(data);
    let pageNumber = data["selected"]; //2を押したら１が返る。
    setPagenateInforList({ offset: pageNumber * threadItemNumberPerPage }); //1 * 7 = 7
  };
  /* ここまでpaginate関係 */

  return (
    <div>
      <TopButtons />
      <ThreadArea threadList={threadList} />
      {/* paginateゾーン */}
      <ReactPaginate
        pageCount={Math.ceil(testThreadList.length / threadItemNumberPerPage)} //総ページ数
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageChange}
        containerClassName="paginateContainer"
        pageClassName="pageItem"
        pageLinkClassName="pageLink"
        activeClassName={"active"}
        previousLabel={"<"}
        nextLabel={">"}
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
