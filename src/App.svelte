<script lang="ts">
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import Counter from "./lib/Counter.svelte";
  import ItemsList from "./components/items/ItemsList.component.svelte";
  import type { ItemInterface } from "./models/items/Item.interface";

  const items: ItemInterface[] = [
    {
      id: 1,
      name: "Item 1",
      selected: false,
    },
    {
      id: 2,
      name: "Item 2",
      selected: false,
    },
    {
      id: 3,
      name: "Item 3",
      selected: false,
    },
  ];
</script>

<main>
  <div class="home">
    <ItemsList items={items} />
  </div>
</main>

<style>
  .home {
    padding: 20px;
  }
</style>
