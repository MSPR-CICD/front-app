<script>
  import { clients } from './stores/clients.stores.js';
</script>

<main>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">nom</th>
        <th scope="col">test</th>
      </tr>
    </thead>
    <tbody>
      {#each $clients as client}
        <tr>
          <td>{client.name}</td>
          <td>
            <a href="http://google.com">Achats</a>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</main>
