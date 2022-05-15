import axios from 'axios';
import fs from 'fs';

const REPOS_URL = "https://api.github.com/orgs/dropbox/repos"

async function fetch(){
    try {
        const projects = []

        let page = 1
        let shouldFetch = true

        while (shouldFetch) {
            const response = await axios.get(REPOS_URL, {
                params: {
                    sort: "updated",
                    per_page: 100,
                    page: page
                }
            })

            projects.push(...response.data)

            if (response.data.length != 100) shouldFetch = false
            else page++
        }
 
        fs.writeFile('./projects.json', json, err => {
            console.log(err)
        })
    } catch (e) {
        console.log(e)
        process.exit(-1)
    }
};

fetch()

