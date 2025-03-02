import React from "react";
import { calculateTotal } from "./feedback";
export default function options({ feedback, setFeedback }) {
  const total = calculateTotal(feedback);
  return (
    <div>
      <button
        onClick={() => setFeedback({ ...feedback, good: feedback.good + 1 })}
      >
        Good
      </button>
      <button
        onClick={() =>
          setFeedback({ ...feedback, neutral: feedback.neutral + 1 })
        }
      >
        Neutral
      </button>
      <button
        onClick={() => setFeedback({ ...feedback, bad: feedback.bad + 1 })}
      >
        Bad
      </button>
      {total > 0 && (
        <button onClick={() => setFeedback({ good: 0, neutral: 0, bad: 0 })}>
          Reset
        </button>
      )}
    </div>
  );
}
