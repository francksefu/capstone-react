import { useSelector } from 'react-redux';
import BigViewItem from './BigViewItem';

const BigView = () => {
  const finances = useSelector((store) => store.finance.finance);
  const isLoading = useSelector((store) => store.finance.isLoading);

  if (isLoading) {
    return <h1>Loading ... </h1>;
  }

  return (
    <div>
      {finances.map((finance) => (
        <BigViewItem key={finance.date} finance={finance} />
      ))}
    </div>
  );
};

export default BigView;
