import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAuth0 } from '@auth0/auth0-angular';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideAuth0({
      domain: 'dev-qfpps0z4ash2cqz5.us.auth0.com',
      clientId: '7znmRP2B7hahFvwBjerxVYxoDQUHRkSd',
      authorizationParams: {
        redirect_uri: window.location.origin,
        audience: 'https://dev-qfpps0z4ash2cqz5.us.auth0.com/api/v2/',
        scope: 'openid profile email offline_access',
      },
      useRefreshTokens: true,
      cacheLocation: 'localstorage',
    }),
  ],
};