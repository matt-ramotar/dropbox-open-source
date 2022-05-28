const projects = require('./projects.json')
const fs = require('fs')

async function topics(){
    const topicToCount = {}

    for (const project of projects) {
        for (const topic of project.topics) {
            if (!topicToCount[topic]) topicToCount[topic] = 1
            else topicToCount[topic] += 1
        }
    }

    const sorted = Object.entries(topicToCount).sort((a, b) => b[1] - a[1])
}

topics()