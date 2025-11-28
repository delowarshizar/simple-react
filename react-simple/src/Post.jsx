export default function Post({ Post }) {
  return (
    <div>
      <h3>Post title: {Post.title}</h3>
      <p>Post body: {Post.body}</p>
    </div>
  );
}
