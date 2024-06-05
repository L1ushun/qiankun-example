import actions from "./shared/actions";

function App() {
    const redirectToReact = () => {
        window.history.pushState({}, '', "http://localhost:3000/app-react")
    }
    const redirectToVue = () => {
        window.history.pushState({}, '', "http://localhost:3000/app-vue")
    }

    const registerActions = () => {
        // 注册一个观察者函数
        actions.onGlobalStateChange((state, prev) => {
            // state: 变更后的状态; prev 变更前的状态
            console.log(state, prev);
        });
        // 设置值
        actions.setGlobalState({
            sharedProperty: 'qiankun-example'
        });
    }

    return (
        <>
            <h2>我是 master</h2>
            <button onClick={registerActions}>Actions</button>
            <button onClick={redirectToReact}>切换成react</button>
            <button onClick={redirectToVue}>切换成vue</button>
            {/* 子应用 */}
            <div id="root-sub"></div>
        </>
    );
}

export default App;
