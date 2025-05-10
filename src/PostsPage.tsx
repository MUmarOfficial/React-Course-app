import { useEffect, useState } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const PostsPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    // Fetch posts when the component mounts
    getPosts();
  }, []);

  return (
    <section className="flex flex-col justify-center items-center gap-6">
      <div className="text-4xl">Posts Page</div>

      {posts.map((postItem) => (
        <div
          key={postItem.id}
          className="flex flex-col justify-center items-center gap-4 w-6xl px-24 py-8 border rounded-3xl text-white shadow-2xl shadow-black/50 bg-black/50 backdrop-blur-md"
        >
          <h1 className="text-2xl font-semibold">{postItem.title}</h1>
          <p>{postItem.body}</p>
        </div>
      ))}
    </section>
  );
};

export default PostsPage;
