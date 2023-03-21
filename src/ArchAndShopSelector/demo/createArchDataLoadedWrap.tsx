import {
  ArchAndShopSelector,
  ArchDataProvider,
  createArchDataLoadedWrap,
} from '@tastien/tstd';
import React from 'react';

const Child = createArchDataLoadedWrap(() => {
  return <ArchAndShopSelector controlMode="BOTH" />;
});

const App = () => {
  // 封装的取数逻辑
  const value = { data: [], isLoading: false, refetch: () => {} };
  return (
    <ArchDataProvider value={value}>
      <Child />
    </ArchDataProvider>
  );
};

export default App;
