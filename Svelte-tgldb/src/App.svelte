<script>
  import Laptop from './components/Laptop.svelte';
  import Navbar from './components/Navbar.svelte';
  import Auth from './components/Auth.svelte';
  import { Router, Link, Route } from 'svelte-routing';
  const laptops = [
    {
      name: 'Dell XPS 13',
      brand: 'Dell',
      model: 'XPS 13',
      processor: 'Intel Core i7-1165G7',
      ram: '16GB',
      storage: '512GB SSD',
      gpu: 'Intel Iris Xe Graphics',
      display: '13.4-inch FHD+'
    },
    {
      name: 'Dell XPS 13',
      brand: 'Dell',
      model: 'XPS 13',
      processor: 'Intel Core i7-1165G7',
      ram: '16GB',
      storage: '512GB SSD',
      gpu: 'Intel Iris Xe Graphics',
      display: '13.4-inch FHD+'
    }
    // Add more laptop objects here
  ];
</script>

<Navbar></Navbar>
<Auth></Auth>
<main>

  <h1>The Great Laptop Database</h1>

  {#each laptops as laptop}
    <Laptop {laptop} />
  {/each}
</main>
