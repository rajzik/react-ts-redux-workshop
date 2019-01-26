import React from 'react';
import { Router as ReachRouter } from "@reach/router";
import { paths } from '@constants';
import { PathType } from 'RouterType';
import { PageWrap } from '@components';

const mapRoutes = ({ Component, path, ...rest }: PathType) => {
    return <Component key={path} path={path} {...rest} />
}

export default function Router() {

    return (
        <PageWrap>
            <ReachRouter>
                {
                    paths.map(mapRoutes)
                }
            </ReachRouter>
        </PageWrap>
    )
}

