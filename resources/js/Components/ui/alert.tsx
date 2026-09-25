import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'react';

export function Alert({
    className,
    variant = 'default',
    ...props
}: HTMLAttributes<HTMLDivElement> & { variant?: 'default' | 'destructive' | 'success' }) {
    const variants = {
        default: 'border-gray-200 bg-gray-50 text-gray-800',
        destructive: 'border-red-200 bg-red-50 text-red-800',
        success: 'border-green-200 bg-green-50 text-green-800',
    };

    return (
        <div
            role="alert"
            className={cn('rounded-lg border px-4 py-3 text-sm', variants[variant], className)}
            {...props}
        />
    );
}
