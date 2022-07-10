import * as React from 'react';
import { LayoutProps } from '../../models/index';
import { Footer, Header } from '../common';

export function MainLayout ({children}: LayoutProps) {
  return (
    <div>
      <Header/>
        <div>{children}</div>
      <Footer/>
    </div>
  );
}
