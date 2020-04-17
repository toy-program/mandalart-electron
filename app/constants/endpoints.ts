export const BASEURL = "http://localhost:3000/api" as const;
export const LOGIN_LOCAL = "/auth/login/local" as const;
export const GET_CHART = (chartId: number) => `/charts/${chartId}`;
