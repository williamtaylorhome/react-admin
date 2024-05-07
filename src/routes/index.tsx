import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { useAlita } from 'redux-alita';
import umbrella from 'umbrella-storage';
import AllComponents from '../components';
import routesConfig, { IFMenuBase, IFMenu } from './config';
import { checkLogin } from '../utils';
import RouteWrapper from './RouteWrapper';

type CRouterProps = {
    auth: any;
};

const CRouter = (props: CRouterProps) => {
    const { auth } = props;
    const [smenus] = useAlita({ smenus: null }, { light: true });

    const getPermits = (): any[] | null => {
        return auth ? auth.permissions : null;
    };
    const requireAuth = (permit: any, component: React.ReactElement) => {
        const permits = getPermits();
        if (!permits || !permits.includes(permit)) return <Redirect to={'404'} />;
        return component;
    };
    const requireLogin = (component: React.ReactElement, permit: any) => {
        const permits = getPermits();
        if (!checkLogin(permits)) {
            // Determine whether to log in online environment
            return <Redirect to={'/login'} />;
        }
        return permit ? requireAuth(permit, component) : component;
    };
    const createMenu = (r: IFMenu) => {
        const route = (r: IFMenuBase) => {
            const Component = r.component && AllComponents[r.component];
            return (
                <Route
                    key={r.route || r.key}
                    exact
                    path={r.route || r.key}
                    render={(props: any) => {
                        // Repackage components
                        const wrapper = (
                            <RouteWrapper {...{ ...props, Comp: Component, route: r }} />
                        );
                        return r.login ? wrapper : requireLogin(wrapper, r.requireAuth);
                    }}
                />
            );
        };

        const subRoute = (r: IFMenu): any =>
            r.subs && r.subs.map((subR: IFMenu) => (subR.subs ? subRoute(subR) : route(subR)));

        return r.component ? route(r) : subRoute(r);
    };
    const createRoute = (key: string) => routesConfig[key].map(createMenu);
    const getAsyncMenus = () => smenus || umbrella.getLocalStorage('smenus') || [];
    return (
        <Switch>
            {Object.keys(routesConfig).map((key) => createRoute(key))}
            {getAsyncMenus().map(createMenu)}
            <Route render={() => <Redirect to="/404" />} />
        </Switch>
    );
};

export default CRouter;
