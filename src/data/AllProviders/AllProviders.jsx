import React from "react";
import { UserProvider } from "./UsersContext";
import { WorkersProvider } from "./WorkersContext";

export default function AllProviders({ Children })  {
  return (
    <UserProvider>
      <WorkersProvider>
        {Children}
      </WorkersProvider>
    </UserProvider>
  );
}
