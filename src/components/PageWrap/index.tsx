import React from 'react';
import { Nav } from '@components';

interface PageWrapProps {
    children: any
}

export default function PageWrap({ children }: PageWrapProps) {
    return (<>
        <Nav />
        {children}
    </>)
}