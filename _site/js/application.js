(function(){
  [].forEach.call(document.querySelectorAll('img[data-src]'), function (img) {
    img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = function () {
      img.removeAttribute('data-src');
    };
  });
})()

var setBorder = (el, borderStyle) => el.style.borderStyle = borderStyle;
var setActive = (el) => {
  let $siblingEls = el.parentElement.children
  for (let i = 0; i < $siblingEls.length; i++) {
    if ($siblingEls[i] === el) continue;
    $siblingEls[i].classList.remove("active");
  }
  el.classList.add("active");
}

var toggleCategoryTab = (el) => {
  let categoryEl = document.getElementById('category-list');
  let iconEl = document.getElementsByClassName('open-close-icon')[0];
  if (el.checked) {
    categoryEl.classList.remove('hide');
    iconEl.classList.add('open');
  }
  else {
    categoryEl.classList.add('hide');
    iconEl.classList.remove('open');
  }
}
