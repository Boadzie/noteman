import React, { useEffect } from 'react';

const MyNotes = () => {
  useEffect(() => {
    document.title = 'My note - Noteman';
  });

  return (
    <div>
      <h1>This mynotes page</h1>
    </div>
  );
};

export default MyNotes;
