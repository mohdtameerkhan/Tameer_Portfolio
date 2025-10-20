import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const lists = [
    { name: 'About Tameer', path: '/' },
    { name: 'Resume', path: '/resume' },
    { name: 'Creativity', path: '/creativity' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <ul className="flex flex-wrap justify-end p-4 uppercase gap-2 sm:gap-4">
      {lists.map((list, index) => (
        <li
          key={index}
          className="shadow-lg shadow-purple-300 mr-2 sm:mr-6 text-lg bg-gradient-to-br from-[var(--txt-color)] via-[var(--btn-color)] to-[var(--txt-color)] p-3 text-white rounded-b-lg"
        >
          <Link to={list.path}>{list.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Header;
