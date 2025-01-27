/* eslint-disable no-unused-vars */
import React from "react";
/* eslint-enable no-unused-vars */
import { assets } from "../assets/assets";
import { useState } from "react";
import { useSelector } from "react-redux"; // Import useSelector to access Redux store

const MyProfile = () => {
  const [isEdit, setIsEdit] = useState(false);

  // Access user data from Redux store using useSelector
  const userFromStore = useSelector((state) => state.user.user); // Adjust based on your slice or state structure

  // Set initial state based on Redux store data
  const [userData, setUserData] = useState({
    name: userFromStore?.name || "Guest", // Default if not available in store
    image: assets.man_profile,
    email: userFromStore?.email || "richardjames@gmail.com", // Default if not available in store
    phone: userFromStore?.phone || "+1  123 456 7890", // Default if not available in store
    address: userFromStore?.address || {
      line1: "57th Cross, Richmond",
      line2: "Circle, Church Road, London",
    },
    gender: userFromStore?.gender || "Male", // Default if not available in store
    dob: userFromStore?.dob || "2000-01-20", // Default if not available in store
  });

  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm text-orange-700 ">
      <alert className="text-2xl font-semibold text-primary">My Profile</alert>
      <img className="w-36 rounded" src={userData.image} alt="" />

      {isEdit ? (
        <input
          className="bg-gray-200 text-3xl font-medium max-w-60 mt-4"
          type="text"
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
          value={userData.name}
        />
      ) : (
        <p className="font-medium text-3xl text-orange-700 mt-4">
          {userData.name}
        </p>
      )}

      <hr className="bg-orange-700  h-[1px] border-none" />
      <div>
        <p className="text-orange-700  underline mt-3">CONTACT INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 ">
          <p className="font-medium text-orange-700 ">Email id:</p>
          <p className="text-blue-700">{userData.email}</p>
          <p className="font-medium text-orange-700 ">Phone:</p>
          {isEdit ? (
            <input
              className="bg-gray-200 max-w-52 text-blue-700"
              type="text"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
              value={userData.phone}
            />
          ) : (
            <p className="text-blue-700">{userData.phone}</p>
          )}
          <p className="font-medium text-orange-700 ">Address:</p>
          {isEdit ? (
            <p>
              <input
                className="text-blue-700 bg-gray-200"
                type="text"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
                value={userData.address.line1}
              />
              <br />
              <input
                className=" text-blue-700 bg-gray-200"
                type="text"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
                value={userData.address.line2}
              />
            </p>
          ) : (
            <p className="text-blue-700">
              {userData.address.line1} <br /> {userData.address.line2}
            </p>
          )}
        </div>
      </div>
      <div>
        <p className="text-primary underline mt-3">BASIC INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-orange-700 ">
          <p className="font-medium text-orange-700 ">Gender:</p>
          {isEdit ? (
            <select
              className="max-w-20  text-blue-700 bg-gray-200"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={userData.gender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className="text-blue-700">{userData.gender}</p>
          )}
          <p className="font-medium text-orange-700 ">Birthday:</p>
          {isEdit ? (
            <input
              className="max-w-28 text-blue-700 bg-gray-200"
              type="date"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
              value={userData.dob}
            />
          ) : (
            <p className="text-blue-700">{userData.dob}</p>
          )}
        </div>
      </div>
      <div className="mt-10">
        {isEdit ? (
          <button
            onClick={() => setIsEdit(false)}
            className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-blue-700 transition-all"
          >
            Save information
          </button>
        ) : (
          <button
            onClick={() => setIsEdit(true)}
            className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-blue-700 transition-all"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
