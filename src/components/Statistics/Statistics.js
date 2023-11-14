import { FeedbackList, FeedbackListItem } from "./Statistics.styled";

export function Statistics({  options: { good, bad, neutral }, total, positive, }) {
  return (
      <FeedbackList>
        <FeedbackListItem>good : {good}</FeedbackListItem>
        <FeedbackListItem>neutral : {neutral}</FeedbackListItem>
        <FeedbackListItem>bad : {bad}</FeedbackListItem>
        <FeedbackListItem>Total : {total}</FeedbackListItem>
        <FeedbackListItem>Positive feedback : {positive}%</FeedbackListItem>
      </FeedbackList>
  
  );
}
