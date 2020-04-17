import {
  UserEntity,
  MemberEntity,
  TeamEntity
} from "@toy-program/mandalart-model";

interface MemberState extends MemberEntity {
  team: TeamEntity;
}

interface UserState extends UserEntity {
  teams: Array<MemberState>;
}

declare global {
  namespace Mandalart {
    interface AuthState {
      accessToken?: string;
      user?: UserState;
      error?: any;
    }

    interface State {
      auth: AuthState;
    }
  }
}
