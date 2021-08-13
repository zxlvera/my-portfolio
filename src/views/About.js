import React from "react";

function About() {
	const jobs = [
		{
			id: 1,
			company: "ECENTA",
			years: "2018-Present",
			desc: "Languages used: IronPython, KnockoutJS",
		},
		{
			id: 2,
			company: "NCS",
			years: "2016-2018",
			desc: "Language used: ABAP",
		},
	];
	const hobbies = ["Yoga", "Travel", "Socialize"];

	return (
		<div className="container mx:auto">
			<div class="bg-white dark:bg-gray-800 overflow-hidden relative">
				<div class="text-start w-1/2 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
					<h2 class="text-4xl font-extrabold text-black dark:text-white sm:text-4xl">
						<span class="block">Hello, I'm Vera.</span>
					</h2>
					<p class="text-xl mt-4 text-gray-400">An aspiring developer :)</p>
					<div class="mt-16">
						<h2 class="text-2xl font-extrabold text-black dark:text-white sm:text-2xl">
							<span class="block text-indigo-500">About Me</span>
						</h2>
						<p class="text-xl mt-4 text-gray-400">
							Been teaching myself web development through online courses and
							hope to transit to a 'proper' developer for my next job!
							<br></br>
						</p>
					</div>
					<div class="mt-16">
						<h2 class="text-2xl font-extrabold text-black dark:text-white sm:text-2xl">
							<span class="block text-indigo-500">Job Experience</span>
						</h2>
						{jobs.map((job) => (
							<div class="min-w-0 mt-2 p-2 bg-white hover:bg-indigo-500 hover:text-white rounded-lg">
								<h4 key={job.id} class="mb-4 font-semibold">
									{job.company}, {job.years}
								</h4>
								<p>{job.desc}</p>
							</div>
						))}
					</div>
					<div class="mt-16">
						<h2 class="text-2xl font-extrabold text-black dark:text-white sm:text-2xl">
							<span class="block text-indigo-500">Interests</span>
						</h2>
						{hobbies.map((hobby, idx) => (
							<div class="min-w-0 mt-2 p-2 bg-white hover:bg-indigo-500 hover:text-white rounded-lg ">
								<h4 key={idx} class="mb-4 font-semibold">
							{hobby}
								</h4>
							</div>
						))}
				</div>
				</div>
				<img
					src="https://res.cloudinary.com/zxlim9/image/upload/c_crop,h_500,r_0,w_500,x_0,y_55/v1626600412/sickfits/IMG_8756_kiaf9c.jpg"
					class="absolute h-2/6 max-w-1/2 hidden lg:block right-0 top-0"
				/>
			</div>
		</div>
	);
}

export default About;
