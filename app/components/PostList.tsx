"use client";


import { Post } from "@prisma/client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function PostList() {
  const [posts, setPosts] = useState<Array<Post>>([]);

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  
  return (
    <>
      {posts &&
        posts.map((post) => (
          <div key={post.id}>
            <Link href={`/post/${post.id}`}>{post.title}</Link>
          </div>
        ))}
    </>
  );
}

