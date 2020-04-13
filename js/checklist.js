let incompleteBugsList=document.querySelector("ul");

incompleteBugsList.addEventListener('click', function(ev){
    if (ev.target.tagName === 'LI') {
  ev.target.classList.toggle('checked');
  }
}, false)
