(function(){
  var l;try{l=JSON.parse(localStorage.getItem("duelo_lang"))}catch(e){}
  var q=(location.search.match(/[?&]lang=(pt|en)/)||[])[1];if(q)l=q;
  if(l!=="pt"&&l!=="en")l=/^pt/i.test(navigator.language||"")?"pt":"en";
  function set(x){l=x;document.documentElement.lang=x;
    document.querySelectorAll("article[data-lang]").forEach(function(a){a.hidden=a.getAttribute("data-lang")!==x});
    document.querySelectorAll(".lg button").forEach(function(b){b.setAttribute("aria-pressed",b.getAttribute("data-l")===x)});
    var t=document.title;document.title=x==="en"?t.replace("Privacidade","Privacy").replace("Termos","Terms").replace("Duelo de Onzes","XI Duel"):t.replace("Privacy","Privacidade").replace("Terms","Termos").replace("XI Duel","Duelo de Onzes");
    var top=document.querySelector(".top a");if(top)top.textContent=x==="en"?"← XI Duel":"← Duelo de Onzes"}
  document.querySelectorAll(".lg button").forEach(function(b){b.onclick=function(){set(b.getAttribute("data-l"))}});
  set(l);
})();
