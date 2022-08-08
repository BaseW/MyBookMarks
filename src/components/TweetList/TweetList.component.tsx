import { TweetListProps } from "./TweetList.types";

export const TweetList = ({ tweets }: TweetListProps) => {
  return (
    <div>
      {
        tweets.map((tweet) => {
          return (
            <div key={tweet.id}>
              <h3>{tweet.author}</h3>
              <p>{tweet.content}</p>
            </div>
          );
        })
      }
    </div>
  )
}
