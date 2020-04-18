import {
  UserEntity,
  MemberEntity,
  TeamEntity,
  ChartEntity,
  SiloEntity
} from "@toy-program/mandalart-model";

interface MemberState extends MemberEntity {
  team: TeamEntity;
  silos: Array<SiloEntity>;
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

    interface SiloState {
      chartList?: Array<ChartEntity>;
      error?: any;
    }

    interface TeamState {
      teamList?: Array<TeamEntity>;
      error?: any;
    }

    interface State {
      auth: AuthState;
      silo: SiloState;
      team: TeamState;
    }
  }
}
