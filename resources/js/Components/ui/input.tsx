import { cn } from '@/lib/utils';
import { forwardRef, type InputHTMLAttributes, type LabelHTMLAttributes, type TextareaHTMLAttributes } from 'react';

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
    ({ className, type = 'text', ...props }, ref) => (
        <input
            ref={ref}
            type={type}
            className={cn(
                'flex h-10 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm',
                'placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2',
                'focus-visible:ring-primary-500 focus-visible:border-primary-500',
                'disabled:cursor-not-allowed disabled:opacity-50',
                className,
            )}
            {...props}
        />
    ),
);
Input.displayName = 'Input';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>(
    ({ className, ...props }, ref) => (
        <textarea
            ref={ref}
            className={cn(
                'flex min-h-[100px] w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm',
                'placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2',
                'focus-visible:ring-primary-500 focus-visible:border-primary-500',
                'disabled:cursor-not-allowed disabled:opacity-50',
                className,
            )}
            {...props}
        />
    ),
);
Textarea.displayName = 'Textarea';

export function Label({ className, ...props }: LabelHTMLAttributes<HTMLLabelElement>) {
    return (
        <label
            className={cn('mb-1.5 block text-sm font-medium text-gray-700', className)}
            {...props}
        />
    );
}
