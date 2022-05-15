import fs from 'fs'

function write(){
    const projects = process.env.PROJECTS

    const json = JSON.stringify(JSON.parse(projects))
    
    fs.writeFile('./projects.json', json, err => {
        console.log(err)
    })
}

write()