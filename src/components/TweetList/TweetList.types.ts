export type TweetListProps = {
  tweets: Tweet[];
};

export type Tweet = {
  id: string;
  author: string;
  content: string;
};
