import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const DetailViewItem = () => {
  const dates = useSelector((store) => store.finance.date);
  if (dates === {}) {
    return <h1>Something went wrong...</h1>;
  }
  return (
    <div>
      <NavLink to="/">{'<'}</NavLink>
      <div>
        <span>cash and cash equivalents : </span>
        <span>{dates.date}</span>
      </div>
      <div>
        <span>short term investments : </span>
        <span>{dates.shortTermInvestments}</span>
      </div>
      <div>
        <span>cash and short term investments : </span>
        <span>{dates.cashAndShortTermInvestments}</span>
      </div>
      <div>
        <span>net receivables : </span>
        <span>{dates.netReceivables}</span>
      </div>
      <div>
        <span>other current assets : </span>
        <span>{dates.otherCurrentAssets}</span>
      </div>
      <div>
        <span>total current assets : </span>
        <span>{dates.totalCurrentAssets}</span>
      </div>
      <div>
        <span>property plant equipmentNet : </span>
        <span>{dates.propertyPlantEquipmentNet}</span>
      </div>
      <div>
        <span>goodwill : </span>
        <span>{dates.goodwill}</span>
      </div>
    </div>
  );
};

export default DetailViewItem;
