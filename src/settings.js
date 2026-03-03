/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

// This file emulates the process object in node.
// rename this file to settings.js before running this test sample
import { ConnectionSettings } from '@microsoft/agents-copilotstudio-client'

// Flag to enable debug mode, which will store the debug information in localStorage.
// Copilot Studio Client uses the "debug" library for logging (https://github.com/debug-js/debug?tab=readme-ov-file#browser-support).
window.localStorage.debug = 'copilot-studio:*'

export const settings = new ConnectionSettings({
  // App ID of the App Registration used to log in, this should be in the same tenant as the Copilot.
  appClientId: '9ff13d76-2332-4bce-b3e1-f921167297a0',
  // Tenant ID of the App Registration used to log in, this should be in the same tenant as the Copilot.
  tenantId: '7a87a12c-f006-4b0e-b805-700c25c31be5',
  // Authority endpoint for the Azure AD login. Default is 'https://login.microsoftonline.com'.
  authority: 'https://login.microsoftonline.com',
  // Environment ID of the environment with the Copilot Studio App.
  environmentId: '06552ecd-7a49-e093-8ac6-15c2103f134b',
  // Schema Name of the Copilot to use.
  agentIdentifier: 'crc9f_noriStaffSupportCopilot',
  // PowerPlatformCloud enum key.
  cloud: undefined,
  // Power Platform API endpoint to use if Cloud is configured as "Other".
  customPowerPlatformCloud: undefined,
  // AgentType enum key.
  copilotAgentType: undefined,
  // URL used to connect to the Copilot Studio service.
  directConnectUrl: 'https://06552ecd7a49e0938ac615c2103f13.4b.environment.api.powerplatform.com/powervirtualagents/botsbyschema/crc9f_noriStaffSupportCopilot/directline',
  // Flag to use the "x-ms-d2e-experimental" header URL on subsequent calls to the Copilot Studio service.
  useExperimentalEndpoint: false
})
