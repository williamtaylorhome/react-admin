import React from 'react';
import ReactDOM from 'react-dom';
import { AlitaProvider, setConfig } from 'redux-alita';
import umbrella from 'umbrella-storage';
import Page from './Page';
import * as serviceWorker from './serviceWorker';
import * as apis from './service';
// import { AppContainer } from 'react-hot-loader';
import './style/lib/animate.css';
import './style/index.less';
import './style/antd/index.less';

setConfig(apis);
umbrella.config('REACT-ADMIN');
// const render = Component => { //Add react-hot-loader to maintain state refresh operation. If not needed, you can remove it and open the comment below.
//     ReactDOM.render(
//         <AppContainer>
//             <Provider store={store}>
//                 <Component store={store} />
//             </Provider>
//         </AppContainer>
//         ,
//         document.getElementById('root')
//     );
// };
// render(Page);
// Webpack Hot Module Replacement API
// if (module.hot) {
//     //Hide You cannot change <Router routes>; it will be ignored error message
//     //The prompt caused by react-hot-loader usage on react-router 3.x, react-router 4.x does not exist
//     //For details, please refer to https://github.com/gaearon/react-hot-loader/issues/298
//     const orgError = console.error; //eslint-disable-line no-console
//     console.error = (...args) => { //eslint-disable-line no-console
//         if (args && args.length === 1 && typeof args[0] === 'string' && args[0].indexOf('You cannot change <Router routes>;') > -1) {
//             //React route changed
//         } else {
//             //Log the error as normally
//             orgError.apply(console, args);
//         }
//     };
//     module.hot.accept('./Page', () => {
//         render(Page);
//     })
// }

ReactDOM.render(
    // <app container>
    <AlitaProvider>
        <Page />
    </AlitaProvider>,
    // </app container>
    document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
serviceWorker.register();
