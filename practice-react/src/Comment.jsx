export default function Comment({ comment }) {
  const style = {
    border: "3px solid yellow",
    padding: "10px",
    borderRadius: "15px",
    margin: "10px 0px",
  };
  return (
    <div style={style}>
      <h3>Name: {comment.name}</h3>
      <h4>Email: {comment.email}</h4>
      <p>Body: {comment.body}</p>
    </div>
  );
}
