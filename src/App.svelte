<script>
  import Clients from './Clients.svelte';
  import { currentClient } from './stores/clients.stores';
</script>

<main>
  <Clients />
  {#if $currentClient}
    <p>client courrant: {$currentClient.id_client}, {$currentClient.name}</p>
  {/if}
</main>
