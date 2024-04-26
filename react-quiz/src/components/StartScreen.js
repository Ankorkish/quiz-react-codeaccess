function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start-screen">
      <h2>Welcome to the React Mastery Quiz!</h2>
      <p>
        You will have {numQuestions} questions to answer within a X-minute time
        limit. This quiz is designed to challenge your understanding and
        proficiency in React. Good luck, and let's test your skills!
      </p>
      <p>
        The quiz will cover a range of topics within React, including state
        management, component lifecycle, hooks, and more. Prepare yourself for a
        thorough examination of your React knowledge and problem-solving
        abilities!
      </p>
      <button
        className="purple-btn"
        onClick={() => dispatch({ type: "start" })}
      >
        Start!
      </button>
    </div>
  );
}

export default StartScreen;
