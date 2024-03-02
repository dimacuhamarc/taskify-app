// import { Link } from '@remix-run/react';
import Icon from '~/components/icon';
import { Link, useNavigate } from '@remix-run/react';
import { SignOutHandler, API_URL } from "~/services/user-services"
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Navbar = () => {
  const [userCategories, setUserCategories] = useState<string[]>([]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/v1/categories`, {
        headers: {
          'authorization': sessionStorage.getItem('token'),
          'Accept': 'application/json',
        }
      });
      setUserCategories(response.data);
      // console.log(response.data.status);
    }
    catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchCategories();
    // console.log(userCategories)
    // console.log(sessionStorage.getItem('token'));
  }, []);


  return (
    <div className="sidebar flex flex-col justify-between">
      <div className="flex flex-col gap-4">
        <NavItem icon='user-fill' tooltip='Profile' link='/profile' />
        {
          userCategories.map((category, index) => {
            return <NavCategory key={index} tooltip={category.title} link={`/categories/${category.title}`} />
          })
        }
        {/* <NavCategory icon='suitcase-fill' tooltip='Work' link='/categories' />
        <NavCategory tooltip='School' link='/categories' /> */}
        <NavItem icon='add-fill' tooltip='Create a Category' link='/settings' />
      </div>
      <div className='flex flex-col gap-4'>
        <NavItem icon='settings-3-fill' tooltip='Settings' link='/settings' />
        <SignOutButton icon='logout-box-fill' tooltip='Sign Out' />
      </div>
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

const NavCategory = ({icon, tooltip, link}: NavItemProps ) => {
  return (
    <Link
      className="*:z-50  sidebar-item group sidebar-animation tooltip tooltip-right before:bg-opacity-25"
      data-tip={tooltip}
      to={link}
    >
      {icon ? (
        <Icon
          iconName={icon}
          className="text-lg text-primary group-hover:text-primary-content group-hover:text-xl sidebar-animation sidebar-icon"
        />
      ) : (
        <button className="text-lg text-primary group-hover:text-primary-content group-hover:text-xl sidebar-animation sidebar-icon">
          {' '}
          {tooltip?.split('')[0][0]}{' '}
        </button>
      )}
    </Link>
  );
}

interface SignOutButtonProps {
  icon?: string;
  tooltip?: string;
}

const SignOutButton = ({icon, tooltip}: SignOutButtonProps ) => {
  return (
    <button className="*:z-50 sidebar-item group sidebar-animation tooltip tooltip-right before:bg-opacity-25" data-tip={tooltip} onClick={SignOutHandler}>
      <Icon iconName={icon} className='text-lg text-primary group-hover:text-primary-content group-hover:text-xl sidebar-animation sidebar-icon' />
    </button>
  );
};
