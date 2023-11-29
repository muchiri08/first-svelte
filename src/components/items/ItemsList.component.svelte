<script lang="ts">
  import type { ItemInterface } from "../../models/items/Item.interface";
  import ItemComponent from "./children/Item.component.svelte";

  export let items: ItemInterface[];

  function onSelectItem(event: CustomEvent<{item: ItemInterface}>) {
    const item = event.detail.item
    item.selected = !item.selected
    items = items
    console.log('onSelectItem', item.id, item.selected)
  }

</script>

<div>
  <h3>My Items</h3>
  <ul>
    {#each items as item}
    <ItemComponent item={item} on:selectItem={onSelectItem} />
    {/each}
  </ul>
</div>

<style>
  ul {
    padding-inline-start: 0;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
  }
</style>
