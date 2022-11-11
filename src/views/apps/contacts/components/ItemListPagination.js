import React from 'react';
import { Pagination } from 'react-bootstrap';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const ItemListPagination = ({ tableInstance }) => {
  const {
    gotoPage,
    canPreviousPage,
    pageCount,
    previousPage,
    nextPage,
    canNextPage,
    state: { pageIndex },
  } = tableInstance;

  if (pageCount <= 1) {
    return <></>;
  }

  return (
    <Pagination className="w-100 d-flex justify-content-center">
      <Pagination.Prev className="shadow" disabled={!canPreviousPage} onClick={() => previousPage()}>
        <CsLineIcons icon="chevron-left" />
      </Pagination.Prev>
      {[...Array(pageCount)].map((x, i) => (
        <Pagination.Item key={`pagination${i}`} className="shadow" active={pageIndex === i} onClick={() => gotoPage(i)}>
          {i + 1}
        </Pagination.Item>
      ))}
      <Pagination.Next className="shadow" onClick={() => nextPage()} disabled={!canNextPage}>
        <CsLineIcons icon="chevron-right" />
      </Pagination.Next>
    </Pagination>
  );
};
export default ItemListPagination;
