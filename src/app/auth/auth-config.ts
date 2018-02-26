export interface AuthConfig {

    CLIENT_ID: string;
    CLIENT_DOMAIN: string;
    AUDIENCE: string;
    REDIRECT: string;
    SCOPE: string;
}

export const AUTH_CONFIG: AuthConfig = {
    CLIENT_ID: 'eKCAmr7JzR6jsQeVLzbXKE3CGtRBBzR2',
    CLIENT_DOMAIN: 'bhabani.auth0.com',
    AUDIENCE: 'http://localhost:3000',
    REDIRECT: 'http://localhost:3000/loginCallback',
    SCOPE: 'openid profile email'
  };