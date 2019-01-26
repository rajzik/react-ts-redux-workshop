import React from 'react';

interface TestProps {
    text: string;
}

export default function Test({ text }: TestProps) {
    return <div>{text}</div>;
}
