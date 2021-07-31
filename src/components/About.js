import React from "react";

function About() {
    return (
        <div className="container mx:auto">
            <div className="flex flex-wrap">
                <div className="w-4/12 sm:w-4/12 pt-4">
                    <img src="https://res.cloudinary.com/zxlim9/image/upload/c_crop,h_500,r_0,w_500,x_0,y_55/v1626600412/sickfits/IMG_8756_kiaf9c.jpg" 
                        alt="..." 
                        className="shadow-lg rounded max-w-full h-auto align-middle border-none" />
                </div>
            </div>
            <h1 className="text-6xl font-normal leading-normal mt-0 mb-2 text-blueGray-800">
                Hi, I'm Vera.
            </h1>
            <h6 className="font-serif italic font-medium mt-0 mb-2">
                "coding is something I'm not so good at but it is a skill I wish to be better at."
            </h6>
            <p className="py-1 text-base font-light leading-relaxed mt-0 mb-4 text-blueGray-800">
                Currently working as a developer for <a className="text-emerald-900 hover:text-gray-800" href="https://www.sap.com/sea/products/cpq.html">SAP CPQ</a>.
                Been teaching myself web development through online courses and hope to transit to a 'proper' developer for my next job!

                Weak in: Data Structures Algorithms (leetcode)
                Tried: UI Design course, tired of iterations, harder than fixing code
                Need to get skilled in: API, GraphQL, Backend DB

            </p>
        </div>
    );
}

export default About;
