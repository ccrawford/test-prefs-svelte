<script lang="ts">
    import { onMount } from 'svelte';
    import PreferenceForm from '../components/PreferenceForm.svelte';
    import { initializeApi, fetchPreferences, updatePreferences } from '../services/api';
    import type { Preferences } from '../types';
  
    let preferences: Preferences | null = null;
    let isLoading = true;
    let error: string | null = null;
  
    onMount(async () => {
      try {
        const host = new URL(window.location.href).searchParams.get('host');
        
        if (!host) {
          throw new Error('Host parameter is missing');
        }
  
        initializeApi(host);
  
        preferences = await fetchPreferences();
        isLoading = false;
      } catch (e) {
        error = e instanceof Error ? e.message : 'Failed to load preferences';
        isLoading = false;
      }
    });
  
    async function handleSubmit(event: CustomEvent<Preferences>) {
      try {
        const updatedPreferences = await updatePreferences(event.detail);
        preferences = updatedPreferences;
      } catch (e) {
        error = e instanceof Error ? e.message : 'Failed to update preferences';
      }
    }
  </script>
  
  <main>
    <h1>Preference Manager</h1>
    {#if isLoading}
      <p>Loading preferences...</p>
    {:else if error}
      <p class="error">{error}</p>
    {:else if preferences}
      <PreferenceForm {preferences} on:submit={handleSubmit} />
    {/if}
  </main>
  
  <style>
    main {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }
    .error {
      color: red;
    }
  </style>