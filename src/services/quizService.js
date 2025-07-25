import api from "../config/AxiosConfig";

const quizService = {
    generateQuestion: async ()=>{
        try{
            const response = await api.get('/quiz/question');
            return response.data;
        }catch(error){
            console.error('Generate quiz question error:', error.response?.data || error.message);
            throw error;
        }
    },

    submitAnswer: async (artworkId, answer, correctField)=>{
        try{
            const response = await api.post('/quiz/submit_answer', {
                artwork_id: artworkId,
                answer: answer,
                correct_field: correctField
            });
            console.log(response.data, 'log del submitanswer')
            return response.data;
        }catch(error){
            console.error('Submit quiz answer error:', error.response?.data || error.message);
            throw error;
        }
    },
};

export default quizService;