import { MainPage, SecondPage, TestPage } from "@pages";
import { PathType } from 'RouterType';




const paths: PathType[] = [
    {
        Component: MainPage,
        path: '/',
        text: 'Go to main page'
    },
    {
        Component: SecondPage,
        path: '/second',
        text: 'Go to second page'
    },
    {
        Component: TestPage,
        path: '/second/:text',
        text: 'Go to second page'
    }
];

export default paths;