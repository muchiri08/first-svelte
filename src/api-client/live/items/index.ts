import { type ItemsApiClientOptions, type ItemsApiClientInterface, ItemsApiClientModel } from "../../models/items";

const options: ItemsApiClientOptions = {
    endpoints: {
        fetchItems: "url"
    }
};

const itemsApiClient: ItemsApiClientInterface = new ItemsApiClientModel(options);

export { itemsApiClient };