const serchForm=document.getElementById('ser-form');
const serchbtn=document.getElementById('search');
const serchbox=document.getElementById('serch-box');
const show_more_btn=document.getElementById('show-more');
const result1=document.getElementById('search-result');

const key="mjUd8eVYKodXdY7sLO6xySk6bRVVueKtAlTCfyI95ZQ";

let keyword="";
let page=1;

//find the images on unpalsh using api

const loadimage= async()=>{
    keyword=serchbox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${key}&per_page=15`;
    const res= await fetch(url);
    const data=await res.json();
     const results=data.results;
     if(page===1 || page===2||page===3||page===4||page===5||page===6||page===7||page===8||page===9){
        result1.innerHTML="";
     }
     results.map((result)=>{
        const image=document.createElement('img');
         image.src=result.urls.small;
         const imglink=document.createElement('a');
         imglink.href=result.links.html;
         imglink.target="_blank";
         imglink.appendChild(image);
         result1.appendChild(imglink);
     });
     show_more_btn.style.display="block";

}

//serch button event istner

serchbtn.addEventListener('click',(e)=>{
    e.preventDefault();
    loadimage();
   
});

//show more button event istner
show_more_btn.addEventListener('click',(e)=>{
page++;

loadimage();
});


