import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "68a367448439e7e5bbf10fd6", 
  requiresAuth: true // Ensure authentication is required for all operations
});
