import React from 'react';
import { ButtonGroup, Col, Dropdown, Pagination, Row } from 'react-bootstrap';
import classNames from 'classnames';
import { useTable, useGlobalFilter, useSortBy, useAsyncDebounce, usePagination } from 'react-table';
import CsLineIcons from 'cs-line-icons/CsLineIcons';

const ControlsSearch = ({ tableInstance }) => {
  const {
    setGlobalFilter,
    state: { globalFilter },
  } = tableInstance;

  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((val) => {
    setGlobalFilter(val || undefined);
  }, 200);

  return (
    <>
      <input
        className="form-control form-control-sm datatable-search"
        value={value || ''}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder="Search"
      />
      {value && value.length > 0 ? (
        <span
          className="search-delete-icon"
          onClick={() => {
            setValue('');
            onChange('');
          }}
        >
          <CsLineIcons icon="close" />
        </span>
      ) : (
        <span className="search-magnifier-icon pe-none">
          <CsLineIcons icon="search" />
        </span>
      )}
    </>
  );
};

const ControlsPageSize = ({ tableInstance }) => {
  const {
    setPageSize,
    gotoPage,
    state: { pageSize },
  } = tableInstance;
  const options = [5, 10, 20];

  const onSelectPageSize = (size) => {
    setPageSize(size);
    gotoPage(0);
  };
  return (
    <Dropdown size="sm" as={ButtonGroup} className="d-inline-block" align="end">
      <Dropdown.Toggle variant="outline-muted">{pageSize} Items</Dropdown.Toggle>
      <Dropdown.Menu className="dropdown-menu-sm dropdown-menu-end">
        {options.map((pSize) => (
          <Dropdown.Item key={`pageSize.${pSize}`} active={pSize === pageSize} onSelect={() => onSelectPageSize(pSize)}>
            {pSize} Items
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

const Table = ({ tableInstance, className }) => {
  const { getTableProps, headerGroups, page, getTableBodyProps, prepareRow } = tableInstance;
  return (
    <>
      <table className={className} {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, headerIndex) => (
            <tr key={`header${headerIndex}`} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, index) => {
                return (
                  <th
                    key={`th.${index}`}
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    className={classNames(column.headerClassName, {
                      sorting_desc: column.isSortedDesc,
                      sorting_asc: column.isSorted && !column.isSortedDesc,
                      sorting: column.sortable,
                    })}
                  >
                    {column.render('Header')}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr key={`tr.${i}`} {...row.getRowProps()}>
                {row.cells.map((cell, cellIndex) => (
                  <td key={`td.${cellIndex}`} {...cell.getCellProps()} className={cell.column.cellClassName}>
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

const TablePagination = ({ tableInstance }) => {
  const {
    gotoPage,
    canPreviousPage,
    previousPage,
    pageCount,
    nextPage,
    canNextPage,
    state: { pageIndex },
  } = tableInstance;

  if (pageCount === 1) {
    return <></>;
  }

  return (
    <Pagination size="sm" className="justify-content-center mb-0 mt-3">
      <Pagination.First onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
        <CsLineIcons icon="arrow-double-left" />
      </Pagination.First>
      <Pagination.Prev disabled={!canPreviousPage} onClick={() => previousPage()}>
        <CsLineIcons icon="chevron-left" />
      </Pagination.Prev>
      {[...Array(pageCount)].map((x, i) => (
        <Pagination.Item key={`pagination${i}`} active={pageIndex === i} onClick={() => gotoPage(i)}>
          {i + 1}
        </Pagination.Item>
      ))}
      <Pagination.Next onClick={() => nextPage()} disabled={!canNextPage}>
        <CsLineIcons icon="chevron-right" />
      </Pagination.Next>
      <Pagination.Last onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
        <CsLineIcons icon="arrow-double-right" />
      </Pagination.Last>
    </Pagination>
  );
};

const BoxedVariationsPagination = () => {
  const columns = React.useMemo(() => {
    return [
      {
        Header: 'Name',
        accessor: 'name',
        sortable: true,
        headerClassName: 'text-muted text-small text-uppercase w-30',
        Cell: ({ cell }) => {
          return (
            <a
              className="list-item-heading body"
              href="#!"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              {cell.value}
            </a>
          );
        },
      },
      { Header: 'Sales', accessor: 'sales', sortable: true, headerClassName: 'text-muted text-small text-uppercase w-10', cellClassName: 'text-alternate' },
      { Header: 'Stock', accessor: 'stock', sortable: true, headerClassName: 'text-muted text-small text-uppercase w-10', cellClassName: 'text-alternate' },
      {
        Header: 'Category',
        accessor: 'category',
        sortable: true,
        headerClassName: 'text-muted text-small text-uppercase w-20',
        cellClassName: 'text-alternate',
      },
    ];
  }, []);
  const data = React.useMemo(() => {
    return [
      { name: 'Pita', sales: 1452, stock: 62, category: 'Whole Wheat' },
      { name: 'Pane Ticinese', sales: 1414, stock: 85, category: 'Multigrain' },
      { name: 'Pandoro', sales: 1401, stock: 21, category: 'Whole Wheat' },
      { name: 'Naan', sales: 1387, stock: 114, category: 'Multigrain' },
      { name: 'Michetta', sales: 1356, stock: 27, category: 'Multigrain' },
      { name: 'Damper', sales: 1323, stock: 57, category: 'Multigrain' },
      { name: 'Cozonac', sales: 1301, stock: 11, category: 'Sourdough' },
      { name: 'Spelt Bread', sales: 1287, stock: 94, category: 'Multigrain' },
      { name: 'Zopf', sales: 1261, stock: 37, category: 'Multigrain' },
      { name: 'Arepa', sales: 1245, stock: 65, category: 'Whole Wheat' },
      { name: 'Barmbrack', sales: 1218, stock: 19, category: 'Whole Wheat' },
      { name: 'Bublik', sales: 1200, stock: 45, category: 'Multigrain' },
      { name: 'Chapati', sales: 1192, stock: 22, category: 'Sourdough' },
      { name: 'Eggette', sales: 1176, stock: 48, category: 'Multigrain' },
      { name: 'Hallulla', sales: 1154, stock: 13, category: 'Multigrain' },
      { name: 'Kifli', sales: 1150, stock: 4, category: 'Whole Wheat' },
      { name: 'Lángos', sales: 1108, stock: 87, category: 'Whole Wheat' },
      { name: 'Lefse', sales: 1068, stock: 43, category: 'Whole Wheat' },
      { name: 'Matzo', sales: 1050, stock: 41, category: 'Sourdough' },
      { name: 'Mollete', sales: 1024, stock: 12, category: 'Sourdough' },
    ];
  }, []);

  const tableInstance = useTable(
    { columns, data, initialState: { pageIndex: 0, sortBy: [{ id: 'name', desc: true }] } },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return (
    <Row>
      <Col sm="12" md="5" lg="3" xxl="2" className="mb-1">
        <div className="d-inline-block float-md-start me-1 search-input-container w-100 border border-separator bg-foreground search-sm">
          <ControlsSearch tableInstance={tableInstance} />
        </div>
      </Col>
      <Col sm="12" md="7" lg="9" xxl="10" className="text-end mb-1">
        <div className="d-inline-block">
          <ControlsPageSize tableInstance={tableInstance} />
        </div>
      </Col>

      <Col xs="12">
        <Table className="react-table nowrap" tableInstance={tableInstance} />
      </Col>
      <Col xs="12">
        <TablePagination tableInstance={tableInstance} />
      </Col>
    </Row>
  );
};

export default BoxedVariationsPagination;
