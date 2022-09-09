import { useState } from 'react';
import ProSearch from '@ahws/pro-search';
import yayJpg from '../assets/yay.jpg';

export default function HomePage() {
  const [str] = useState<string>('12345')
  return (
    <div>
      <h2>Yay! Welcome to umi!/ { str }</h2>
      <ProSearch />
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}
