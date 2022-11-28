import fs from 'fs';
import path from 'path';

const jokesFileNamePath = path.join(process.cwd(), 'jokedata/jokes.txt');

export function getAllJokesData() {
    
    console.log("running getAllJokesData")
    const fileContents = fs.readFileSync(jokesFileNamePath, 'utf8');
    
    //const allJokesData = fileContents.split(/\r?\n/);
    
    let allJokesData = []

    const allLines = fileContents.split(/\r?\n/);

    for (const line of allLines){

        if (line == null || line==undefined){
            continue;
        } 

        const lineArray = line.split("---");
        if (lineArray == undefined || lineArray.length!=2){
            continue
        }

        allJokesData.push( { 
            'id': lineArray[0].trim(), 
            'joke': lineArray[1].trim()
        }) 

    }

    /*
    const allJokesData = fileContents.split(/\r?\n/).map((line) => {
        const lineArray = line.split("---") 
        
        if (lineArray != undefined && lineArray.length===2){
            const id = lineArray[0].trim();
            const joke = lineArray[1].trim();
            
            //console.log('id: ', id);
        
            return {
                id,
                joke,
            };
        }
       

        });
    */

    //console.log(' allJokesData ' ,  allJokesData);
    //console.log(' --- ' );
    return allJokesData;

    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
            id,
            ...matterResult.data,
        };
    });


    // Sort posts by date
    return allPostsData.sort(({ date: a }, { date: b }) => {
        if (a < b) {
            return 1;
        } else if (a > b) {
            return -1;
        } else {
            return 0;
        }
    });
}

export function getAllJokeIds() {

    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]

    console.log("running getAllJokeIds")
    const fileContents = fs.readFileSync(jokesFileNamePath, 'utf8');

    let allJokeIds = []

    const allLines = fileContents.split(/\r?\n/);

    for (const line of allLines){

        if (line == null || line==undefined){
            continue;
        } 

        const lineArray = line.split("---");
        if (lineArray == undefined || lineArray.length!=2){
            continue
        }

        allJokeIds.push( { 
            params: {
                id: lineArray[0].trim(),
            },
        }) 

    }

    return allJokeIds

    /*
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ''),
            },
        };
    });
    */
}


export async function getJokeData(id) {

    console.log("running getJokeData")
    const fileContents = fs.readFileSync(jokesFileNamePath, 'utf8');

    const allLines = fileContents.split(/\r?\n/);
    let jokeText = "";

    for (const line of allLines){

        if (line == null || line==undefined){
            continue;
        } 

        const lineArray = line.split("---");
        if (lineArray == undefined || lineArray.length!=2){
            continue
        }

        //const jokeId = parseInt(lineArray[0].trim())
       
        
        if(lineArray[0].trim() === id){
            jokeText = lineArray[1].trim();
            break;
        }
    }

    return { 
        'id': id, 
        'joke': jokeText
    } 

}


export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory);

    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ''),
            },
        };
    });
}



export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id and contentHtml
    return {
        id,
        contentHtml,
        ...matterResult.data,
    };
}

