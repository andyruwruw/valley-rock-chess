// Local imports
import { AcceptChallengeHandler } from './accept-challenge';
import { ChallengeHandler } from './challenge';
import { CheckUpdateHandler } from './check-update';
import { CheckUserHandler } from './check-user';
import { CreateGameHandler } from './create-game';
import { CreateGymHandler } from './create-gym';
import { DeleteUserHandler } from './delete-user';
import { FinishGameHandler } from './finish-game';
import { GetGamesHandler } from './get-games';
import { GetScoreboardHandler } from './get-scoreboard';
import { JoinGameHandler } from './join-game';
import { LoginHandler } from './login';
import { RemoveGameHandler } from './remove-game';
import { UpdateChallengeHandler } from './update-challenge';
import { UpdateGymHandler } from './update-gym';
import { UpdateHandler } from './update';

export default {
  'accept-challenge': AcceptChallengeHandler,
  challenge: ChallengeHandler,
  'check-update': CheckUpdateHandler,
  'check-user': CheckUserHandler,
  'create-game': CreateGameHandler,
  'create-gym': CreateGymHandler,
  'delete-user': DeleteUserHandler,
  'finish-game': FinishGameHandler,
  'get-games': GetGamesHandler,
  'get-scoreboard': GetScoreboardHandler,
  'join-game': JoinGameHandler,
  login: LoginHandler,
  'remove-game': RemoveGameHandler,
  'update-challenge': UpdateChallengeHandler,
  'update-gym': UpdateGymHandler,
  update: UpdateHandler,
};
