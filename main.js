function SubMenuBgPos() {
    var head = document.querySelector(".head")
    for (let el of document.querySelectorAll("li:has(> ul.menu-sub)")) {
        el.addEventListener('mouseover', (event) => {
            let zz = event.target.parentElement.querySelector(".menu-sub")
            let r = zz.getBoundingClientRect()
            zz.style.backgroundPosition = `-${window.scrollX + r.left}px -${window.scrollY + r.top}px`
            let xs = head.getBoundingClientRect()
            zz.style.backgroundSize = `${xs.width}px auto`
        })
    }
}