import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import AddProfile from "./AddProfile";

const Profile = () => {
  const [profiles, setProfiles] = useState([]);
  const [showModel, setShowModel] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const uncut = onSnapshot(collection(db, "bookings"), (snapshot) => {
      let list = [];
      snapshot.docs.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });
      setProfiles(list);
    });
    return () => {
      uncut();
    };
  }, []);

  return (
    <>
      <div>
        <div className="flex flex-col">
          <button
            className=" place-self-end flex items-center gap-1 bg-gray-800 text-white py-2 px-4 mt-10 rounded-md hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-110"
            onClick={() => setShowModel(true)}
          >
            Add User
          </button>
          {showModel && <AddProfile onClose={() => setShowModel(false)} />}
        </div>
        <div>
          <div>
            {profiles &&
              profiles.map((item) => (
                <div key={item.id}>
                  <div>
                    <div>
                      <img src={item.profile} alt="" />
                      <div>{item.name}</div>
                    </div>
                    <div>
                      <button onClick={() => navigate(`/update/${item.id}`)}>
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
