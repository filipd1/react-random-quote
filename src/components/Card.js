import React from "react";

export const Card = ({ quote }) => {
  const startIndex =
    JSON.stringify(quote).indexOf('"author":"') + '"author":"'.length;
  const endIndex = JSON.stringify(quote).indexOf('"', startIndex);

  const startIndexCat =
    JSON.stringify(quote).indexOf('"category":"') + '"category":"'.length;
  const endIndexCat = JSON.stringify(quote).indexOf('"', startIndexCat);

  const dataQuote = JSON.stringify(quote).substring(11).split('"')[0];
  const dataAuthor = JSON.stringify(quote).substring(startIndex, endIndex);

  const dataCategory =
    "Category: " + JSON.stringify(quote).substring(startIndexCat, endIndexCat);

  return (
    <div className="quote-card">
      <p className="quote-text">{dataQuote}</p>
      <p className="quote-author">{dataAuthor}</p>
      <p className="quote-cat">{dataCategory}</p>
    </div>
  );
};
