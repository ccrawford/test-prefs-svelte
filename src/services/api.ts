import type { Preferences } from '../types';

let apiBaseUrl = '';

export function initializeApi(baseUrl: string) {
    apiBaseUrl = baseUrl;
}

export async function fetchPreferences(): Promise<Preferences> {
    const response = await fetch(`${apiBaseUrl}/api/preferences`);
    if (!response.ok) {
        throw new Error('Failed to fetch preferences');
    }
    return response.json();
}

export async function updatePreferences(preferences: Preferences): Promise<Preferences> {
    const response = await fetch(`${apiBaseUrl}/api/preferences`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(preferences),
    });
    if (!response.ok) {
        throw new Error('Failed to update preferences');
    }
    return response.json();
}