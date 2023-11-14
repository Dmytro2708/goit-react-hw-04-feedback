import { BtnFeedback, BtnList } from './FeedbackOptions.styled'

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <BtnList>
    {options.map((option, idx) => (
      <BtnFeedback type="button" key={idx} onClick={() => onLeaveFeedback(option)}>
        {option}
      </BtnFeedback>
    ))}
  </BtnList>
  );
}

