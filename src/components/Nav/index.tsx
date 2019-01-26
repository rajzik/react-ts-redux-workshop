import React from 'react';
import { Link } from '@components';
import { paths } from '@constants';
import { PathType } from 'RouterType';

const mapPathsToLinks = ({ path, text }: PathType) => (
    <Link key={`link${path}`} to={path} text={text} />
)

export default function Nav() {
    return <nav>
        {
            paths.map(mapPathsToLinks)
        }
    </nav>
}


