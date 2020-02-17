<script>
  import { clientPurchases } from './stores/clients.stores.js';
</script>

{#if $clientPurchases}
  <table class="table table-hover">
    <thead class="thead-light">
      <tr>
        <th scope="col">Produit</th>
        <th scope="col">Prix HT</th>
        <th scope="col">Prix TTC</th>
      </tr>
    </thead>
    <tbody>
      {#each $clientPurchases as purchase}
        <tr>
          <td>{purchase.product.name}</td>
          <td>{purchase.product.price} €</td>
          <td>{purchase.product.price + purchase.product.price * purchase.product.tax} €</td>
        </tr>
      {/each}
    </tbody>
  </table>
{/if}
