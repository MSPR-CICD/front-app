<script>
  import Clients from './Clients.svelte';
  import Purchases from './Purchases.svelte';
  import { currentClient } from './stores/clients.stores';
</script>

<main>
  <Clients />
  {#if $currentClient}
    <Purchases currentClient={$currentClient} />
  {/if}
</main>
