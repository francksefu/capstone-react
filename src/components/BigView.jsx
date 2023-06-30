import { useSelector } from 'react-redux';
import { useState } from 'react';
import BigViewItem from './BigViewItem';
import Navbar from './Navbar';

const BigView = () => {
  const finances = useSelector((store) => store.finance.finance);
  const isLoading = useSelector((store) => store.finance.isLoading);
  const [data, setData] = useState('');

  if (isLoading) {
    return <h1>Loading ... </h1>;
  }

  return (
    <div className="container">
      <Navbar view="Balence view" year={' '} />
      <div className="row-40">
        <div className="right-flex">{}</div>
        <div className="left-flex">
          <h2>Balance Sheet Statement</h2>
          <p>
            items:
            {finances.length}
            <br />
            filter by date
            :
            <input
              type="date"
              id="search"
              placeholder="search"
              onChange={(e) => {
                const regex = new RegExp(e.target.value, 'g');
                setData(finances);
                setData((state) => state.filter((val) => {
                  const str = val.date;
                  return regex.test(str);
                }));
              }}
            />
            <br />
          </p>
        </div>
      </div>
      <h4 className="center">items</h4>
      {data ? (
        <div className="row-50 font-color">
          {data.map((finance) => (
            <BigViewItem key={finance.date} finance={finance} />
          ))}
        </div>
      ) : (
        <div className="row-50 font-color">
          {finances.map((finance) => (
            <BigViewItem key={finance.date} finance={finance} />
          ))}
        </div>
      )}

    </div>
  );
};

export default BigView;
