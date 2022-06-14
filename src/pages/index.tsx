import { GetStaticProps } from 'next';
import * as React from 'react';

import { Pokemons } from '@/lib/types/pokemon';
import { requestPokemon } from '@/lib/utils/getPokemon';

import Example from '@/components/Example';
import Layout from '@/components/layout/Layout';
import Main from '@/components/Main';
import Seo from '@/components/Seo';

type Props = {
  pokemon: Pokemons;
};

export const getStaticProps: GetStaticProps = async () => {
  const pokemon = await requestPokemon();

  return {
    props: { pokemon },
  };
};

export default function HomePage({ pokemon }: Props) {
  console.log(pokemon);

  return (
    <Layout>
      <Seo templateTitle='Home' />

      <Main>
        <Example title='Example Component' />
      </Main>
    </Layout>
  );
}
