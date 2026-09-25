import { cn } from '@/lib/utils';
import { forwardRef, type ButtonHTMLAttributes } from 'react';

type Variant = 'default' | 'outline' | 'ghost';
type Size = 'default' | 'sm' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant;
    size?: Size;
}

const variantClasses: Record<Variant, string> = {
    default: 'bg-primary-600 text-white hover:bg-primary-700 focus-visible:ring-primary-500',
    outline:
        'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus-visible:ring-primary-500',
    ghost: 'text-gray-700 hover:bg-gray-100 focus-visible:ring-primary-500',
};

const sizeClasses: Record<Size, string> = {
    default: 'h-10 px-4 text-sm',
    sm: 'h-9 px-3 text-sm',
    lg: 'h-11 px-6 text-base',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'default', size = 'default', type = 'button', ...props }, ref) => (
        <button
            ref={ref}
            type={type}
            className={cn(
                'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
                'disabled:pointer-events-none disabled:opacity-50',
                variantClasses[variant],
                sizeClasses[size],
                className,
            )}
            {...props}
        />
    ),
);

Button.displayName = 'Button';
