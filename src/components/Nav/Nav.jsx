import React, { useEffect, useState } from 'react';
import cn from 'classnames/bind';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';
import SidebarLogo from '../../static/icons/logo';
import Agreement from '../../static/icons/agreement';
import Layers from '../../static/icons/layers';
import Brain from '../../static/icons/brain';
import Contactbook from '../../static/icons/contactbook';
import Shuttle from '../../static/icons/shuttle';
import University from '../../static/icons/university';
import Settings from '../../static/icons/settings';
import NavLink from '../NavLink';

const array = [
  { link: '/', Logo: SidebarLogo, alt: 'logo', title: '', isActive: false, id: 1 },
  { link: '/stack', Logo: Layers, alt: 'layers', title: 'sidebar.stack', isActive: false, id: 2 },
  { link: '/competencies', Logo: Brain, alt: 'brain', title: 'sidebar.competencies', isActive: false, id: 3 },
  { link: '/how', Logo: Settings, alt: 'how', title: 'sidebar.settings', isActive: false, id: 4 },
  { link: '/school', Logo: University, alt: 'university', title: 'sidebar.school', isActive: false, id: 5 },
  { link: '/partners', Logo: Agreement, alt: 'agreement', title: 'sidebar.partners', isActive: false, id: 6 },
  { link: '/career', Logo: Shuttle, alt: 'shuttle', title: 'sidebar.career', isActive: false, id: 7 },
  {
    link: '/contacts',
    Logo: Contactbook,
    alt: 'contactbook',
    title: 'sidebar.contacts',
    isActive: false,
    id: 8,
  },
];

const Nav = ({ setIsSidebarOpen }) => {
  const cx = cn.bind(styles);
  const router = useRouter();
  const { pathname } = router;
  const [navArray, setNavArray] = useState(array);

  useEffect(() => {
    setNavArray(array.map((el) => ({ ...el, isActive: pathname === el.link })));
  }, [pathname]);

  const handleClick = (id) => {
    setNavArray(array.map((el) => ({ ...el, isActive: el.id === id })));
    setIsSidebarOpen(false);
  };

  return (
    <nav className={cx('nav')}>
      <ul className={cx('nav__list')}>
        {navArray.map(({ link, Logo, alt, title, id, isActive }) => (
          <NavLink
            key={id}
            link={link}
            Logo={Logo}
            alt={alt}
            title={title}
            id={id}
            isActive={isActive}
            handleClick={() => handleClick(id)}
          />
        ))}
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  setIsSidebarOpen: PropTypes.func,
};

Nav.defaultProps = {
  setIsSidebarOpen: () => {},
};

export default Nav;
