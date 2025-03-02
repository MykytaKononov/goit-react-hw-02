import React from "react";

export const calculateTotal = (feedback) => {
  return feedback.good + feedback.neutral + feedback.bad;
};

export default function Feedback({ feedback }) {
  const total = calculateTotal(feedback);
  if (total === 0) {
    return <p>No feedback given</p>;
  }
  return (
    <div>
      <ul>
        <li>
          <p>Good: {feedback.good}</p>
        </li>
        <li>
          <p>Neutral: {feedback.neutral}</p>
        </li>
        <li>
          <p>Bad: {feedback.bad}</p>
        </li>
        <li>
          <p>Total: {total}</p>
        </li>
        <li>
          <p>Positive: {Math.round((feedback.good / total) * 100)}%</p>
        </li>
      </ul>
    </div>
  );
}
