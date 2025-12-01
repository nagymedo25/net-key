// Avatar Component with online status
export default function Avatar({ src, alt, size = 'md', online = false, className = '' }) {
    const sizes = {
        sm: 'w-8 h-8',
        md: 'w-10 h-10',
        lg: 'w-12 h-12',
        xl: 'w-16 h-16',
        '2xl': 'w-24 h-24'
    };

    return (
        <div className={`relative inline-block ${className}`}>
            <img
                src={src}
                alt={alt}
                className={`${sizes[size]} rounded-full object-cover ring-2 ring-white dark:ring-slate-800`}
            />
            {online && (
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-slate-800 rounded-full"></span>
            )}
        </div>
    );
}
