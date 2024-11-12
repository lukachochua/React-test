import React from 'react';

const AuthButtons = () => {
    return (
        <div className="flex space-x-4">
            <button className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-100">
                Log in
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Sign up
            </button>
        </div>
    );
};

export default AuthButtons;