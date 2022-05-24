import { Octokit } from '@octokit/action';
import fs from 'fs';

const REPOS_URL = "/orgs/dropbox/repos"

async function fetch(){
    try {
        const octokit = new Octokit()

        const projects = await handleProjects(octokit)
        await handleLanguages(octokit, projects)

    } catch (e) {
        console.log(e)
        process.exit(-1)
    }
};

async function fetchRepositories(octokit, page) {
    const response = await octokit.request(`GET ${REPOS_URL}`, {
        params: JSON.stringify({
            sort: "updated",
            per_page: 100,
            page: page
        })});

    return response.data
}

async function handleProjects(octokit) {
    const projects = []

    let page = 1
    let shouldFetch = true

    while (shouldFetch) {
        const repositories = await fetchRepositories(octokit, page)

        projects.push(...repositories)

        if (repositories.length != 100) shouldFetch = false
        else page++
    }

    fs.writeFile('./projects.json', JSON.stringify(projects), err => {
        console.log(err)
    })

    const projectsStr = `
    const projects = [${projects.map(project => JSON.stringify(project))}];
    export default projects;
    `
    
    fs.writeFile('./projects.js', projectsStr, err => {
        console.log(err)
    })

    return projects
}

async function handleLanguages(octokit, projects) {

    const idToLanguages = {}

       
    for (const project of projects) {
        const languages = await fetchLanguages(octokit, project)
        if (languages) {
            idToLanguages[project.id] = languages
        } 
    }

    const idToLanguagesStr = `
    const idToLanguages = ${JSON.stringify(idToLanguages)};
    export default idToLanguages;
    `

    fs.writeFile('./idToLanguages.js', idToLanguagesStr, err => {
        console.log(err)
    })
    
}

async function fetchLanguages(octokit, repository) {
    const response = await octokit.request(`GET ${repository.languages_url.replace("https://api.github.com", '')}`);
    return response.data
}

fetch()