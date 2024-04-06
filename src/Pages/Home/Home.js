import React from "react";
import { useUserAuth } from "../../context/UserAuthContext";

const Home = () => {
  const { user, logOut } = useUserAuth();
  console.log(user);

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <div className="p-4 box mt-3 text-center">
        hello
        <br />
        {user && user.email}
      </div>
      <div className="grid gap-2">
        <button onClick={handleLogout}> log out</button>
      </div>
    </div>
  );
};

export default Home;
