import React from 'react';
import Filter from '../../../../components/Filter/Filter';
import { NoteCard } from '../../../../components/NoteCard/NoteCard';
import { getSortedList } from '../../../../util/getSortedList';
import { useFilter } from '../../../../context/filter/filterContext';
export const NoteContainer = ({ notes, inArchive, inHome, inTrash }) => {
  const { filterState } = useFilter();
  console.log(inHome);
  const sortedList = getSortedList(filterState, notes);
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

      {notes.map(({ _id, title, text, backgroundColor, createdAt }) => {
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
      })}
    </section>
  );
};
