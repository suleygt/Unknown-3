import React from "react";
import { useSelector } from "react-redux";
import "./component.css";
import Twemoji from "react-twemoji";
import useText from "../hooks/useText";
import useImage from "../hooks/useImage";
import useDisplay from "../hooks/useDisplay";
import { Comment, Drop, Like, Lock, Retweet, Share, Verified } from "./icons";
export default function Tweet() {
  const user = useSelector((state) => state.user);
  const tweet = useSelector((state) => state.tweet);

  const text = useText(tweet.text);
  const image = useImage(tweet.image);
  const display = useDisplay(tweet.display);

  if (!user || !tweet) {
    return <div className="text-center text-gray-500">Yükleniyor...</div>;
  }

  return (
    <div className={`tweet ${display} grid max-w-lg mx-auto p-6 bg-white rounded-xl shadow-lg border border-gray-200`}> 
      <UserInfo />
      <Content />
      <Metadata />
      <TweetInfos />
      <Actions />
    </div>
  );

  function UserInfo() {
    return (
      <div className="flexs items-center space-x-3 mb-4">
      
        <img
          className="avatars h-10 rounded-full border border-gray-300 shadow-sm object-cover"
          src={user.avatar}
          alt={`${user.name} avatar`}
        />
        <div className="flex-1">
          <div className="flex items-center">
            <Twemoji options={{ className: "twemoji-sm" }} className="text-blue-600 font-semibold text-lg">
              {user.name}
            </Twemoji>
            {user.verified && <Verified className="ml-2 text-blue-500" />}
            {user.locked && !user.verified && <Lock className="ml-2 text-gray-500" />}
          </div>
          <div className="text-sm text-gray-500">@{user.username}</div>
        </div>
        <Drop className="text-gray-400 hover:text-gray-600 cursor-pointer" />
      </div>
    );
  }

  function Content() {
    return (
      <div className="mb-4">
        {text && <div className="text-lg leading-6 text-gray-800">{text}</div>}
        <ImagesContainer />
      </div>
    );
  }

  function ImagesContainer() {
    switch (image.length) {
      case 1:
        return <img className="tweet-image mx-auto" src={image} alt="" />;
      case 2:
      case 3:
        return (
          <div className="tweet-images-container grid-cols-2 gap-2">
            {image.map((img, index) => (
              
              <img key={index} className="w-[150px] h-[150px] rounded-lg shadow-sm object-cover" src={img} alt="" />
            ))}
          </div>
        );
      case 4:
        return (
          <div className="grid grid-cols-2 gap-2">
            {image.map((img, index) => (
             
              <img key={index} className="w-[150px] h-[150px] rounded-lg shadow-sm object-cover" src={img} alt="" />
            ))}
          </div>
        );
      default:
        return null;
    }
  }

  function Metadata() {
    return (
      <div className="tweet-infoss text-sm text-gray-500 mt-2 border-t pt-2">
        {tweet.date} · <span className="text-blue-500 font-semibold">{tweet.app}</span>
      </div>
    );
  }

  function TweetInfos() {
    return (
      <div className="tweet-infos">
        <span className="text-blue-600 font-semibold">{tweet.retweets} Retweets</span>
        <span className="text-green-600 font-semibold">{tweet.quotedTweets} Quoted Tweets</span>
        <span className="text-red-600 font-semibold">{tweet.likes} Likes</span>
      </div>
    );
  }

  function Actions() {
    return (
      <div className="actions-wrapper mt-3">
        <div className="action-icon"><Comment /></div>
        <div className="action-icon"><Retweet /></div>
        <div className="action-icon"><Like /></div>
        <div className="action-icon"><Share /></div>
      </div>
    );
  }  }