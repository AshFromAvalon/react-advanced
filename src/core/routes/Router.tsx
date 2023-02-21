import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import PageLoading from 'components/page-loading/pageLoading';
import Page from 'components/page/Page';

import paths from 'core/routes/paths';

const Home = lazy(() => import('pages/Home'));
const Product = lazy(() => import('pages/Product'));
const PageNotFound = lazy(() => import('pages/PageNotFound'));

interface BaseRoute {
   path: string;
   element: React.ReactNode;
}

interface Routes {
   path: string;
   element: React.ReactNode;
   children?: BaseRoute[];
}

const getRouteElement = (Component: React.ElementType): React.ReactNode => (
   <Suspense fallback={<PageLoading />}>
      <Page>
         <Component />
      </Page>
   </Suspense>
);

const routes: Routes[] = [
   { path: paths.HOME, element: getRouteElement(Home) },
   { path: `${paths.PRODUCT}/:id`, element: getRouteElement(Product) },
   { path: paths.NOT_FOUND, element: getRouteElement(PageNotFound) },
];

export default createBrowserRouter(routes);
