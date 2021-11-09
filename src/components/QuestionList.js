import React, {useState , useEffect} from "react";
import QuestionForm from "./QuestionForm";
import QuestionItem from "./QuestionItem";

function QuestionList() {

const [questions, setQuestions]= useState([])

// const [question, setNewQuestion]= useState([])


useEffect(()=> { 

        fetch("http://localhost:4000/questions") 
        .then((r)=> r.json())
        .then((data) => setQuestions(data));
      }, []);

      const items = questions.map((question) => <QuestionItem key={question.id} question={question}/>)    
      



  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{items}</ul>
    </section>
  );
}

export default QuestionList;
