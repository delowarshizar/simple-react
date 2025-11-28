
import { use } from "react"; // Use the 'use' hook directly
import Post from "./Post";

export default function Posts({ postData }) {
  const fetchPost = use(postData); 
  return (
    <div>
      <h1>All posts are here</h1>
      {fetchPost.map((post) => (
        <Post key={post.id} Post={post} ></Post>
      ))}
    </div>
  );
}
