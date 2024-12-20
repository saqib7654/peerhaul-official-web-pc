import { PiniaPluginContext } from 'pinia';
import { nextTick } from 'vue';

export interface PersistStrategy {
    key?: string;
    storage?: Storage;
    paths?: string[];
}

export interface PersistOptions {
    enabled: true;
    strategies?: PersistStrategy[];
}

type Store = PiniaPluginContext['store'];
type PartialState = Partial<Store['$state']>;

declare module 'pinia' {
    // eslint-disable-next-line no-shadow
    export interface DefineStoreOptionsBase<S, Store> {
        persist?: PersistOptions;
    }
}

export const updateStorage = (strategy: PersistStrategy, store: Store) => {
    const storage = strategy.storage || localStorage;
    const storeKey = strategy.key || store.$id;

    if (strategy.paths) {
        const partialState = strategy.paths.reduce((finalObj, key) => {
            // eslint-disable-next-line no-param-reassign
            finalObj[key] = store.$state[key];
            return finalObj;
        }, {} as PartialState);

        storage.setItem(storeKey, JSON.stringify(partialState));
    } else {
        storage.setItem(storeKey, JSON.stringify(store.$state));
    }
};

export default async ({ options, store }: PiniaPluginContext): Promise<void> => {
    if (options.persist?.enabled) {
        const defaultStrat: PersistStrategy[] = [
            {
                key: store.$id,
                storage: localStorage,
            },
        ];

        const strategies = options.persist?.strategies?.length
            ? options.persist?.strategies
            : defaultStrat;

        strategies.forEach(strategy => {
            const storage = strategy.storage || localStorage;
            const storeKey = strategy.key || store.$id;
            const storageResult = storage.getItem(storeKey);

            if (storageResult) {
                store.$patch(JSON.parse(storageResult));
                updateStorage(strategy, store);
            }
        });
        await nextTick();
        store.$subscribe(() => {
            strategies.forEach(strategy => {
                updateStorage(strategy, store);
            });
        });
    }
};
