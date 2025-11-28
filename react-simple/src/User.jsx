export default function User({ user }) {
  console.log(user);
  const styleUser = {
    border: "2px solid yellow",
    margin: "10px 0px",
  };
  return (
    <div style={styleUser}>
      <h3>User Name: {user.name}</h3>
      <h3>User Email: {user.email}</h3>
    </div>
  );
}
