import { ReactNode } from 'react';
import Head from 'next/head';
import Header from 'components/layouts/Header';
import { Box } from 'components/primitive';

interface LayoutProps {
  title?: string;
  children: ReactNode;
}

function Layout({ children, title = 'Potluck' }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <Box>{children}</Box>
    </>
  );
}

export default Layout;
