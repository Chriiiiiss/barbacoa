import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { stringify } from 'querystring'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'pages/articles')

export function getSortedPostsData(): {id: string, title: string, date: string, imgArticle: string}[] {
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map(fileName => {

        //  Here i'm removing the .md
        const id = fileName.replace(/\.md$/, '')

        // Here i'm reading the files
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Using gray-matter to parse the contents
        const matterResult = matter(fileContents)

        return {
            id: id,
            title: matterResult.data.title,
            date: matterResult.data.date,
            imgArticle: matterResult.data.imgArticle
        }
    })
    return allPostsData.sort(({date: a}, {date: b}) => {
        if(a < b) {
            return 1
        } else if (a > b) {
            return -1
        } else {
            return 0
        }
    })
}


export function getAllPostIds(): {params: {id: string}}[] {
    const fileNames = fs.readdirSync(postsDirectory)

    const id = fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        }
    })

    return id
}

export async function getPostData(id: string) {
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)
    const contentHtml = processedContent.toString()

    return {
        id : id,
        contentHtml,
        ...matterResult.data
    }
}

