<script>
  import Clients from './Clients.svelte';
  import Purchases from './Purchases.svelte';
  import { currentClient } from './stores/clients.stores';
  import { sales } from './stores/purchases.stores.js';
</script>

<style>
  main {
    padding: 5%;
  }
  p {
    margin-bottom: 0;
  }
</style>

<nav class="navbar navbar-dark bg-dark justify-content-between">
  <p class="navbar-brand">Application</p>
  <p class="navbar-text">Chiffre d'affaire: {$sales} €</p>
</nav>
<main>
  <Clients />
  {#if $currentClient}
    <Purchases currentClient={$currentClient} />
  {/if}
</main>
