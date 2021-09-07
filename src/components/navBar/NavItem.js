import React from 'react'

export const NavItem = ({ id, className, href, title }) => {
    return (
        <li id={id}>
            <a className={className} href={href}>
                {title}
            </a>
        </li>
    )
}