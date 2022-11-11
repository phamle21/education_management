import React from 'react';
import { Col, Row } from 'react-bootstrap';
import classNames from 'classnames';
import { useTable, useGlobalFilter, useSortBy, useAsyncDebounce } from 'react-table';
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

const Table = ({ tableInstance, className }) => {
  const { getTableProps, headerGroups, rows, getTableBodyProps, prepareRow } = tableInstance;
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
          {rows.map((row, i) => {
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

const BoxedVariationsScrollbar = () => {
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
      { name: 'Qistibi', sales: 998, stock: 24, category: 'Whole Wheat' },
      { name: 'Proja', sales: 981, stock: 17, category: 'Sourdough' },
      { name: 'Rice Bread', sales: 976, stock: 26, category: 'Multigrain' },
      { name: 'Röggelchen', sales: 961, stock: 106, category: 'Sourdough' },
      { name: 'Scone', sales: 948, stock: 37, category: 'Sourdough' },
    ];
  }, []);

  const tableInstance = useTable({ columns, data, initialState: { sortBy: [{ id: 'name', desc: true }] } }, useGlobalFilter, useSortBy);

  return (
    <Row>
      <Col sm="12" md="5" lg="3" xxl="2" className="mb-1">
        <div className="d-inline-block float-md-start me-1 search-input-container w-100 border border-separator bg-foreground search-sm">
          <ControlsSearch tableInstance={tableInstance} />
        </div>
      </Col>

      <Col xs="12">
        <Table className="react-table nowrap" tableInstance={tableInstance} />
      </Col>
    </Row>
  );
};

export default BoxedVariationsScrollbar;
