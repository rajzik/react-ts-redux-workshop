import React from 'react';
import { Link as ReachLink } from '@reach/router';

interface LinkProps {
    to: string,
    text: string,
}

export function Link({ to, text }: LinkProps) {
    return (<ReachLink to={to}>{text}</ReachLink>)
}