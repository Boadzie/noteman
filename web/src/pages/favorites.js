import React, { useEffect } from 'react';

const Favorites = () => {
  useEffect(() => {
    document.title = 'Favorites - Noteman';
  });

  return (
    <div>
      <h1>Favorites page</h1>
    </div>
  );
};

export default Favorites;
