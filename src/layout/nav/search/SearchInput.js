import React, { useMemo, useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import FuzzyHighlighter from 'react-fuzzy-highlighter';
import { useIntl } from 'react-intl';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getSearchItems } from 'routing/helper';
import { USE_MULTI_LANGUAGE } from 'config.js';
import routesAndMenuItems from 'routes.js';

const RESULT_LIMIT = 10;

const SearchInput = ({ show, setShow }) => {
  const history = useHistory();
  const searchInput = useRef(null);
  const [data, setData] = useState(null);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(null);
  const resultCount = React.useRef(0);
  const selectedItem = React.useRef({});
  const mySelectedIndexRef = React.useRef(selectedIndex);
  const setMySelectedIndex = (currenData) => {
    mySelectedIndexRef.current = currenData;
    setSelectedIndex(currenData);
  };
  const { isLogin, currentUser } = useSelector((state) => state.auth);

  const routes = useMemo(
    () =>
      getSearchItems({
        data: routesAndMenuItems,
        isLogin,
        userRole: currentUser.role,
      })(),
    [isLogin, currentUser]
  );
  const { formatMessage: f } = useIntl();

  const onResultClick = (path) => {
    if (path) {
      setShow(false);
      history.push(path);
    }
  };

  const onKeyDown = (e) => {
    if (![38, 40, 13].includes(e.keyCode)) {
      return;
    }
    const rCount = resultCount.current;
    const sIndex = mySelectedIndexRef.current;
    if (rCount <= 0) return;

    if (sIndex === null) {
      setMySelectedIndex(0);
      return;
    }

    if (e.keyCode === 38) {
      // up
      setMySelectedIndex(sIndex <= 0 ? rCount - 1 : sIndex - 1);
    } else if (e.keyCode === 40) {
      // down
      setMySelectedIndex(sIndex >= rCount - 1 ? 0 : sIndex + 1);
    } else {
      // enter
      const sCurrent = selectedItem.current;
      if (sCurrent) {
        onResultClick(sCurrent.path);
      }
    }
  };

  useEffect(() => {
    if (USE_MULTI_LANGUAGE) {
      const formatedRoutes = routes.map((d) => ({
        ...d,
        label: f({ id: d.label || 'menu.home' }),
      }));
      setData(formatedRoutes);
    } else {
      setData(routes);
    }
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        searchInput.current.focus();
      }, 0);
    } else {
      setQuery('');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  useEffect(() => {
    setMySelectedIndex(null);
    resultCount.current = 0;
    selectedItem.current = {};
    // eslint-disable-next-line
  }, [query]);

  if (data) {
    return (
      <>
        <input
          ref={searchInput}
          id="searchPagesInput"
          className="form-control form-control-xl borderless ps-0 pe-0 mb-1 auto-complete"
          type="text"
          autoComplete="off"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          placeholder="Search for Pages"
          autoFocus
        />
        {query.length > 0 && (
          <FuzzyHighlighter
            query={query}
            data={data}
            options={{
              shouldSort: true,
              includeMatches: true,
              threshold: 0.6,
              location: 0,
              distance: 100,
              maxPatternLength: 32,
              minMatchCharLength: 1,
              keys: ['label'],
            }}
          >
            {({ formattedResults, results }) => {
              resultCount.current = Math.min(formattedResults.length, RESULT_LIMIT);
              selectedItem.current = selectedIndex === null ? {} : results[selectedIndex].item;
              return results.length > 0 ? (
                <ul id="searchPagesResults" className="auto-complete-result">
                  {formattedResults.slice(0, RESULT_LIMIT).map((formattedResult, resultIndex) => (
                    <li
                      key={resultIndex}
                      onClick={() => onResultClick(formattedResult.item.path)}
                      className={classNames('auto-complete-result-item', {
                        autoComplete_selected: selectedIndex === resultIndex,
                      })}
                    >
                      {Array.isArray(formattedResult.formatted.label) ? (
                        <p className="mb-0">
                          {formattedResult.formatted.label.map((t, tIndex) => {
                            if (t.isHighlighted) {
                              return (
                                <span key={tIndex} className="autoComplete_highlighted">
                                  {t.text}
                                </span>
                              );
                            }
                            return <span key={tIndex}>{t.text}</span>;
                          })}
                        </p>
                      ) : (
                        <p className="mb-0">{formattedResult.formatted.label}</p>
                      )}
                      <p className="text-small text-muted mb-0 ">{formattedResult.item.path}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <ul id="searchPagesResults" className="auto-complete-result">
                  <li className="no_resulst">No Results</li>
                </ul>
              );
            }}
          </FuzzyHighlighter>
        )}
      </>
    );
  }
  return <></>;
};

export default SearchInput;
