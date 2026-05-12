import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children, className}) => {
    const pathname = usePathname();
    
    const isActive = href === pathname;
     
    return <Link href={href} className={`${isActive ? "bg-[#052efb]/10 font-bold text-[#052efb]" : "" }`}>{children}</Link>
};

export default NavLink;