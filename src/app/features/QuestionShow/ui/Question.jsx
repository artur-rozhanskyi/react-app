export const Question = ({ question }) => {

  return (
    <>
      <h1>{question?.title}</h1>
      <h2>{question?.body}</h2>
      <h2>Comments: {question?.comments?.length}</h2>
      <h2>Answers: {question?.answers?.length}</h2>
    </>
  );
};
