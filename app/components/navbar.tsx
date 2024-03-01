// import { Link } from '@remix-run/react';
import Icon from '~/components/icon';
import { useNavigate } from '@remix-run/react';
import { SignOutHandler } from "~/services/user-services"


const items = [
  { icon: 'book-fill', tooltip: 'Categories', link: '/categories' },
  { icon: 'book-fill', tooltip: 'Categories', link: '/categories' },
  { icon: 'user-fill', tooltip: 'Profile', link: '/profile' },
];

export const Navbar = () => {
  return (
    <div className="sidebar flex flex-col justify-between">
      <div className="flex flex-col gap-4">
      {
        items.map((item, index) => (
          <NavItem key={index} icon={item.icon} tooltip={item.tooltip} link={item.link} />
        ))
      }
      </div>
      <SignOutButton icon='logout-box-fill' tooltip='Sign Out' />
    </div>
  );
};

interface NavItemProps extends SignOutButtonProps {
  link: string;
}

const NavItem = ({icon, tooltip, link}: NavItemProps ) => {
  const navigate = useNavigate();
  return (
    <button className="*:z-50  sidebar-item group sidebar-animation tooltip tooltip-right before:bg-opacity-25" data-tip={tooltip} onClick={
      () => {
        navigate(link)}
      }>
      <Icon iconName={icon} className='text-lg text-primary group-hover:text-primary-content group-hover:text-xl sidebar-animation sidebar-icon' />
    </button>
  );
};

interface SignOutButtonProps {
  icon: string;
  tooltip?: string;
}

const SignOutButton = ({icon, tooltip}: SignOutButtonProps ) => {
  return (
    <button className="*:z-50 sidebar-item group sidebar-animation tooltip tooltip-right before:bg-opacity-25" data-tip={tooltip} onClick={SignOutHandler}>
      <Icon iconName={icon} className='text-lg text-primary group-hover:text-primary-content group-hover:text-xl sidebar-animation sidebar-icon' />
    </button>
  );
};
