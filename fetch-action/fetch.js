import axios from 'axios';
import fs from 'fs';

const REPOS_URL = "https://api.github.com/orgs/dropbox/repos"

async function fetch(){
    try {
        const projects = []
        const idToLanguages = {}

        let page = 1
        let shouldFetch = true

        while (shouldFetch) {
            const repositories = await fetchRepositories(page)

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
    
        for (const project of projects) {
            const languages = await fetchLanguages(project)
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

    } catch (e) {
        console.log(e)
        process.exit(-1)
    }
};

async function fetchRepositories(page) {
    const response = await axios.get(REPOS_URL, {
        params: {
            sort: "updated",
            per_page: 100,
            page: page
        },
        headers: {
            authorization: `Bearer ${process.env.GITHUB_TOKEN}`
        }
    })

    return response.data
}

async function fetchLanguages(repository) {
    const response = await axios.get(repository.languages_url, {
        headers: {
            authorization: `Bearer ${process.env.GITHUB_TOKEN}`
        }
    })
    return response.data
}

fetch()