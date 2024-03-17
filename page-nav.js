fetch('nav.html').then((res) => {
    res.text().then((t) => {
        let header = document.createElement('header')
        let main = document.createElement('main')
        header.innerHTML = t
        main.append(...document.body.childNodes)
        
        document.body.replaceChildren(header,main)
        if (window.location.search == '?nav=no') header.hidden = true
        SubMenuBgPos()
    })
})
// document.title =  + ' | Informational Website | Jake Thompson'
var title_tmpl = document.head.querySelector('meta[name="title-tmpl"]').content
var crumbs = window.location.pathname.replace(/^\/|\/$/g, '').split('/').slice(1).map(x => {
    return x.replaceAll('-', ' ').replace(/\w+/g, (out) => {
        return out[0].toUpperCase() + out.slice(1).toLowerCase()
    })
}).reverse().join(' | ')

document.title = title_tmpl.replace('%pages%', crumbs)
