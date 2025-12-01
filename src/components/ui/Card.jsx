// Card Component - محسّن للـ Light/Dark Mode
export default function Card({ children, className = '', hover = true, ...props }) {
    return (
        <div
            className={`bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm ${hover ? 'hover:shadow-md hover:shadow-slate-200 dark:hover:shadow-slate-900/50 transition-all duration-200' : ''
                } ${className}`}
            {...props}
        >
            {children}
        </div>
    );
}
