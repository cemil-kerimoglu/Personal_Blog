import React, { useState, useEffect } from "react";
import moment from "moment";
import Link from "next/link";
import { getRecentPosts, getSimilarPosts } from "../services";

const PostWidget = ({ slug, categories }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(slug, categories).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);

  console.log(relatedPosts);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {slug ? "Related Posts" : "Recent Posts"}
      </h3>
      {relatedPosts
        .slice(0)
        .reverse()
        .map((post) => (
          <div key={post.title} className="flex items-center w-full mb-4">
            <div className="w-16 flex-none">
              <img
                src={post.featuredImage.url}
                alt={post.title}
                className="h-12 w-12 align-middle rounded-full"
              />
            </div>
            <div className="flex-grow ml-4">
              <p className="text-gray-500 font-xs">
                {moment(post.createdAt).format("MMM DD, YYYY")}
              </p>
              <Link
                href={`/post/${post.slug}`}
                key={post.title}
                className="text-md"
              >
                {post.title}
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PostWidget;
