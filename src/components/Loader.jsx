import React from "react";

const Loader = ({ size = 'md', color = 'yellow', className = '' }) => {
    const sizeClasses = {
        sm: 'w-6 h-6 border-2',
        md: 'w-8 h-8 border-3', // Default
        lg: 'w-12 h-12 border-4',
        xl: 'w-16 h-16 border-4',
    }[size] || 'w-8 h-8 border-3';

    const colorClasses = {
        yellow: 'border-yellow-500 border-t-transparent', // Default
        blue: 'border-blue-500 border-t-transparent',
        green: 'border-green-500 border-t-transparent',
        red: 'border-red-500 border-t-transparent',
        gray: 'border-gray-500 border-t-transparent',
    }[color] || 'border-yellow-500 border-t-transparent';

    return (
        <div
            className={`inline-block rounded-full animate-spin ${sizeClasses} ${colorClasses} ${className}`}
            role="status"
            aria-label="loading"
        >
            <span className="sr-only">Loading...</span>
        </div>
    )
}

export default Loader;