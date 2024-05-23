import {useState, useEffect} from 'react';
import Data from './types';

type DataPoint = number | null;

type TableProps = {
  data: Data;
  setData: () => void;
};

type TableInputProps = {
  data: Data;
  setData: () => void;
  index: number;
  dataPoint: DataPoint;
  pairElement: 0 | 1;
}

const Table = ({data, setData}: TableProps): React.JSX.Element => {
  return (
    <table>
      <thead>
        <tr>
          <th>X</th>
          <th>Y</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>
              <TableInput data={data} setData={setData} index={index} dataPoint={item[0]} pairElement={0} />
            </td>
            <td>
              <TableInput data={data} setData={setData} index={index} dataPoint={item[1]} pairElement={1} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const TableInput = ({data, setData, index, dataPoint, pairElement}: TableInputProps): React.JSX.Element => {
  const [newDataPoint, setDataPoint] = useState<DataPoint>(dataPoint);

  useEffect(() => {
    let newData: Data = [...data];
    newData[index][pairElement] = newDataPoint;
    setData([...newData]);
  }, [newDataPoint]);

  return (
    <input
      defaultValue={newDataPoint}
      onChange={(e) => setDataPoint(e.target.value)}
      // Additional props and styling
    />
  );
}

export default Table;
