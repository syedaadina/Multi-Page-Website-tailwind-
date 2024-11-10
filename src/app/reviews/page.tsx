import React from 'react';

const reviewsData = [
    {
        name: "Emily R.",
        rating: 5,
        comment: "Absolutely loved my experience! The staff was so friendly and the haircut was perfect. Highly recommend!",
    },
    {
        name: "James T.",
        rating: 4,
        comment: "Great service! I got a manicure and it was done beautifully. Will definitely return.",
    },
    {
        name: "Sophia L.",
        rating: 5,
        comment: "The best salon in town! My hair color turned out amazing, and I received so many compliments.",
    },
    {
        name: "Michael B.",
        rating: 3,
        comment: "Good service, but the wait time was a bit long. Overall, I was satisfied with my haircut.",
    },
    {
        name: "Olivia K.",
        rating: 5,
        comment: "I had a fantastic experience! The facial was so relaxing, and my skin feels rejuvenated.",
    },
];

const Reviews = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-10 bg-pink-200">
            <h2 className="font-serif font-extrabold text-3xl text-gray-800 text-center mb-8">
                Customer Reviews
            </h2>
            <div className="space-y-8">
                {reviewsData.map((review, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="font-bold text-xl mb-2">{review.name}</h3>
                        <div className="text-yellow-500 mb-2">
                            {'★'.repeat(review.rating) + '☆'.repeat(5 - review.rating)}
                        </div>
                        <p className="text-gray-600">{review.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reviews;