import React from "react";

export default function Options({ feedback, onFeedback, onReset }) {
  return (
    <div>
      <button onClick={() => onFeedback("good")}>Good</button>
      <button onClick={() => onFeedback("neutral")}>Neutral</button>
      <button onClick={() => onFeedback("bad")}>Bad</button>
      {feedback.good + feedback.neutral + feedback.bad > 0 && (
        <button onClick={onReset}>Reset</button>
      )}
    </div>
  );
}
