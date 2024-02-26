import { Link } from '@remix-run/react';
import Icon from './icon';

const Navbar = () => {
  return (
    <div className="fixed w-full px-32">
      <div className="navbar bg-primary rounded-3xl w-full py-4 px-14 bg-opacity-5 backdrop-blur-xl ring-2 ring-primary">
        <div className="inline-flex navbar-start w-1/2">
          <Link
            to="#"
            className="btn btn-ghost *:text-2xl text-secondary-content font-heading"
          >
            <Icon iconName="checkbox-fill" />
            Taskify
          </Link>
        </div>
        <div className="inline-flex navbar-end">
          <Link
            to="#"
            className="btn btn-ghost *:text-2xl text-secondary-content font-heading"
          >
            <Icon iconName="github-fill" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
