import React from 'react'

interface NavLinkProps {
    customClass?: string,
    title?: string,
    to?: string,
}


const NavLink: React.FC<NavLinkProps> = ({
    customClass,
    title,
    to,
}) => {
    const LinkStyle = `hover:underline-offset-4 hover:underline hover:decoration-wavy ${customClass}`

    return(
        <a href={to} className={LinkStyle}>
            {title}
        </a>
    )
}


export default NavLink;