import type { Preferences } from '../types';

let API_BASE_URL: string | null = null;

export function initializeApi(host: string): void {
  API_BASE_URL = `http://${host}/prefs`;
}

export async function fetchPreferences(): Promise<Preferences> {
  if (!API_BASE_URL) {
    throw new Error('API not initialized');
  }
  const response = await fetch(API_BASE_URL);
  if (!response.ok) {
    throw new Error(`Failed to fetch preferences: ${response.status} ${response.statusText}`);
  }
  return response.json();
}

export async function updatePreferences(preferences: Preferences): Promise<Preferences> {
  if (!API_BASE_URL) {
    throw new Error('API not initialized');
  }
  const response = await fetch(API_BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(preferences),
  });
  if (!response.ok) {
    throw new Error(`Failed to update preferences: ${response.status} ${response.statusText}`);
  }
  return response.json();
}