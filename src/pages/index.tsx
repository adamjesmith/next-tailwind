import * as React from 'react';

import Example from '@/components/Example';
import Layout from '@/components/layout/Layout';
import Main from '@/components/Main';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      <Seo templateTitle='Home' />

      <Main>
        <Example title='Example Component' />
      </Main>
    </Layout>
  );
}
