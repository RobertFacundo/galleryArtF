import api from "../config/AxiosConfig";

const artworkService = {
    getAllArtworks: async ()=>{
        try{
            const response = await api.get('/artworks');
            console.log(response.data, 'log del service /artworks');

            return response.data;
        }catch(error){
            console.error('get all artworks error:', error.response?.data || error.message);
            throw error;
        }
    },

    addArtwork: async (artworkId) =>{
        try{
            const response = await api.post(`/user_gallery/add_artwork/${artworkId}`);
            console.log(response.data, 'log del service addartwork');
            return response.data;
        }catch(error){
            console.error(`Buy artwork ${artworkId} error:`, error.response?.data || error.message);
            throw error;
        }
    },

    getPersonalGallery: async ()=>{
        try{
            const response = await api.get('/user_gallery');
            return response.data;
        }catch(error){
            console.error('Get personal gallery error:', error.response?.data || error.message);
            throw error;
        }
    },
};

export default artworkService;