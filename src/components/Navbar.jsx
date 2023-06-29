import { PropTypes } from 'prop-types';
import { AiOutlineLeft, AiTwotoneSetting } from 'react-icons/ai';
import { BsMicFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

const Navbar = ({ view, year }) => (
  <div className="range">
    <div>
      <NavLink to="/">
        <AiOutlineLeft />
      </NavLink>
      {year}
    </div>
    <h3>{view}</h3>
    <div>
      <span className="microphone">
        <BsMicFill />
      </span>
      <span>
        <AiTwotoneSetting />
      </span>
    </div>
  </div>
);

Navbar.propTypes = {
  view: PropTypes.instanceOf('ok').isRequired,
  year: PropTypes.instanceOf(1).isRequired,
};
export default Navbar;
