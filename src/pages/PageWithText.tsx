import React from 'react';

interface TextPageProps {
    text: string;
};

export default function TextPage({ text }: TextPageProps) {
    return (<div>{text}</div>)
}