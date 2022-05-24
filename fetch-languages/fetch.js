import { Octokit } from '@octokit/action';
import fs from 'fs';
import projects from '../projects.js';

async function fetch(){
    const octokit = new Octokit()

    try {
        const idToLanguages = {}

        for (const project of projects) {
            console.log("Fetching languages for project ", project.name)
            const response = await octokit.get(`GET ${project.languages_url.replace('https://api.github.com')}`)
            idToLanguages[project.id] = response.data
        }
 
        fs.writeFile('./idToLanguages.js', `
        const idToLanguages = ${JSON.stringify(idToLanguages)};
        export default idToLanguages;
        `, err => {
            console.log("Error writing projects JS", err)
        })
    
    } catch (e) {
        console.log(e)
        process.exit(-1)
    }
};

fetch()