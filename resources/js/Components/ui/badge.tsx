import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'react';

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
    return (
        <span
            className={cn(
                'inline-flex items-center rounded-full border border-accent-200 bg-accent-50 px-2.5 py-0.5',
                'text-xs font-medium text-accent-700',
                className,
            )}
            {...props}
        />
    );
}
