/// <reference types="vite/client" />

import type { route as routeFn } from 'ziggy-js';

declare global {
    interface Window {
        Ziggy?: unknown;
    }
}

interface PageProps {
    auth: {
        user: {
            id: number;
            name: string;
            email: string;
            is_admin: boolean;
        } | null;
    };
}

declare module '@inertiajs/react' {
    interface InertiaPageProps extends PageProps {}
}

export type SharedPageProps = PageProps & {
    ziggy: ReturnType<typeof routeFn>;
};
