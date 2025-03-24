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
    return <div className="loading-message">Yükleniyor...</div>;
  }

  return (
    <div className={`tweet ${display}`}>
      <UserInfo />
      <Content />
      <Metadata />
      <TweetInfos />
      <Actions />
    </div>
  );

  function UserInfo() {
    return (
      <div className="user-info">
        <div className="profile-photo-container">
          <img
            className="profile-photo"
            src={user.avatar}
            alt={`${user.name} avatar`}
          />
        </div>
        <div className="user-info-right">
          <div className="drop-button">
            <Drop />
          </div>
          <div className="user-name">
            <Twemoji options={{ className: "twemoji-sm" }} className="user-name-txt">
              <span className="link">{user.name}</span>
            </Twemoji>
            {user.verified && (
              <div className="icon">
                <Verified />
              </div>
            )}
            {user.locked && !user.verified && (
              <div className="icon">
                <Lock />
              </div>
            )}
          </div>
          <div className="user-username">@{user.username}</div>
        </div>
      </div>
    );
  }

  function Content() {
    return (
      <div className="tweet-content">
        {text && <div className="txt">{text}</div>}
        <ImagesContainer />
      </div>
    );
  }

  function ImagesContainer() {
    switch (image.length) {
      case 1:
        return <div className="image-container"><img src={image} alt="" /></div>;
      case 2:
      case 3:
      case 4:
        return (
          <div className="tweet-images-container">
            {image.map((img, index) => (
              <img key={index} className="tweet-image" src={img} alt="" />
            ))}
          </div>
        );
      default:
        return null;
    }
  }

  function Metadata() {
    return (
      <div className="metadata">
        {tweet.date} · <span className="app-name">{tweet.app}</span>
      </div>
    );
  }

  function TweetInfos() {
    return (
      <div className="tweet-infos">
        <span className="retweet-count">{tweet.retweets} Retweets</span>
        <span className="quote-count">{tweet.quotedTweets} Quoted Tweets</span>
        <span className="like-count">{tweet.likes} Likes</span>
      </div>
    );
  }

  function Actions() {
    return (
      <div className="actions-wrapper">
        <div className="action-icon"><Comment /></div>
        <div className="action-icon"><Retweet /></div>
        <div className="action-icon"><Like /></div>
        <div className="action-icon"><Share /></div>
      </div>
    );
  }
}