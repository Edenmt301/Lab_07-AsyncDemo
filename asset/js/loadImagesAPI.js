// UI Vars 
const postDiv4 = document.querySelector('.carousel-inner');

//Load Every thing ....
document.addEventListener("DOMContentLoaded", () => {
    //load_fromPlaceHolder();
    //loadDataNew();
});


//async await
async function load_fromPlaceHolder_new_images() {
    const response=await fetch('https://picsum.photos/v2/list')
    const data=await response.json();

    return data
}


function loadDataNew() {    
    load_fromPlaceHolder_new_images().then(function (posts){
        let output =''
      let i=0
      posts.forEach(function(post) { 
          if (i===0){
            output +=  `<div class="carousel-item active">
            <img src="https://picsum.photos/id/0/5616/3744" height="40%" width="70%" class="d-block w-100" alt="...">
          </div>`; 
          i++
          }   
        else{    
        output +=  `
        <div class="carousel-item ">
            <img class="d-block w-100" src="${post.download_url}" alt="Third slide">
          </div>          `;  // same code as previous with few update
        }
    });
    setTimeout(()=>{
      postDiv4.innerHTML = output;
      console.log(postDiv4.innerHTML)
} , 200);
      
      
})
    .catch(function(err) {
        console.log(err);
    });
}