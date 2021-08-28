import React, { useState } from "react";
import ReactPaginate from "react-paginate";

const perPage = 7;

export const Paginate = () => {
  const [pagenateInfoList, setPagenateInforList] = useState({
    offset: 0,
    perPage: perPage,
  });
  const handlePageChange = (data) => {
    console.log(data);
    let pageNumber = data["selected"]; //2を押したら１が返る。
    setPagenateInforList({ offset: pageNumber * perPage }); //1 * 7 = 7
  };
  return (
    <div>
      <ReactPaginate
        pageCount={10} //総ページ数
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
    </div>
  );
};
