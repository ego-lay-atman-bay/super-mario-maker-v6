var pipeColor

function setText(name,img) {
    document.getElementById('blockText').value = "1{texture:"+name+"}";
    var image = document.getElementById('selectedBlock')
    image.src = img
}

function getBlocks() {

    var blocks = ["00001011","00011111","00010110","00001000","00011000","00010000","00000010","01000010","01000000","00000000","00001010","01101011","11111111","11010110","00010010","01001000","01010000","00011010","01001010","01011000","01010010","00011011","01101000","11111000","11010000","00011110","01001011","01101010","01111000","11011000","01010110","11010010","01011010","01011011","01111010","11011010","01011110","11011011","01011111","01111011","11111010","11011110","01111110","01111111","11111011","11011111","11111110"]

    blocks.forEach(x => {

        var para = document.createElement('input');
        var node = document.createTextNode(x);
        para.appendChild(node);
        para.type = "image"
        para.src = "images/blocks/" + x + ".png"
        para.name = x
        para.id = "block " + x
        para.width = 32
        para.style = 'margin: 5px'
        var element = document.getElementById("blocks");
        element.appendChild(para);

        var anchor = document.getElementById("block " + x)
        var click = document.createAttribute("onclick")
        click.value = 'setText(this.name,this.src)'
        anchor.setAttributeNode(click)

        var anchor = document.getElementById("block " + x)
        var cl = document.createAttribute("class")
        cl.value = "btTxt submit"
        anchor.setAttributeNode(cl)
    });
}


function setPipeText(name,img) {
    document.getElementById('pipeText').value = "20{texture:"+name+"}{color:"+pipeColor+"}";
    var image = document.getElementById('selectedPipe')
    image.src = img
}

function getPipe() {

    var n = document.getElementById("pipes")

    while (n.hasChildNodes()) {
        n.removeChild(n.firstChild);
    }

    var pipes = ["000001", "100001", "100000", "000100", "001100", "001000", "000101", "001001", "100101", "101001", "100100", "101000", "000111", "100110", "001101", "101100", "011001", "111000"]

    pipes.forEach(x => {

        var para = document.createElement('input');
        var node = document.createTextNode(x);
        para.appendChild(node);
        para.type = "image"
        para.src = "images/pipes/" + pipeColor + "/" + x + ".png"
        para.name = x
        para.id = "pipe " + x
        para.width = 32
        para.style = 'margin: 5px'
        var element = document.getElementById("pipes");
        element.appendChild(para);

        var anchor = document.getElementById("pipe " + x)
        var click = document.createAttribute("onclick")
        click.value = 'setPipeText(this.name,this.src);'
        anchor.setAttributeNode(click)

        var anchor = document.getElementById("pipe " + x)
        var cl = document.createAttribute("class")
        cl.value = "btTxt submit"
        anchor.setAttributeNode(cl)
    });
}

function setPipeColor(clr) {
    pipeColor = clr
    getPipe()
}
