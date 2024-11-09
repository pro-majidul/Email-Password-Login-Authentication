import React from 'react';

const Home = () => {
    return (
        <div>
            <div className="indicator">
                <span className="indicator-item indicator-center indicator-middle badge badge-secondary">
                    Uploading Image...
                </span>
                <img
                    alt="Tailwind CSS examples"
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" />
            </div>
        </div>
    );
};

export default Home;