function App() {
    const redirectToReact = () => {
        window.history.pushState({}, '', "http://localhost:3000/app-react")
    }
    const redirectToVue = () => {
        window.history.pushState({}, '', "http://localhost:3000/app-vue")
    }
    return (
        <>
            <h2>我是 master</h2>
            <button onClick={redirectToReact}>切换成react</button>
            <button onClick={redirectToVue}>切换成vue</button>
            {/* 子应用 */}
            <div id="root-sub"></div>
        </>
    );
}

export default App;
