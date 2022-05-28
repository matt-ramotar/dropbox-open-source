import { Octokit } from '@octokit/action';
import fs from 'fs';
import projects from '../projects.js';

async function fetch(){
    const octokit = new Octokit()

    try {
        const idToContributors = {}

        for (const project of projects) {
            console.log("Fetching contributors for project ", project.name)
            const response = await octokit.request(`GET ${project.contributors_url.replace('https://api.github.com', '')}`)
            idToContributors[project.id] = response.data
        }
 
        fs.writeFile('./idToContributors.js', `
        const idToContributors = ${JSON.stringify(idToContributors)};
        export default idToContributors;
        `, err => {
            console.log("Error writing projects JS", err)
        })
    
    } catch (e) {
        console.log(e)
        process.exit(-1)
    }
};

fetch()