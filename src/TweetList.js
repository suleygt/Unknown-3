import React from 'react';
import Tweet from './Tweet';

function TweetList() {
  // Örnek: Redux'tan tweet listesi alıyoruz
  const tweets = []; // Burada Redux'dan tweet verisini alacağız

  return (
    <div className="tweet-list p-4 bg-white rounded-lg shadow-md">
      {tweets.length === 0 ? (
        <p>No tweets available.</p>
      ) : (
        tweets.map((tweet, index) => (
          <Tweet key={index} config={tweet} />
        ))
      )}
    </div>
  );
}

export default TweetList;
