import Link from 'next/link';
import React from 'react';

const NavLink = ({href, children, className}) => {
    return <Link href={href}>{children}</Link>
};

export default NavLink;