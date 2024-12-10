import { createPinia } from 'pinia';
import piniaPluginPersist from '@/utils/pinia-plugin-persist';

const store = createPinia().use(piniaPluginPersist);

export default store;
