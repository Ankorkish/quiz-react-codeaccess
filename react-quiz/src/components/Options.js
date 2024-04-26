function Options({ question }) {
  return (
    <div className="answers">
      {question.options.map((question) => (
        <button className="btn active">
          <div>{question}</div>
        </button>
      ))}
    </div>
  );
}

export default Options;
