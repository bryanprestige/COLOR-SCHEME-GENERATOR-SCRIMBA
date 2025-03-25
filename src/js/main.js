


document.addEventListener('DOMContentLoaded', () => {

    

})

async function getColor (){
    /*   const apiData = await getAPIData(`${location.protocol}//${location.hostname}${PORT}/api/read/events`);   */  
      /* const apiData = await getAPIData(`https://www.thecolorapi.com/id?hex=0048AB&rgb=0,53,121&hsl=215,100%,34%&cmyk=100,58,0,33&format=svg/GET`);   */  
      const apiData = await getAPIData(` https://www.thecolorapi.com/scheme?hex=8A5751`);    
      console.log(apiData, 'apidata color')
}