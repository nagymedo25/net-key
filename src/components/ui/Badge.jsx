// Badge Component
export default function Badge({ children, color = 'blue', className = '' }) {
    const colors = {
        blue: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
        green: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
        purple: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
        red: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
        yellow: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300',
        orange: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
        pink: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300',
        gray: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
    };

    return (
        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${colors[color]} ${className}`}>
            {children}
        </span>
    );
}
