import axios from 'axios'
const host = 'https://www.easy-mock.com/mock/'

const getNewShare=()=>{
    return axios.get(host+"5bd69e55e4a7377be9531536/example/newShare")
        .then( (res)=> res.data.data )
        .catch(function (error) {
            console.log(error);
        })
}

const getSearchResult = (query) => {
    let url = 'https://www.easy-mock.com/mock/5bd69e55e4a7377be9531536/example/search';
    return    axios.get(url+'?name='+query)
    .then( (res) => res.data.result ) 
    .catch( function(error) {
        console.log(error);
    })
}

export {getNewShare, getSearchResult};