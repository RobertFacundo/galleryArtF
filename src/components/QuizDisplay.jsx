import React, { useState } from "react";
import useQuiz from "../hooks/useQuiz";
import Loader from "./Loader";

const QuizDisplay = () => {
    const { question, loading, error, message, submitAnswer, fetchNewQuestion } = useQuiz();

    const [selectedAnswer, setSelectedAnswer] = useState('');

    const handleAnswerChange = (e) => {
        setSelectedAnswer(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!question || !selectedAnswer) {
            return;
        }

        submitAnswer(question.artwork_id, selectedAnswer, question.correct_field);

        setSelectedAnswer('');
    }

    if (loading && !question) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <Loader size="lg" color="yellow"/>
            </div>
        );
    }

    if (!question) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <p className="text-xl text-gray-600 font-semibold">No available question at the moment</p>
            </div>
        )
    }

    return (
        <div className="font-sans max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-2xl text-center border border-gray-100 my-8 sm:my-12 md:my-16 lg:my-20 flex flex-col lg:flex-row lg:items-start lg:text-left">
            <div className="flex-1 lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
                <h1 className="text-4xl font-extrabold text-yellow-500 mb-6 drop-shadow-sm text-center lg:text-left">Get more coins!</h1>

                {message && (
                    <p className={`text-lg font-semibold mb-5 p-3 rounded-lg border
                                 ${message.includes('Correct')
                            ? 'bg-yellow-100 text-green-800 border-green-300'
                            : 'bg-red-100 text-red-800 border-red-300'
                        }
                     `}
                    >{message}</p>
                )}
                <h2 className="text-2xl text-gray-700 mb-6 leading-relaxed text-center lg:text-left">{question.question_text}</h2>

                {question.artwork_image_url && (
                    <div className="mb-8 inline-block border-2 border-gray-200 rounded-lg overflow-hidden shadow-inner w-full">
                        <img src={question.artwork_image_url} alt="Artwork" className="max-w-full h-auto max-h-96 object-contain block mx-auto rounded-md" />
                    </div>
                )}
            </div>

            <div className="flex-1 lg:w-1/2 lg:pl-8 flex flex-col">
                <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 flex-grow">
                    {question.options.map((option, index) => (
                        <div key={index} className="flex items-center justify-start mb-4 p-3 bg-gray-50 rounded-lg border border-gray-200 shadow-sm
                                                    cursor-pointer transition-all duration-200 ease-in-out
                                                    hover:bg-yellow-50 hover:border-yellow-300 focus-within:ring-2 focus-within:ring-yellow-400"
                        >
                            <input type="radio" id={`option-${index}`} name="answer"
                                value={option} checked={selectedAnswer === option} onChange={handleAnswerChange} disabled={loading}
                                className="transform scale-125 cursor-pointer mr-3 text-green-500 focus:ring-green-500"
                            />
                            <label htmlFor={`option-${index}`} className="text-lg text-gray-700 ml-2 flex-grow text-left cursor-pointer">
                                {option}
                            </label>
                        </div>
                    ))}
                    <button
                        type="submit"
                        disabled={loading || !selectedAnswer}
                        className="w-full py-3 px-3 text-xl font-bold bg-yellow-500 text-gray-900 rounded-lg cursor-pointer
                                  mt-6 transition-all duration-300 ease-in-out shadow-lg shadow-yellow-300/50
                                  disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? 'Sending answer...' : 'Answer'}
                    </button>
                </form>

                {!loading && !message && (
                    <button
                        onClick={fetchNewQuestion}
                        className="py-2 px-5 text-base bg-yellow-400 text-gray-800 rounded-lg cursor-pointer
                                   mt-4 transition-colors duration-300 ease-in-out shadow-md shadow-yellow-200/50
                                   hover:bg-yellow-500 active:scale-95"
                    >
                        Skip question
                    </button>
                )}
            </div>
        </div>
    );
};

export default QuizDisplay;