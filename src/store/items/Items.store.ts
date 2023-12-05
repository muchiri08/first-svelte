import * as SvelteStore from 'svelte/store';
import type {
    ItemsStateInterface,
    ItemsStoreInterface,
    ItemsStoreActionsInterface,
    ItemsStoreGetterInterface
} from './models';
import type { ItemInterface } from '../../models/items/Item.interface';
import { apiClient } from '../../api-client';

const writableItemsStore = SvelteStore.writable<ItemsStateInterface>({
    loading: false,
    items: []
});

// hook to allows us to consume the ItemsStore instance in our components
export function useItemsStore(): ItemsStoreInterface {
    // our items store actions implementation:
    const actions: ItemsStoreActionsInterface = {
        // action that we invoke to load the items from an api:
        loadItems: async () => {
            writableItemsStore.update((state) => {
                state.loading = true;
                state.items = [];
                return state;
            })

            // invoke our API cient fetchItems to load the data from an API end-point
            const data = await apiClient.items.fetchItems();

            // set item data and loading to false
            writableItemsStore.update((state) => {
                state.items = data;
                state.loading = false;

                return state;
            });
        },

        // action we invoke to toggle an item.selected property
        toggleItemSelected: async (item: ItemInterface) => {
            writableItemsStore.update((state) => {
                const itemIndex = (state.items || []).findIndex(a => a.id === item.id)
                if (itemIndex < 0) {
                    console.warn("ItemStore: action: toggleItemSelected: Could not find in our state");

                    return;
                }

                // toggle selected
                state.items[itemIndex].selected = !state.items[itemIndex].selected;
                //keep current loading value
                state.loading = state.loading;
                return state;
            })
        }
    }

    const loading = SvelteStore.derived(writableItemsStore, ($state) => $state.loading)
    const items = SvelteStore.derived(writableItemsStore, ($state) => $state.items)

    const getters: ItemsStoreGetterInterface = {
        loading,
        items
    }

    return {
        getters,
        actions
    }
}