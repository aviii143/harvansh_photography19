!function(p){var n=[],o=!1,f=!1,u={interval:250,force_process:!1},s=p(window),c=[];function d(){f=!1;for(var e=0,r=n.length;e<r;e++){var t=(i=n[e],p(i).filter(function(){return p(this).is(":appeared")}));if(t.trigger("appear",[t]),c[e]){var a=c[e].not(t);a.trigger("disappear",[a])}c[e]=t}var i}p.expr.pseudos.appeared=p.expr.createPseudo(function(e){return function(e){var r=p(e);if(!r.is(":visible"))return!1;var t=s.scrollLeft(),a=s.scrollTop(),i=r.offset(),n=i.left,o=i.top;return o+r.height()>=a&&o-(r.data("appear-top-offset")||0)<=a+s.height()&&n+r.width()>=t&&n-(r.data("appear-left-offset")||0)<=t+s.width()}}),p.fn.extend({appear:function(e,r){return p.appear(this,r),this}}),p.extend({appear:function(e,r){var t,a=p.extend({},u,r||{});if(!o){var i=function(){f||(f=!0,setTimeout(d,a.interval))};p(window).scroll(i).resize(i),o=!0}a.force_process&&setTimeout(d,a.interval),t=e,n.push(t),c.push()},force_appear:function(){return!!o&&(d(),!0)}})}("undefined"!=typeof module?require("jquery"):jQuery);