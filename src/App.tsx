import {useState} from 'react';
import Table from './Table';
import Data from './types';

const pairs = 5;

const App = () => {
  const [data, setData] = useState<Data>(Array(pairs).fill([null, null]));

  return (
    <Table data={data} setData={setData}/>
  );
};

export default App;
