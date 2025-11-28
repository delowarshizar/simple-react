export default function Post({ Post }) {
  const stylePost = {
    border: "2px solid red",
    margin: "10px 0px",
  };
  return (
    <div style={stylePost}>
      <h3>Post title: {Post.title}</h3>
      <p>Post body: {Post.body}</p>
    </div>
  );
}
