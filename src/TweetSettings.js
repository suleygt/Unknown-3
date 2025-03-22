import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserInfo } from './userSlice';
import { setTweetContent } from './tweetSlice';

function TweetSettings() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const tweet = useSelector(state => state.tweet);

  const handleTextChange = (e) => {
    dispatch(setTweetContent({ ...tweet, text: e.target.value }));
  };

  return (
    <div className="tweet-settings p-4 bg-gray-100 rounded-lg shadow-md">
      <ul>
        <li>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={user.username}
            onChange={(e) => dispatch(setUserInfo({ ...user, username: e.target.value }))}
            className="border p-2 rounded w-full"
          />
        </li>
        <li>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={user.name}
            onChange={(e) => dispatch(setUserInfo({ ...user, name: e.target.value }))}
            className="border p-2 rounded w-full"
          />
        </li>
        <li>
          <label htmlFor="text">Text</label>
          <textarea
            id="text"
            value={tweet.text}
            onChange={handleTextChange}
            maxLength="280"
            className="border p-2 rounded w-full"
          />
        </li>
        {/* More fields for avatar, display, retweets, etc. */}
      </ul>
    </div>
  );
}

export default TweetSettings;