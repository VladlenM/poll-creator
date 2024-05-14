import { ReactElement } from 'react';

export type PollItem = {
    question: string | null | undefined;
    options: string[];
    id?: string;
    createdAt?: string;
}

export type Option = {
    value: string;
    label: string;
}

export type PageConfig = {
    path: string;
    title: string;
    component: () => ReactElement;
}
