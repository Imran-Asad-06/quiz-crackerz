import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const QuizDetail = () => {
    const QuizDetails = useLoaderData().data;
    
    return (
        <div className='container'>
            <h2 className=''>Quiz of {QuizDetails.data.name}</h2>
          {
           QuizDetails.data.questions.map(quiz => <Quiz
            key={quiz.id}
            quiz={quiz}></Quiz>)
            
          }
        </div>
    );
};

export default QuizDetail;