var e=document.getElementById("largeImg");document.getElementById("thumbs").addEventListener("click",function(t){t.preventDefault();var n=t.target;if("IMG"===n.tagName&&(n=n.parentElement),"A"===n.tagName){var a=new URL(n.getAttribute("href"),window.location.origin);e.src=a.href}});
//# sourceMappingURL=index.2ebf5e78.js.map
