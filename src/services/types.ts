export interface AuthResponse {
  accessToken: string;
  data_access_expiration_time: number;
  expiresIn: number;
  signedRequest: string;
  userID: string;
  grantedScopes?: string | undefined;
  reauthorize_required_in?: number | undefined;
}

export interface FbApiResponse {
  id: number;
}

export interface FbApiErrorResponse {
  error: {
    message: string;
    type: string;
    code: number;
    error_subcode: number;
    fbtrace_id: string;
  };
}

export interface StatusResponse {
  status: 'authorization_expired' | 'connected' | 'not_authorized' | 'unknown';
  authResponse: AuthResponse;
}
