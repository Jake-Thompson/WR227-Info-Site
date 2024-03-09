fetch('/nav.html').then((res) => {
    res.text().then((t) => {
        let header = document.createElement('header')
        let main = document.createElement('main')
        header.innerHTML = t
        main.append(...document.body.childNodes)
        document.body.replaceChildren(header,main)
        SubMenuBgPos()
    })
})
document.title = document.title.replace('%pages%', window.location.pathname.replace(/^\/|\/$/g, '').split('/').map(x => {
    return x.replaceAll('-', ' ').replace(/\w+/g, (out) => {
        return out[0].toUpperCase() + out.slice(1).toLowerCase()
    })
}))