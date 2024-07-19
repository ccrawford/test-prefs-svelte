<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import type { Preferences, TimezoneOption, Team } from '../types';
  import { TIMEZONE_OPTIONS, sortedTeamsByLeague } from '../types';
  import { updatePreferences } from '../services/api';

  export let preferences: Preferences;
  const dispatch = createEventDispatcher<{submit: Preferences}>();

  let saveStatus: 'idle' | 'saving' | 'success' | 'error' = 'idle';
  let errorMessage = '';

  async function handleSubmit() {
    saveStatus = 'saving';
    try {
      const updatedPreferences = await updatePreferences(preferences);
      preferences = updatedPreferences;
      saveStatus = 'success';
      dispatch('submit', preferences);
      setTimeout(() => {
        saveStatus = 'idle';
      }, 3000);
    } catch (error) {
      saveStatus = 'error';
      errorMessage = error.message;
      setTimeout(() => {
        saveStatus = 'idle';
        errorMessage = '';
      }, 5000);
    }
  }

  function toggleFollowedTeam(teamId: number) {
    if (preferences.followedTeamIds.includes(teamId)) {
      preferences.followedTeamIds = preferences.followedTeamIds.filter(id => id !== teamId);
    } else {
      preferences.followedTeamIds = [...preferences.followedTeamIds, teamId];
    }
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <div class="form-group">
    <label for='favTeamId'>Favorite Team</label>
    <select name='favTeamId' id='favTeamId' bind:value={preferences.favTeamId}>
      {#each Object.entries(sortedTeamsByLeague) as [league, teams]}
        <optgroup label={league}>
          {#each teams as team}
            <option value={team.id}>{team.name}</option>
          {/each}
        </optgroup>
      {/each}
    </select>
  </div>

  <div class="form-group">
    <label for='followedTeamIds'>Followed Teams</label>
    <div class="checkbox-group">
      {#each Object.entries(sortedTeamsByLeague) as [league, teams]}
        <div class="league-header">{league}</div>
        {#each teams as team}
          <label class="checkbox-label">
            <input
              type="checkbox"
              checked={preferences.followedTeamIds.includes(team.id)}
              on:change={() => toggleFollowedTeam(team.id)}
            />
            {team.name}
          </label>
        {/each}
      {/each}
    </div>
  </div>
  
    <div class="form-group">
      <label for="tzString">Timezone</label>
      <select id="tzString" bind:value={preferences.tzString}>
        {#each TIMEZONE_OPTIONS as option}
          <option value={option.value}>{option.description}</option>
        {/each}
      </select>
    </div>
  
    <div>
      <label for="brightness">Brightness:</label>
      <input type="range" id="brightness" min="0" max="100" bind:value={preferences.brightness} />
    </div>
  
    <div>
      <label for="updateServerName">Update Server Name:</label>
      <input type="text" id="updateServerName" bind:value={preferences.updateServerName} />
    </div>
  
    <div>
      <label for="zipCode">ZIP Code:</label>
      <input type="text" id="zipCode" bind:value={preferences.zipCode} />
    </div>
  
    <div>
      <label for="screenRotateSeconds">Screen Rotate Seconds:</label>
      <input type="number" id="screenRotateSeconds" bind:value={preferences.screenRotateSeconds} />
    </div>
   
    <div>
      <label for="spoilerMode">Spoiler Mode:</label>
      <input type="checkbox" id="spoilerMode" bind:checked={preferences.spoilerMode} />
    </div>
  
    <button type="submit" disabled={saveStatus === 'saving'}>
      {saveStatus === 'saving' ? 'Saving...' : 'Save Preferences'}
    </button>
  
    {#if saveStatus === 'success'}
      <div class="status-message success">
        Preferences saved successfully!
      </div>
    {/if}
  
    {#if saveStatus === 'error'}
      <div class="status-message error">
        Error saving preferences: {errorMessage}
      </div>
    {/if}
  </form>
  
  <style>
    :global(body) {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-size: 16px;
      line-height: 1.5;
      color: #333;
    }
  
    form {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f9f9f9;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  
    .form-group {
      margin-bottom: 20px;
    }
  
    label {
      display: block;
      margin-bottom: 5px;
      font-weight: 600;
      color: #333;
    }
  
    select, input[type="text"], input[type="number"] {
      width: 100%;
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 16px;
      font-family: inherit;
    }
  
    .league-header {
    font-weight: bold;
    padding: 10px 0 5px;
    border-bottom: 1px solid #ddd;
    margin-bottom: 5px;
    color: #0056b3;
  }

  .checkbox-group {
    max-height: 300px;  /* Increased height to accommodate headers */
    overflow-y: auto;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 10px;
  }
  
    .checkbox-label {
      display: block;
      padding: 5px 0;
      font-weight: normal;
    }
  
    input[type="checkbox"] {
      margin-right: 10px;
    }
  
    button {
      background-color: #0056b3;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      font-size: 16px;
      font-family: inherit;
      font-weight: 600;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
  
    button:hover {
      background-color: #003d82;
    }
  
    /* Webkit scrollbar styling for checkbox group */
    .checkbox-group::-webkit-scrollbar {
      width: 8px;
    }
  
    .checkbox-group::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
  
    .checkbox-group::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 4px;
    }
  
    .checkbox-group::-webkit-scrollbar-thumb:hover {
      background: #555;
    }

    .status-message {
    margin-top: 15px;
    padding: 10px;
    border-radius: 4px;
    font-weight: bold;
  }

  .success {
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
  }

  .error {
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
  }

  button:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
</style>