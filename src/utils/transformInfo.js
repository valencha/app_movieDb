

function transformInfo(info) {
  
    const APIKEY = '2c73b0f220a02912d9c2cd39c09588e2';
    const SERVER = 'https://api.themoviedb.org';
    
    var type;
    var action;
    var plural;
    var interaction;
    
    return{
        url: `${SERVER}/3/${type}/movie${plural}?${action}=${interaction}&api_key=${APIKEY}`,
    }
    
}
export default transformInfo;