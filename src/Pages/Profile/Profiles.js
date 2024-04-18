import React from "react";
import { useUserAuth } from "../../context/UserAuthContext";

const Profiles = () => {
  const { user } = useUserAuth();
  console.log(user);

  return (
    <div>
      <div className="p-4 box mt-3 text-center">
        hello
        <br />
        {user && user.email}
        {user && user.password}
      </div>
    </div>
  );
};

export default Profiles;
