import { PropTypes } from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { goWithData } from '../redux/dataSlice/dataSlice';

const BigViewItem = ({ finance }) => {
  const dispatch = useDispatch();
  return (
    <div className="right-flex">
      <NavLink to="/detail" onClick={() => dispatch(goWithData(finance))}>
        <div className="fleche">
          <BsArrowRightCircle />
        </div>
        <h4>{finance.date}</h4>
        <div>
          <span>net debt:</span>
          <br />
          <span>
            {' '}
            $
            {finance.netDebt}
          </span>
        </div>
      </NavLink>
    </div>
  );
};

BigViewItem.propTypes = {
  finance: PropTypes.instanceOf({}).isRequired,
};
export default BigViewItem;
