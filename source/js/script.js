// Checking Webp support
!function(e,n,A){function o(e,n){return typeof e===n}function t(e){var n=r.className,A=Modernizr._config.classPrefix||"";if(l&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+A+"no-js(\\s|$)");n=n.replace(o,"$1"+A+"js$2")}Modernizr._config.enableClasses&&(n+=" "+A+e.join(" "+A),l?r.className.baseVal=n:r.className=n)}function a(){var e,n,A,t,a,i,r;for(var l in f)if(f.hasOwnProperty(l)){if(e=[],n=f[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(A=0;A<n.options.aliases.length;A++)e.push(n.options.aliases[A].toLowerCase());for(t=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],r=i.split("."),1===r.length?Modernizr[r[0]]=t:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=t),s.push((t?"":"no-")+r.join("-"))}}function i(e,n){if("object"==typeof e)for(var A in e)c(e,A)&&i(A,e[A]);else{e=e.toLowerCase();var o=e.split("."),a=Modernizr[o[0]];if(2==o.length&&(a=a[o[1]]),"undefined"!=typeof a)return Modernizr;n="function"==typeof n?n():n,1==o.length?Modernizr[o[0]]=n:(!Modernizr[o[0]]||Modernizr[o[0]]instanceof Boolean||(Modernizr[o[0]]=new Boolean(Modernizr[o[0]])),Modernizr[o[0]][o[1]]=n),t([(n&&0!=n?"":"no-")+o.join("-")]),Modernizr._trigger(e,n)}return Modernizr}var s=[],r=n.documentElement,l="svg"===r.nodeName.toLowerCase(),f=[],u={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var A=this;setTimeout(function(){n(A[e])},0)},addTest:function(e,n,A){f.push({name:e,fn:n,options:A})},addAsyncTest:function(e){f.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=u,Modernizr=new Modernizr;var c;!function(){var e={}.hasOwnProperty;c=o(e,"undefined")||o(e.call,"undefined")?function(e,n){return n in e&&o(e.constructor.prototype[n],"undefined")}:function(n,A){return e.call(n,A)}}(),u._l={},u.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},u._trigger=function(e,n){if(this._l[e]){var A=this._l[e];setTimeout(function(){var e,o;for(e=0;e<A.length;e++)(o=A[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){u.addTest=i}),Modernizr.addAsyncTest(function(){function e(e,n,A){function o(n){var o=n&&"load"===n.type?1==t.width:!1,a="webp"===e;i(e,a&&o?new Boolean(o):o),A&&A(n)}var t=new Image;t.onerror=o,t.onload=o,t.src=n}var n=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],A=n.shift();e(A.name,A.uri,function(A){if(A&&"load"===A.type)for(var o=0;o<n.length;o++)e(n[o].name,n[o].uri)})}),a(),t(s),delete u.addTest,delete u.addAsyncTest;for(var p=0;p<Modernizr._q.length;p++)Modernizr._q[p]();e.Modernizr=Modernizr}(window,document);

// Parallax
document.addEventListener("mousemove", parallax);

function parallax(event) {
  document.querySelectorAll(".parallax").forEach((shift) => {
    const position = parseFloat(shift.getAttribute("data-parallax"));
    const x = (window.innerWidth - event.pageX * position) / 90;
    const y = (window.innerHeight - event.pageY * position) / 90;

    shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

// Accordion
const accordionItems = document.querySelectorAll(".faq__accordion");

accordionItems.forEach((item) => {
  const button = item.querySelector(".faq__accordion-button");
  const content = item.querySelector(".faq__accordion-content");

  button.addEventListener("click", () => {
    item.classList.toggle("faq__accordion--active");
  });
});

// Main Nav
const navContainer = document.querySelector(".main-nav");
const navToggle = navContainer.querySelector(".main-nav__button-open");

navContainer.classList.remove("main-nav--no-js");

navToggle.addEventListener("click", () => {
  navContainer.classList.toggle("main-nav--opened");
});

// Smooth scrolling up

document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopButton = document.getElementById("scrollToTop");
  scrollToTopButton.addEventListener("click", handleScrollToTop);

  function handleScrollToTop(e) {
    e.preventDefault();
    scrollToTop(1000);
  }

  function scrollToTop(duration) {
    const start = window.scrollY;
    const startTime = performance.now();
    const scrollDuration = duration;

    function animateScroll(currentTime) {
      const elapsedTime = currentTime - startTime;
      const scrollTo = easeInOutCubic(elapsedTime, start, -start, scrollDuration);
      window.scrollTo(0, scrollTo);

      if (elapsedTime < scrollDuration) {
        requestAnimationFrame(animateScroll);
      }
    }

    requestAnimationFrame(animateScroll);
  }

  function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t * t + b;
    t -= 2;
    return (c / 2) * (t * t * t + 2) + b;
  }
});
