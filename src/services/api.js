const axios = require('axios');

async function getGallery(){

    try {
        const serverPath = `${process.env.VUE_APP_SERVER}/gallery`;
        const gallaryImages = await axios.get(serverPath,{
             headers: {
            'Access-Control-Allow-Origin': '*',
          }});
        return gallaryImages.data.map(imgName => ({path: `${serverPath}/${imgName}`, name: imgName}));
    }
    catch(err) {
        return [];
    }
}

async function getBackgrouds() {
    try {
        const serverPath = `${process.env.VUE_APP_SERVER}/bg-options`;
        const bgsImages = await axios.get(serverPath);
        return bgsImages.data.map(imgName => ({path: `${serverPath}/${imgName}`, name: imgName}));
    }
    catch(err) {
        return [];
    }
}

function saveImage(){

}

function addBackground(){

}

export {
    getGallery,
    getBackgrouds,
    saveImage,
    addBackground
};