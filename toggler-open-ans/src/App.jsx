import FaqItems from "./FaqItems";

function App() {
  const faqs = [
    {
      question: "What is HTML",
      answer:
        "HTML stands for hyper text markup language, and help us to create structure of the web page",
    },
    {
      question: "What is CSS",
      answer:
        "CSS stands for Cascading style sheet and it helps us to design the webpage like setting up fonts and background color margin border etc.",
    },
    {
      question: "What is Javascript",
      answer:
        "Javascript is the programming language that helps us to add functionality into our webpage and make it interactive.",
    },
  ];
  return (
    <>
      <div>
        <h1 style={{textAlign:"center"}}>Frequently Ask Question</h1>
        {faqs.map((faq, index) => {
          return <FaqItems faq={faq} index={index} />;
        })}
      </div>
    </>
  );
}

export default App;
