import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import React from 'react';
import Image from 'next/image';

function Layout({ children }: any) {
  return (
    <div>
      <div>
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
