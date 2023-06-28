import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { goWithData } from '../redux/dataSlice/dataSlice';

const BigViewItem = ({ finance }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <NavLink to="/detail" onClick={() => dispatch(goWithData(finance))}> click</NavLink>
      <h4>{finance.date}</h4>
      <div>
        <span>net debt:</span>
        <span>
          {' '}
          $
          {finance.netDebt}
        </span>
      </div>
    </div>
  );
};

BigViewItem.propTypes = {
  finance: PropTypes.instanceOf({}).isRequired,
};
export default BigViewItem;
