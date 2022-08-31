import React from 'react'
import { MDXProvider } from '@mdx-js/react'

import './src/styles/index.css'
import Layout from './src/components/layout'

const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)

const wrapRootElement = ({ element }) => <MDXProvider>{element}</MDXProvider>

export { wrapPageElement, wrapRootElement }

export const onRouteUpdate = ({ location }) => {
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  const pagePath = location ? location.pathname + location.search + location.hash : undefined;
  setTimeout(() => {
    if (typeof gtag === 'function') {
      window.gtag('event', 'page_view', { page_path: pagePath });
    }
  }, 100);
};
