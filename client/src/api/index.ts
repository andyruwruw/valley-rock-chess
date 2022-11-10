// Local Imports
import request from './request';

const acceptChallenge = async (username: string) => {
  try {
    const response = await request.get('/accept-challenge');

    if (response.status === 200) {
      return response.data;
    }
    return null;
  } catch (error) {
    return null;
  }
};

const challenge = async (username: string) => {
  try {
    const response = await request.get('/challenge');

    if (response.status === 200) {
      return response.data;
    }
    return null;
  } catch (error) {
    return null;
  }
};

const checkUpdate = async (username: string) => {
  try {
    const response = await request.get('/check-update');

    if (response.status === 200) {
      return response.data;
    }
    return null;
  } catch (error) {
    return null;
  }
};

const checkUser = async () => {
  try {
    const response = await request.get('/check-user');

    if (response.status === 200) {
      return response.data;
    }
    return null;
  } catch (error) {
    return null;
  }
};

const createGame = async () => {
  try {
    const response = await request.post('/create-game');

    if (response.status === 200) {
      return response.data;
    }
    return null;
  } catch (error) {
    return null;
  }
};

const finishGame = async () => {
  try {
    const response = await request.get('/finish-game');

    if (response.status === 200) {
      return response.data;
    }
    return null;
  } catch (error) {
    return null;
  }
};

const login = async (username: string) => {
  try {
    const response = await request.get(`/login?username=${username}`);

    if (response.status === 200) {
      return response.data;
    }
    return null;
  } catch (error) {
    return null;
  }
};

const updateChallenge = async () => {
  try {
    const response = await request.get('/update-challenge');

    if (response.status === 200) {
      return response.data;
    }
    return null;
  } catch (error) {
    return null;
  }
};

const update = async () => {
  try {
    const response = await request.get('/update');

    if (response.status === 200) {
      return response.data;
    }
    return null;
  } catch (error) {
    return null;
  }
};

const getGames = async () => {
  try {
    const response = await request.get('/get-games');

    if (response.status === 200) {
      return response.data;
    }
    return null;
  } catch (error) {
    return null;
  }
};

const getScoreboard = async () => {
  try {
    const response = await request.get('/get-scoreboard');

    if (response.status === 200) {
      return response.data.scoreboard;
    }
    return null;
  } catch (error) {
    return null;
  }
};

const joinGame = async (id: string) => {
  try {
    const response = await request.get(`/join-game?id=${id}`);

    if (response.status === 200) {
      return response.data;
    }
    return null;
  } catch (error) {
    return null;
  }
};

export default {
  acceptChallenge,
  challenge,
  checkUpdate,
  checkUser,
  createGame,
  finishGame,
  login,
  updateChallenge,
  update,
  getGames,
  getScoreboard,
  joinGame,
};
