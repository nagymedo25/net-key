// Button Component
export default function Button({ children, variant = 'primary', size = 'md', className = '', ...props }) {
    const variants = {
        primary: 'bg-gradient-to-r from-brand-primary to-accent text-white hover:shadow-lg hover:shadow-brand-primary/30',
        secondary: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700',
        outline: 'border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white',
        ghost: 'hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200'
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-5 py-2',
        lg: 'px-7 py-3 text-lg'
    };

    return (
        <button
            className={`rounded-full font-semibold transition-all duration-200 hover:-translate-y-0.5 ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
