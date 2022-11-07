// Local Imports
import request from './request';

const login = async (username: string) => {
  try {
    const response = await request.get(`/login?username=${username}`);

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return null;
  }
}

const getGames = async () => {
  try {
    const response = await request.get('/get-games');

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return null;
  }
}

const createGame = async () => {
  try {
    const response = await request.post('/create-game');

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return null;
  }
}

const joinGame = async (id: string) => {
  try {
    const response = await request.get(`/join-game?id=${id}`);

    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    return null;
  }
}

export default {
  login,
  getGames,
  createGame,
  joinGame,
};
