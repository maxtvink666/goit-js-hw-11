import{a as m,i as a,S as u}from"./assets/vendor-qbZl2uZI.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const y="54674078-cc29e36c5df6708fa2caeef42";function h(r){return m({method:"get",url:"https://pixabay.com/api/",params:{key:y,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40}}).then(function(t){return console.log(t.data.hits),t.data}).catch(function(t){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})})}const p=u.default||u;let l;function g(r){const t=document.querySelector(".gallery"),s=r.map(i=>`<li class="photo-card">
            <a href="${i.largeImageURL}">
                <img src="${i.webformatURL}" alt="${i.tags}"/>
            </a>
            <div class="info">
            <div class="info-item">
                <p class="info-item">
                    <b>Likes</b>${i.likes}
                </p>
                </div>
                <div class="info-item">
                <p class="info-item">
                    <b>Views</b>${i.views}
                </p>
                </div>
                <div class="info-item">
                <p class="info-item">
                    <b>Comments</b>${i.comments}
                </p>
                </div>
                <div class="info-item">
                <p class="info-item">
                    <b>Downloads</b>${i.downloads}
                </p>
                </div>
            </div>
        </li>`).join("");t.innerHTML=s,l?l.refresh():l=new p(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,closeText:"×",navText:["←","→"]})}function b(){const r=document.querySelector(".gallery");r.innerHTML=""}function v(){document.querySelector(".loader").classList.remove("hidden")}function d(){document.querySelector(".loader").classList.add("hidden")}const f=document.querySelector(".form"),L=document.querySelector(".js-search-query");let n="";f.addEventListener("submit",S);function S(r){if(r.preventDefault(),b(),v(),n=r.currentTarget.searchText.value.trim(),f.reset(),n===""){a.info({title:"Info",position:"topRight",message:"Please enter a search query!"}),d();return}L.textContent=`Search query : "${n}"`,h(n).then(t=>{t.hits.length===0&&a.info({title:"Info",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),g(t.hits)}).catch(t=>{a.error({title:"Error",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}).finally(()=>{d()})}
//# sourceMappingURL=index.js.map
