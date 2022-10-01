/*
    FileSystem
    https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_file_system
*/


async function readdir(rootDir){
    rootDir = rootDir || path.resolve(__dirname);
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}

async function walk (files, rootDir){

    for(let file of files){

        const fileFullPath = path.resolve(rootDir, file);
        console.log(fileFullPath)
        const stats = await fs.stat(fileFullPath);

        if(/\.git/g.test(fileFullPath)) continue;
        if (/node_modules/g.test(fileFullPath)) continue;



        if(stats.isDirectory()){
            readdir(fileFullPath);
            continue;
        }

        if (
            !/\.html$/g.test(fileFullPath)
          ) continue;

        console.log(file, stats.isDirectory());
    }
}


readdir('/JavaScript/TypeScript and JavaScript');


//Featch api
// fs.readdir(path.resolve(__dirname))
//     .then(files => console.log(files))
//     .catch(e => console.log(e));

