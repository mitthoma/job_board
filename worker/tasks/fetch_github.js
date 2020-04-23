var fetch = require('node-fetch');

const baseURL = 'https://jobs.github.com/positions.json';

async function fetchGithub() {
	//run this until a page is returned with zero results

	let res_tracker = 1, currPage = 0;
	const total_jobs = [];

	while(res_tracker > 0) {

		const res = await fetch(`${baseURL}?page=${currPage}`);
		const jobs = await res.json();

		total_jobs.push(jobs);

		console.log('retrieved', res_tracker, 'jobs');
		currPage++;
		res_tracker = jobs.length;

	}

	console.log('retrieved', total_jobs.length, 'total jobs');




}

fetchGithub();

module.exports = fetchGithub;