import { useSelector } from 'react-redux';
import { BsArrowRightCircle } from 'react-icons/bs';
import Navbar from './Navbar';

const DetailViewItem = () => {
  const dates = useSelector((store) => store.finance.date);
  if (dates === {}) {
    return <h1>Something went wrong...</h1>;
  }
  return (
    <div>
      <Navbar view="Balance detail" year={' '} />
      <div className="row-40">
        <div className="right-flex">{}</div>
        <div className="left-flex">
          <h2>{dates.date}</h2>
          <p>
            debt:
            {dates.netDebt}
          </p>
        </div>
      </div>
      <h4 className="center">Details</h4>
      <table className="customers">
        <tr>
          <td>cash and cash equivalents : </td>
          <td className="separate">
            <span>
              {dates.cashAndCashEquivalents}
              $
            </span>
            <span>
              <BsArrowRightCircle />
            </span>
          </td>
        </tr>
        <tr>
          <td>short term investments : </td>
          <td className="separate">
            <span>
              {dates.shortTermInvestments}
              $
            </span>
            <span>
              <BsArrowRightCircle />
            </span>
          </td>
        </tr>
        <tr>
          <td>cash and short term investments : </td>
          <td className="separate">
            <span>
              {dates.cashAndShortTermInvestments}
              $
            </span>
            <span>
              <BsArrowRightCircle />
            </span>
          </td>
        </tr>
        <tr>
          <td>net receivables : </td>
          <td className="separate">
            <span>
              {dates.netReceivables}
              $
            </span>
            <span>
              <BsArrowRightCircle />
            </span>
          </td>
        </tr>
        <tr>
          <td>other current assets : </td>
          <td className="separate">
            <span>
              {dates.otherCurrentAssets}
              $
            </span>
            <span>
              <BsArrowRightCircle />
            </span>
          </td>
        </tr>
        <tr>
          <td>total current assets : </td>
          <td className="separate">
            <span>
              {dates.totalCurrentAssets}
              $
            </span>
            <span>
              <BsArrowRightCircle />
            </span>
          </td>
        </tr>
        <tr>
          <td>property plant equipmentNet : </td>
          <td className="separate">
            <span>
              {dates.propertyPlantEquipmentNet}
              $
            </span>
            <span>
              <BsArrowRightCircle />
            </span>
          </td>
        </tr>
        <tr>
          <td>goodwill : </td>
          <td className="separate">
            <span>
              {dates.goodwill}
              $
            </span>
            <span>
              <BsArrowRightCircle />
            </span>
          </td>
        </tr>
        <tr>
          <td>tax sssets : </td>
          <td className="separate">
            <span>
              {dates.taxAssets}
              $
            </span>
            <span>
              <BsArrowRightCircle />
            </span>
          </td>
        </tr>
        <tr>
          <td>total non current assets : </td>
          <td className="separate">
            <span>
              {dates.totalNonCurrentAssets}
              $
            </span>
            <span>
              <BsArrowRightCircle />
            </span>
          </td>
        </tr>
        <tr>
          <td> total assets: </td>
          <td className="separate">
            <span>
              {dates.totalAssets}
              $
            </span>
            <span>
              <BsArrowRightCircle />
            </span>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default DetailViewItem;
