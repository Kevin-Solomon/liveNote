import React from 'react';
import Filter from '../../../../components/Filter/Filter';
import { NoteCard } from '../../../../components/NoteCard/NoteCard';
import { getSortedList } from '../../../../util/getSortedList';
import { useFilter } from '../../../../context/filter/filterContext';
export const NoteContainer = ({ notes, inArchive }) => {
  const { filterState } = useFilter();
  const sortedList = getSortedList(filterState, notes);
  console.log(sortedList);
  return (
    <section className="note-wrapper">
      <NoteCard
        title="Title"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
          perferendis!"
      />
      <Filter />
      {notes.map(({ _id, title, value, createdAt }) => {
        return (
          <NoteCard
            _id={_id}
            title={title}
            content={value}
            createdAt={createdAt}
            inArchive={inArchive}
          />
        );
      })}
    </section>
  );
};
