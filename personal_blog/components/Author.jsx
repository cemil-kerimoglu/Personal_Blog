import React from "react";

const Author = ({ author }) => {
  return (
    <div className="text-center mt-20 mb-8 p-12 rounded-lg bg-black bg-opacity-20">
      <div className="left-0 right-2 top-2">
        <img
          alt={author.name}
          className="align-middle rounded-full h-28 "
          src={author.photo.url}
        />
      </div>
    </div>
  );
};

export default Author;
