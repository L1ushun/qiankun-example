import { initGlobalState } from "qiankun";

const initialState = {
    sharedProperty: ''
};
const actions = initGlobalState(initialState);

export default actions;
