// Change this filename to auth.config.ts

export const AUTH_CONFIG = {
  // Needed for Auth0 (capitalization: ID):
  clientID: 'Wx25ZebBNgyCUsGvyoyCCSO1krDnbGZY',
  // Needed for Auth0Cordova (capitalization: Id):
  clientId: 'Wx25ZebBNgyCUsGvyoyCCSO1krDnbGZY',
  domain: 'qa-ware2goproject.auth0.com', // e.g., you.auth0.com
  packageIdentifier: 'co.hotwax.picking', // config.xml widget ID
  responseType : 'token id_token', //respose type token
  redirectUri : 'https://ware2go.hotwaxsystems.com/stockmove/',
  audience: 'urn:ware2go-api',
  scope: 'openid profile name email'
};
