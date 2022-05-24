import axios from 'axios';
import fs from 'fs';
import projects from '../projects';

async function fetch(){
    try {
        const idToLanguages = {}

        for (const project of projects) {
            const response = await axios.get(project.languages_url)
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