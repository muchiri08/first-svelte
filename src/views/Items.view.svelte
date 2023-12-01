<script lang="ts">
    // import reference to Svelte lifecycle hook onMount:
    import { onMount } from "svelte";
    import { useAppStore } from "../store";
    import type { ItemInterface } from "../models/items/Item.interface";
    import ItemsListComponent from "../components/items/ItemsList.component.svelte";

    // get a reference to our itemsStore instance using our useAppStore() hook:
    const { itemStore } = useAppStore();
    // get a reference to the items state data through our itemsStore getters:
    const { loading, items } = itemStore.getters;

    // item select event handler
    function onSelectItem(event: CustomEvent<{ item: ItemInterface }>) {
        const item = event.detail.item;

        itemStore.actions.toggleItemSelected(item);
    }

    // lifecycle onMount hook: use to dispatch our loadItems action to our itemsStore
    onMount(async () => {
        itemStore.actions.loadItems();
    });
</script>

<div>
    <ItemsListComponent
        loading={$loading}
        items={$items}
        selectItem={onSelectItem}
    />
</div>
