function WalkNodes(element) {
    const childNodes = Array.from(element.childNodes)
    for (let i = 0; i < childNodes.length; i++) {
        if (childNodes[i].nodeType == 1) {
            WalkNodes(childNodes[i])
        } else if (childNodes[i].nodeType == 3) {
            LinkCitation(childNodes[i])
        }
    }
}

function MakeRefLink(val) {
    var ref = val.slice(1,-1)
    var a = document.createElement('a')
    a.href = "references/#ref-"+ref
    a.textContent = val
    return a
}

function LinkCitation(node) {
    var m = node.textContent.match(/\[\d+\]/g)
    if (m) {
        // console.log(m)
        // console.log(node.textContent)
        var text = node.textContent.split(/\[\d+\]/)
        // console.log(text)
        var out = []
        for (let i=0;i<text.length-1;i++) {
            out.push(text[i])
            out.push(MakeRefLink(m[i]))
        }
        // console.log(out)
        out.push(text[text.length-1])
        // console.log(out)

        node.replaceWith(...out)
    }
}

function LinkCitations() {
    WalkNodes(document.body)
}

waitForElm('body').then((elm)=>{
    LinkCitations()
})
