import React, { lazy } from "react";
//import Users from "users/Users";
import Loading from "../components/Loading";
const Users = lazy(() => import("users/Users"));

function UserList() {
  return (
    <React.Suspense fallback={<Loading />}>
      <Users></Users>
    </React.Suspense>
  );
}
export default UserList;
