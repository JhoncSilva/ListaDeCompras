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
      domain: '{ApplicationDomain}',
      clientId: '{ApplicationClientId}',
      authorizationParams: {
        redirect_uri: window.location.origin,
        audience: '{APIAudience}',
        scope: 'openid profile email offline_access',
      },
      useRefreshTokens: true,
      cacheLocation: 'localstorage',
    }),
  ],
};