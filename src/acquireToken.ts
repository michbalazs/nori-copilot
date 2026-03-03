import {
  PublicClientApplication, 
  InteractionRequiredAuthError 
} from '@azure/msal-browser'
import { ConnectionSettings } from '@microsoft/agents-copilotstudio-client'

export async function acquireToken(settings) {
  const msalInstance = new PublicClientApplication({
    auth: {
      clientId: settings.appClientId,
      authority: `https://login.microsoftonline.com/${settings.tenantId}`,
      redirectUri: window.location.origin
    },
    cache: {
      cacheLocation: "localStorage",
      storeAuthStateInCookie: true
    }
  })

  await msalInstance.initialize()

  const loginRequest = {
    scopes: ['openid', 'profile']
  }

  const accounts = msalInstance.getAllAccounts()
  if (accounts.length > 0) {
    try {
      const response = await msalInstance.acquireTokenSilent({
        ...loginRequest,
        account: accounts[0]
      })
      return response.accessToken
    } catch (e) {
      if (!(e instanceof InteractionRequiredAuthError)) {
        throw e
      }
    }
  }

  // 🔥 IMPORTANT: switch popup → redirect (this fixes your error)
  await msalInstance.loginRedirect(loginRequest)
}