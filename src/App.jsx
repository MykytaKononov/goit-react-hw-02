import Description from "./components/description";
import Options from "./components/options";
import Feedback from "./components/feedback";
import { useEffect, useState } from "react";
function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem("feedback");

    if (savedFeedback) {
      return JSON.parse(savedFeedback);
    }

    return { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  return (
    <div>
      <Description />
      <Options feedback={feedback} setFeedback={setFeedback} />
      <Feedback feedback={feedback} />
    </div>
  );
}

export default App;
