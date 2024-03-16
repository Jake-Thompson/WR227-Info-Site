var resize_container = document.querySelector('.resize-container');
// var resize_content = resize_container.querySelector('.resize-content');
var resize_content = document.querySelector('.resize-content');
var rate = 0.7;
var rec = resize_container.getBoundingClientRect()
console.log(rec)
var container_height = rec.height*rate;
var container_width = rec.width*rate;

resize_content.style.transform = "scale("+rate+")"
// .css({transform: "scale("+rate+")"})
// resize_container.css({height: container_height})
resize_container.style.height = container_height+'px'
resize_container.style.width = container_width+'px'
