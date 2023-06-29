import { useSelector } from 'react-redux';
import BigViewItem from './BigViewItem';
import Navbar from './Navbar';

const BigView = () => {
  const finances = useSelector((store) => store.finance.finance);
  const isLoading = useSelector((store) => store.finance.isLoading);

  if (isLoading) {
    return <h1>Loading ... </h1>;
  }

  return (
    <div className="container">
      <Navbar view="Balence view" year={2015} />
      <div className="row-40">
        <div className="right-flex">{}</div>
        <div className="left-flex">
          <h2>Balance Sheet Statement</h2>
          <p>
            items:
            {finances.length}
          </p>
        </div>
      </div>
      <h4 className="center">items</h4>
      <div className="row-50 font-color">
        {finances.map((finance) => (
          <BigViewItem key={finance.date} finance={finance} />
        ))}
      </div>
    </div>
  );
};

export default BigView;
