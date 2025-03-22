import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserInfo } from './userSlice';

function UserProfile() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    dispatch(setUserInfo({ ...user, [id]: value }));
  };

  return (
    <div className="user-profile p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">User Profile</h2>
      <label htmlFor="username" className="block mb-2">Username</label>
      <input
        type="text"
        id="username"
        value={user.username}
        onChange={handleInputChange}
        className="border p-2 rounded w-full mb-4"
      />
      <label htmlFor="name" className="block mb-2">Name</label>
      <input
        type="text"
        id="name"
        value={user.name}
        onChange={handleInputChange}
        className="border p-2 rounded w-full mb-4"
      />
      <label htmlFor="avatar" className="block mb-2">Avatar URL</label>
      <input
        type="text"
        id="avatar"
        value={user.avatar}
        onChange={handleInputChange}
        className="border p-2 rounded w-full mb-4"
      />
      <div>
        <button className="bg-blue-500 text-white p-2 rounded">Save Changes</button>
      </div>
    </div>
  );
}

export default UserProfile;