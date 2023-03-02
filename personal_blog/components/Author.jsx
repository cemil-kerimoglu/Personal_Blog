import React from "react";
import Image from "next/image";

const Author = ({ author }) => {
  return (
    <div className="flex flex-col items-center text-center mt-20 mb-8 p-12 rounded-lg bg-black bg-opacity-20">
      <Image
        alt={author.name}
        unoptimized
        width={110}
        height={32}
        className="align-middle rounded-full h-28"
        src={author.photo.url}
      />
      <h3 className="text-white my-4 text-xl font-bold">{author.name}</h3>
      <p className="text-white text-lg">{author.bio}</p>
    </div>
  );
};

export default Author;
