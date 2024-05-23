import {
    renderWithQiankun,
    qiankunWindow
} from 'vite-plugin-qiankun/dist/helper';
import {createApp} from "vue";
import App from "./App.vue";

let app;
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
    createApp(App).mount('#app');
} else {
    renderWithQiankun({
        mount(props) {
            app = createApp(App);
            app.mount(
                (props.container
                    ? props.container.querySelector('#app')
                    : document.getElementById('app'))
            );
        },
        bootstrap() {
            console.log('bootstrap');
        },
        update() {
            console.log('update');
        },
        unmount() {
            app?.unmount();
        }
    });
}
