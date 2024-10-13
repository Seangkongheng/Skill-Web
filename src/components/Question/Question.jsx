import React from 'react'
import "./Question.css"

const Question = () => {
  return (
    <div className='question-container'>
        <div className="question-content">
            <h1>Frequently Asked Question</h1><br /><br />
            <div className="question-item">
                <p>Can I access course office ? </p>
            </div>
            <div className="question-item">
                <p>Can I access course office ? </p>
            </div>
            <div className="question-item">
                <p>Is there any prepare for access to course </p>
            </div>
            <div className="question-item">
                <p>How long do I have access a course </p>
            </div>
            <div className="question-item">
                <p>How can I make payment? </p>
            </div>
            <div className="question-item">
                <p>How can I contact like facebook? </p>
            </div><br /><br />
        </div>
    </div>
  )
}

export default Question