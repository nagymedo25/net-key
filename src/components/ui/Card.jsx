// Card Component
export default function Card({ children, className = '', hover = true, ...props }) {
    return (
        <div
            className={`
                bg-bg-card border border-border rounded-2xl 
                ${hover ? 'hover:shadow-lg hover:shadow-brand-primary/5 hover:-translate-y-1' : 'shadow-sm'} 
                transition-all duration-300
                ${className}
            `}
            {...props}
        >
            {children}
        </div>
    );
}