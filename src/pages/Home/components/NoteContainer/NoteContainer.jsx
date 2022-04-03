import React from 'react';
import Filter from '../../../../components/Filter/Filter';
import { NoteCard } from '../../../../components/NoteCard/NoteCard';
import { getSortedList } from '../../../../util/getSortedList';
import { useFilter } from '../../../../context/filter/filterContext';
import { getCategoryList } from '../../../../util';

export const NoteContainer = ({
  notes,
  inArchive,
  inHome,
  inTrash,
  inLabel,
}) => {
  const { filterState, filterDispatch } = useFilter();

  const sortedList = getSortedList(filterState, notes);
  console.log(sortedList);
  const categorizedList = getCategoryList(filterState, sortedList);
  console.log(categorizedList);
  return (
    <section className="note-wrapper">
      <div className="note-filter">
        <form className="form">
          <input
            type="text"
            className="form-input small-text"
            placeholder="Search Notes"
          />
        </form>

        <Filter />
      </div>

      {inLabel ? (
        <div className="category-filter">
          <span
            className="category-button"
            onClick={() => filterDispatch({ type: 'TAGS', payload: null })}
          >
            all
          </span>
          <span
            className="category-button"
            onClick={() =>
              filterDispatch({ type: 'TAGS', payload: 'productivity' })
            }
          >
            productivity
          </span>
          <span
            className="category-button"
            onClick={() => filterDispatch({ type: 'TAGS', payload: 'home' })}
          >
            home
          </span>
          <span
            className="category-button"
            onClick={() => filterDispatch({ type: 'TAGS', payload: 'work' })}
          >
            work
          </span>
        </div>
      ) : null}
      {inLabel
        ? categorizedList.map(
            ({ _id, title, text, backgroundColor, createdAt }) => {
              return (
                <NoteCard
                  _id={_id}
                  title={title}
                  content={text}
                  backgroundColor={backgroundColor}
                  createdAt={createdAt}
                  inArchive={inArchive}
                  inHome={inHome}
                  inTrash={inTrash}
                />
              );
            }
          )
        : null}
      {inHome
        ? sortedList.map(({ _id, title, text, backgroundColor, createdAt }) => {
            return (
              <NoteCard
                _id={_id}
                title={title}
                content={text}
                backgroundColor={backgroundColor}
                createdAt={createdAt}
                inArchive={inArchive}
                inHome={inHome}
                inTrash={inTrash}
              />
            );
          })
        : null}
    </section>
  );
};
