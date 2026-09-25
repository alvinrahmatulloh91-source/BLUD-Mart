import { createInertiaApp } from '@inertiajs/react';
import { createRoot, type ReactNode } from 'react-dom/client';
import '../css/app.css';

const appName = 'Skansaba BLUD-Mart';

createInertiaApp({
    title: (title) => (title ? `${title} — ${appName}` : appName),
    resolve: (name) => {
        const pages = import.meta.glob('./Pages/**/*.tsx', { eager: true });
        const page = pages[`./Pages/${name}.tsx`];
        if (!page) {
            throw new Error(`Page not found: ${name}`);
        }
        return page as { default: React.ComponentType };
    },
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(<App {...props} />);
    },
    progress: {
        color: '#1d53f1',
    },
});
