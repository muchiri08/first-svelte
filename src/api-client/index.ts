import type { ApiClientInterface } from './models/ApiClient.interface';
import { apiMockClient } from './mock';
import { apiLiveClient } from './live';

let env: string = 'mock';

console.log('import.meta.env', JSON.stringify(import.meta.env));

if (import.meta.env && import.meta.env.VITE_API_CLIENT) {
    env = import.meta.env.VITE_API_CLIENT.trim();
}

// return either the live or the mock client
let apiClient: ApiClientInterface
if (env == 'live') {
    apiClient = apiLiveClient;
} else {
    apiClient = apiMockClient;
}

export { apiClient };