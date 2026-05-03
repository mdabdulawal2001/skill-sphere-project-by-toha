import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children, className}) => {
    const pathname = usePathname();
    
    const isActive = href === pathname;
     
    return <Link href={href} className={`${isActive ? "bg-[#eae8e8] font-semi-bold text-[#052efb]" : "" }`}>{children}</Link>
};

export default NavLink;