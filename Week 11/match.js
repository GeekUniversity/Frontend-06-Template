function match(selector, element) {
    let tagSel = selector.match(/^[\w]+/g);
    let idSel = selector.match(/(?<=#)([\w\d\-_]+)/g);
    let classSel = selector.match(/(?<=\.)([\w\d\-_]+)/g);

    if (tagSel !== null) {
        if (element.tagName.toLowerCase() !== tagSel[0]) {
            return false;
        }
    }

    if (idSel !== null) {
        let attributes = element.attributes['id'].value;
        let attrArr = attributes.split(' ');
        if (attrArr.length != 0) {
            for (let selector of idSel) {
                if (attrArr.indexOf(selector) === -1) {
                    return false;
                }
            }
        }
    }

    if (classSel !== null) {
        let attributes = element.attributes['class'].value;
        let attrArr = attributes.split(' ');
        if (attrArr.length != 0) {
            for (let selector of classSel) {
                if (attrArr.indexOf(selector) === -1) {
                    return false;
                }
            }
        }
    }

    return true;
}


// match("div #id.class", document.getElementById("id"));
