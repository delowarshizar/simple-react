import { use } from "react";
import User from "./User";
export default function Users({ userData }) {
  const Data = use(userData);
  return (
    <div>
      <h1>All Users Data</h1>
      {Data.map((user) => (
        <User user={user}></User>
      ))}
    </div>
  );
}
