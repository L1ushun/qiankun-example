import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

let root;
function render(props) {
    const dom = props?.container ? props.container.querySelector('#root-sub') : document.querySelector('#root-sub');
    root = ReactDOM.createRoot(dom);
    root.render(<App />);
}

if (!window.__POWERED_BY_QIANKUN__) {
    render({});
}

export async function bootstrap() {
    console.log("子应用初始化");
}

export async function mount(props) {
    console.log("react 子应用渲染");
    render(props);
}

export async function unmount() {
    console.log("react 子应用卸载");
    root.unmount();
}
