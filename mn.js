function addAttributes() {
    var links = document.getElementsByTagName('a');
    
    for (var i = 0; i < links.length; i++) {
      if (links[i].hostname !== window.location.hostname) {
        links[i].setAttribute('rel', 'nofollow noopener noreferrer');
      }
    }
  }
window.onload = addAttributes;

  const shareButton = document.querySelector('.share-button');

  if (navigator.share) {
    shareButton.addEventListener('click', (event) => {
      event.preventDefault();
      
      navigator.share({
        title: document.title,
        url: window.location.href
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing:', error));
    });
  } else {
    
  }

  var prevScrollpos = window.pageYOffset;

  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("ATnav").style.bottom = "10px";
    } else {
      document.getElementById("ATnav").style.bottom = "-80px";
    }
    
    prevScrollpos = currentScrollPos;
  };
function related_temp(t){return(t.title?"<div class='widget-title position-relative  mb-3 text-uppercase fw-light'><span>"+t.title+"</span></div>":"")+"<div class='row row-cols-sm-2'>"+t.posts.map(function(t,e){return"<article class='mb-4'><div class='h-100 overflow-hidden rounded position-relative border jt-border-light bg-archive shadow-sm'>"+(t.img?"<div class='item-thumbnail'><a class='jt-bg-light d-block ratio ratio-21x9' href='"+t.url+"'><img alt='"+t.title+"' class='object-cover lazy-"+t.grup_id+" lazyload' data-src='"+t.img+"' loading='lazy' src='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='/></a></div>":"")+"<div class='item-content p-4'><h2 class='item-title fs-6 mb-2' itemprop='headline'><a class='text-reset' href='"+t.url+"'>"+t.title+"</a></h2><div class='item-meta text-secondary d-flex flex-wrap fw-light'>"+("Unknown"!=t.author?"<small class='me-2'><svg aria-hidden='true' class='me-1 jt-icon'><use xlink:href='#i-user'/></svg>"+t.author+"</small>":"")+"<small class='me-2'><svg aria-hidden='true' class='me-1 jt-icon'><use xlink:href='#i-clock'/></svg>"+t.date+"</small></div></div></div></article>"}).join("")+"</div>"}

function sitemap_temp(t){return"<div class='accordion'>"+t.categories.map(function(t,e){return"<div class='accordion-item'><input "+(0==e?"checked":"")+" id='sitemap-list-"+e+"' name='sitemap' type='radio' class='d-none'/><label for='sitemap-list-"+e+"' class='accordion-header accordion-button collapsed'>"+t.term+"</label><div class='accordion-collapse collapse border-top jt-border-light d-block-check'><div class='accordion-body'><div class='sitemap-list' data-label='"+t.term+"' data-func='sitemap_list_temp' data-items='9999'><div class='text-center'><div class='spinner-grow text-light' role='status'><span class='visually-hidden'>Loading...</span></div></div></div></div></div></div>"}).join("")+"</div>"}function sitemap_list_temp(t){return"<ul class='list-unstyled fs-7'>"+t.posts.map(function(t,e){return"<li class='mb-2'><a href='"+t.url+"'>"+t.title+"</a></li>"}).join("")+"</ul>"}function sitemap_cb(t){var e=".sitemap-list";null!==document.querySelector(e)&&Defer.dom(e,100,"loaded",jo.loadCustomPosts)}function related_inline_temp(t){return"<div class='px-3 py-2 mb-4 border border-3 jt-border-light rounded'>"+(t.title?"<div class='fw-light pb-3'><span>"+t.title+"</span></div>":"")+"<ul class='ps-3 fw-bold'>"+t.posts.map(function(t,e){return"<li class='mb-2'><a href='"+t.url+"'>"+t.title+"</a></li>"}).join("")+"</ul></div>"}

function sidebar_temp(t){return(t.title?"<div class='widget-title position-relative fs-6 mb-3'><span>"+t.title+"</span></div>":"")+"<div class='mb-4'>"+t.posts.map(function(t,e){return"<div class='border rounded item-post d-flex mb-3 p-1'>"+(t.img?"<div class='item-thumbnail me-3' style='width:155px'><a class='rounded jt-bg-light overflow-hidden d-block ratio ratio-16x9' href='"+t.url+"'><img alt='"+t.title+"' class='object-cover lazy-"+t.grup_id+" lazyload' data-src='"+t.img+"' loading='lazy' src='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='/></a></div>":"")+"<div class='item-content col'><h3 class='item-title fs-7 mb-2' itemprop='headline'><a class='text-reset' href='"+t.url+"'>"+t.title+"</a></h3><div class='item-meta text-secondary d-flex flex-wrap fs-8'><small class='me-2'><svg aria-hidden='true' class='me-1 jt-icon'><use xlink:href='#i-clock'/></svg>"+t.date+"</small></div></div></div>"}).join("")+"</div>"}
function toc_temp(o){var r=0,d=1;return"<div id='toc-post' class='d-inline-block border px-3 py-2 mb-2 jt-bg-light rounded'><input id='toc-toggle' class='d-none' autocomplete='off' type='checkbox'/><label for='toc-toggle' class='toc-toggler d-flex align-items-center'><span class='fw-light pe-3'>Table of content</span><span class='dropdown-toggle ms-auto'></span></label>"+o.map(function(t,e){var i=t.level,l="";if(0==e)l+='<ul class="ps-3 pt-3 d-none d-block-check fs-7">';else if(r<i)l+='<ul class="ps-3 pt-2 fs-8"><li>',d++;else if(i<r&&1<d){for(var s=0;s<r-i;s++)l+="</li></ul>";d--}if(r=i,l+=0<e?"</li>":"",l+='<li class="mb-2">',l+='<a class="text-reset hover-text-primary" href="#'+t.id+'">'+t.title+"</a>",e==o.length-1)for(var a=1;a<r;a++)l+="</li></ul>";return l}).join("").replace(/<li>\s*<\/li>/gi,"")+"</div>"}

function sidebar(t){return(t.title?"<div class='border-bottom position-relative fs-6 mb-3'><span>"+t.title+"</span></div>":"")+"<div class='mb-4 border-bottom'>"+t.posts.map(function(t,e){return"<div class='item-post d-flex mb-3 p-1 '>"+(t.img?"<div class='item-thumbnail me-3' style='width:120px'><a class='jt-bg-light overflow-hidden d-block ratio ratio-16x9' href='"+t.url+"'><img alt='"+t.title+"' class='object-cover lazy-"+t.grup_id+" lazyload' data-src='"+t.img+"' loading='lazy' src='data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='/></a></div>":"")+"<div class='item-content col'><p class='item-title fs-7 fw-bold mb-2' itemprop='headline'><a class='text-reset' href='"+t.url+"'>"+t.title+"</a></h3><div class='item-meta d-none text-secondary d-flex flex-wrap fs-8'><small class='me-2'><svg aria-hidden='true' class='me-1 jt-icon'><use xlink:href='#i-clock'/></svg>"+t.date+"</small></div></div></div>"}).join("")+"</div>"}

function layout2_temp(e) {
   return '' + (e.title ? '<div class="widget-title mb-3 text-uppercase fw-light"><span>' + e.title + '</span></div>' : '') + '<div class="widget-content row">' + e.posts.map(function (data, i) {
    return i == 0 ? '<article class="mb-4"><div class="d-sm-flex overflow-hidden rounded-3 border jt-border-light bg-archive shadow-sm">' + (data.img ? ' <div class="item-thumbnail col-sm-6"> <a class="d-block jt-bg-light overflow-hidden rounded-3 ratio ratio-21x9 ratio-sm-4x3" href="' + data.url + '"> <img alt="' + data.title + '" class="lazy-' + data.grup_id + ' lazyload" data-src="' + data.img + '" loading="lazy" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="/> </a> </div>' : '') + '<div class="item-content col p-4"><h3 class="item-title fs-6 fs-md-4 mb-3"><a class="text-reset" href="' + data.url + '">' + data.title + '</a></h3><p class="item-snippet d-none d-md-block mb-3">' + (data.summary.length > 100 ? data.summary.substr(0, 150) + '...' : data.summary) + '</p><div class="item-meta text-secondary d-flex flex-wrap fw-light">' + (data.author != 'Unknown' ? '<small class="me-2"><svg aria-hidden="true" class="me-1 jt-icon"><use xlink:href="#i-user"/></svg>' + data.author + '</small>' : '') + '<small class="me-2"><svg aria-hidden="true" class="me-1 jt-icon"><use xlink:href="#i-clock"/></svg>' + data.date + '</small></div></div></div></article>' : ''
  }).join('') + '</div>'
}

