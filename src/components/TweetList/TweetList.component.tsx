import { TweetListProps } from "./TweetList.types";
import styles from "./TweetList.module.scss";

export const TweetList = ({ tweets }: TweetListProps) => {
  return (
    <div>
      {
        tweets.map((tweet) => {
          return (
            <div key={tweet.id} className={styles.container}>
              <h3>{tweet.author}</h3>
              <p>{tweet.content}</p>
            </div>
          );
        })
      }
    </div>
  )
}
