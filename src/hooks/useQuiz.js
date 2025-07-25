import { useState, useEffect, useCallback } from "react";
import quizService from "../services/quizService";
import { useAuth } from "../contexts/AuthContext";

const useQuiz = () => {
    const { setUser } = useAuth();
    const [question, setQuestion] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);

    const fetchNewQuestion = useCallback(async () => {
        setLoading(true);
        setError(null);
        setMessage(null);

        try {
            const data = await quizService.generateQuestion();
            console.log('Generated question:', data);

            setQuestion(data)
        } catch (err) {
            setError('Error trying to load question')
            console.error(err)
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchNewQuestion();
    }, [fetchNewQuestion]);

    const submitAnswer = useCallback(async (artworkId, answer, correctField) => {
        setLoading(true);
        setError(null);
        setMessage(null);

        try {
            const data = await quizService.submitAnswer(artworkId, answer, correctField);
            console.log('Answer submitted:', data);

            if (data.success) {
                setMessage(data.message);

                setUser(prevUser =>{
                    if(prevUser){
                        return{
                            ...prevUser,
                            coins: parseFloat(data.new_coins)
                        }
                    }
                })
            } else {
                setMessage(data.message)

                setUser(prevUser =>{
                    if(prevUser){
                        return {
                            ...prevUser,
                            coins: parseFloat(data.new_coins)
                        };
                    }
                    return null;
                });
            }

            setTimeout(() => {
                fetchNewQuestion();
            }, 2500)
        } catch (err) {
            console.error(err);
            setError('Error submitting answer')
        } finally {
            setLoading(false);
        }
    }, [fetchNewQuestion, setUser]);

    return {
        question, loading, error, message, submitAnswer, fetchNewQuestion
    }
}

export default useQuiz;