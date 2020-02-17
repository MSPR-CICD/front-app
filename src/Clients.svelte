<script>
  import { clients } from './stores/clients.stores.js';
  import { currentClient } from './stores/clients.stores';
</script>

<table class="table">
  <thead>
    <tr>
      <th scope="col">Nom</th>
      <th scope="col">Achats</th>
    </tr>
  </thead>
  <tbody>
    {#each $clients as client}
      <tr>
        <td>{client.name}</td>
        <td>
          <button class="btn btn-primary" on:click={() => currentClient.update(_ => client)}>
            Achats
          </button>
        </td>
      </tr>
    {/each}
  </tbody>
</table>
