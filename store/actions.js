// src/services/api.js
import axios from 'axios';


// Hàm gọi API để lấy danh sách các TV show theo thứ tự phổ biến
export default {
  async getPopularTVShows() {
    const config = {
      headers: {
        'Authorization': "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNGY1MTQyMWRjM2IzODg3M2ZhMjNjZTc5OTViMGVmYyIsInN1YiI6IjY2M2NkMTYyMzMzMjM2ZDg1OWEzYThiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SdwMCwuua2ispZeSA9EkhpAd-UkDDR9XsFS3xx212Dg"
      }
    };
    try {
      const result = await axios.get("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", config)
      console.log(123, result);
      return result;
    } catch (error) {

    }
  },
  async ListProduct2({ }, id) {

    try {
      const result = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=b4f51421dc3b38873fa23ce7995b0efc&language=en-US/`)
      return result;
    } catch (error) {
    }
  },
  async fetchMovieDetails({ }, movieId) {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=b4f51421dc3b38873fa23ce7995b0efc`);
      return response;
    } catch (error) {
    }
  },
  async fetchMovieTrailer({ }, movieId) {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=b4f51421dc3b38873fa23ce7995b0efc`);
      return response.data.results;

    } catch (error) {

    }
  },
  SearchMoviee({ commit }, id) {
    console.log(2);
    commit('SET_SEARCH', id)
  },
  SetUser({ commit }, userData) {
    commit("SET_USER", userData)
  },
  isLogin({ }, userJSON) {
    localStorage.setItem('user', userJSON);
  },
  async RouterMovie(){
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=b4f51421dc3b38873fa23ce7995b0efc`);
      return response;
    } catch (error) {
    }
  },
  async getPopularTVShows2() {
    const config = {
      headers: {
        'Authorization': "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNGY1MTQyMWRjM2IzODg3M2ZhMjNjZTc5OTViMGVmYyIsInN1YiI6IjY2M2NkMTYyMzMzMjM2ZDg1OWEzYThiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SdwMCwuua2ispZeSA9EkhpAd-UkDDR9XsFS3xx212Dg"
      }
    };
    try {
      const result = await axios.get("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", config)
      console.log(123, result);
      return result;
    } catch (error) {

    }
},
async RouterMovie2(){
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=b4f51421dc3b38873fa23ce7995b0efc`);
    return response;
  } catch (error) {
  }
},
async getPopularTVShows3() {
  const config = {
    headers: {
      'Authorization': "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNGY1MTQyMWRjM2IzODg3M2ZhMjNjZTc5OTViMGVmYyIsInN1YiI6IjY2M2NkMTYyMzMzMjM2ZDg1OWEzYThiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SdwMCwuua2ispZeSA9EkhpAd-UkDDR9XsFS3xx212Dg"
    }
  };
  try {
    const result = await axios.get("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", config)
    console.log(123, result);
    return result;
  } catch (error) {

  }
}
}