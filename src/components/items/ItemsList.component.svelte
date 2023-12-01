<script lang="ts">
  import type { ItemInterface } from "../../models/items/Item.interface";
  import ItemComponent from "./children/Item.component.svelte";
  import Loader from "../shared/Loader.component.svelte";

  // expose loading property:
  export let loading = false;

  export let items: ItemInterface[];

  // expose a property to pass our selectItem event to the parent component
  export let selectItem: (event: CustomEvent<{ item: ItemInterface }>) => void;

  // function onSelectItem(event: CustomEvent<{ item: ItemInterface }>) {
  //   const item = event.detail.item;
  //   item.selected = !item.selected;
  //   items = items;
  //   console.log("onSelectItem", item.id, item.selected);
  // }
</script>

<div>
  <h3>My Items</h3>
  {#if loading}
    <Loader />
  {/if}
  {#if !loading}
    <ul>
      {#each items as item}
        <ItemComponent {item} on:selectItem={selectItem} />
      {/each}
    </ul>
  {/if}
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
