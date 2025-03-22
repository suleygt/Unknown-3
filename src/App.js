import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Tweet from './tweet/Tweet';
import { setUserInfo } from './redux/userSlice'
import { setTweetContent } from './redux/tweetSlice'
import './App.css';

function App() {
  const dispatch = useDispatch();
  
  // Redux state'den veri alıyoruz
  const user = useSelector(state => state.user);
  const tweet = useSelector(state => state.tweet);

  // Twitter verisini almak için fetch fonksiyonu
  const fetchTwitterInfo = () => {
    const dummyData = {
      name: "Beşiktaş JK",
      screen_name: "Besiktas",
      verified: true,
      profile_image_url:
        "https://images.seeklogo.com/logo-png/1/2/besiktas-jk-logo-png_seeklogo-18692.png",
      status: {
        text: "🏆ŞAMPİYON Beşiktaş 2025 Süper Lig Şampiyonu Beşiktaş JK 🦅 #ŞampiyonBeşiktaş #BJK2025",
        retweet_count: 1138000,
        favorite_count: 12125000,
      },
      media_urls: [
        "https://pbs.twimg.com/media/GkpYubuW4AkG_Ws?format=jpg&name=small",
        "https://pbs.twimg.com/media/GkpIge0WMAAIuwC?format=jpg&name=360x360",
        "https://pbs.twimg.com/media/E2YGaAAXEAA5BSV?format=jpg&name=360x360",
        "https://pbs.twimg.com/media/E4JXsLwXoAU8bVB?format=jpg&name=small",
      ],
    };

    // Redux store'undaki bilgileri güncelliyoruz
    dispatch(setUserInfo({
      username: dummyData.screen_name,
      name: dummyData.name,
      avatar: dummyData.profile_image_url,
      verified: dummyData.verified,
      locked: false,
    }));

    dispatch(setTweetContent({
      text: dummyData.status.text,
      image: dummyData.media_urls,
      retweets: dummyData.status.retweet_count,
      likes: dummyData.status.favorite_count,
      quotedTweets: 379,
      date: "ÖS 9:35 · 18 Haz 2025",
      app: "10000,2 B Görüntüleme",
    }));
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="fetch-info mb-4">
          <input
            type="text"
            value={user.username}
            placeholder="Please type twitter username"
            onChange={(e) => dispatch(setUserInfo({ ...user, username: e.target.value }))}
            className="border p-2 rounded"
          />
          <button
            onClick={fetchTwitterInfo}
            className="ml-2 p-2 bg-blue-500 text-white rounded"
          >
            Fetch Last Tweet
          </button>
        </div>

        <Tweet
          config={{
            user: user,
            tweet: tweet,
          }}
        />
      </div>

      <div className="tweet-settings">
        <ul>
          <li>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={user.username}
              onChange={(e) => dispatch(setUserInfo({ ...user, username: e.target.value }))}
              className="border p-2 rounded"
            />
          </li>
          <li>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={user.name}
              onChange={(e) => dispatch(setUserInfo({ ...user, name: e.target.value }))}
              className="border p-2 rounded"
            />
          </li>
          <li>
            <label htmlFor="avatar">Avatar</label>
            <input
              type="text"
              id="avatar"
              value={user.avatar}
              onChange={(e) => dispatch(setUserInfo({ ...user, avatar: e.target.value }))}
              className="border p-2 rounded"
            />
          </li>
          <li>
            <label htmlFor="verified">Verified</label>
            <input
              type="checkbox"
              id="verified"
              checked={user.verified}
              onChange={(e) => dispatch(setUserInfo({ ...user, verified: e.target.checked }))}
              className="border p-2 rounded"
            />
          </li>
          <li>
            <label htmlFor="locked">Locked</label>
            <input
              type="checkbox"
              id="locked"
              checked={user.locked}
              onChange={(e) => dispatch(setUserInfo({ ...user, locked: e.target.checked }))}
              className="border p-2 rounded"
            />
          </li>
          <li>
            <label htmlFor="display">Display</label>
            <select
              name="display"
              id="display"
              value={tweet.display}
              onChange={(e) => dispatch(setTweetContent({ ...tweet, display: e.target.value }))}
              className="border p-2 rounded"
            >
              <option value="default">Default</option>
              <option value="dim">Dim</option>
              <option value="lightsout">Lights out</option>
            </select>
          </li>
          <li>
            <label htmlFor="text">Text</label>
            <textarea
              id="text"
              value={tweet.text}
              onChange={(e) => dispatch(setTweetContent({ ...tweet, text: e.target.value }))}
              maxLength="280"
              className="border p-2 rounded"
            />
          </li>
          <li>
            <label htmlFor="image">Images</label>
            <textarea
              id="image"
              value={tweet.image.join(", ")}
              placeholder="Comma separated"
              onChange={(e) => {
                const value = e.target.value.split(", ");
                dispatch(setTweetContent({ ...tweet, image: value }));
              }}
              className="border p-2 rounded"
            />
          </li>
          <li>
            <label htmlFor="date">Date</label>
            <input
              type="text"
              id="date"
              value={tweet.date}
              onChange={(e) => dispatch(setTweetContent({ ...tweet, date: e.target.value }))}
              className="border p-2 rounded"
            />
          </li>
          <li>
            <label htmlFor="app">App</label>
            <input
              type="text"
              id="app"
              value={tweet.app}
              onChange={(e) => dispatch(setTweetContent({ ...tweet, app: e.target.value }))}
              className="border p-2 rounded"
            />
          </li>
          <li>
            <label htmlFor="retweets">Retweets</label>
            <input
              type="number"
              id="retweets"
              value={tweet.retweets}
              onChange={(e) => dispatch(setTweetContent({ ...tweet, retweets: e.target.value }))}
              className="border p-2 rounded"
            />
          </li>
          <li>
            <label htmlFor="retweetsWithComments">RTs w/ comments</label>
            <input
              type="number"
              id="retweetsWithComments"
              value={tweet.quotedTweets}
              onChange={(e) => dispatch(setTweetContent({ ...tweet, quotedTweets: e.target.value }))}
              className="border p-2 rounded"
            />
          </li>
          <li>
            <label htmlFor="likes">Likes</label>
            <input
              type="number"
              id="likes"
              value={tweet.likes}
              onChange={(e) => dispatch(setTweetContent({ ...tweet, likes: e.target.value }))}
              className="border p-2 rounded"
            />
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;