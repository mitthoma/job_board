var CronJob = require('cron').CronJob;

const fetchGithub = require('./tasks/fetch_github');

//fetch github
new CronJob('* * * * *', fetchGithub, null, true, 'America/Los_Angeles');
