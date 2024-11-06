import './bootstrap';
import '../css/app.css';
import 'vue3-side-panel/dist/vue3-side-panel.css'

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
import VueSidePanel from 'vue3-side-panel';
import VueGtag from "vue-gtag";

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(VueSidePanel)
            .use(ZiggyVue)
            .use(VueGtag, {id: "G-Y0FLL775VT"})
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
