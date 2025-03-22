import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  text: "Futbol takımımız, Bellona Kayserispor maçı hazırlıklarına bugün yaptığı antrenmanla başladı. 🦅 #BJKvKYS",
  image: [
    "https://pbs.twimg.com/media/GkteZu9WEAARDNR?format=jpg&name=360x360",
    "https://pbs.twimg.com/media/GktebBVWMAApcDm?format=jpg&name=360x360",
  ],
  retweets: 5703,
  likes: 68900,
  quotedTweets: 379,
  date: "ÖS 2:35 · 26 Şub 2025",
  app: "100,2 B Görüntüleme",
};

const tweetSlice = createSlice({
  name: 'tweet',
  initialState,
  reducers: {
    setTweetContent: (state, action) => {
      state.text = action.payload.text;
      state.image = action.payload.image;
      state.retweets = action.payload.retweets;
      state.likes = action.payload.likes;
      state.quotedTweets = action.payload.quotedTweets;
      state.date = action.payload.date;
      state.app = action.payload.app;
    },
  },
});

export const { setTweetContent } = tweetSlice.actions;
export default tweetSlice.reducer;