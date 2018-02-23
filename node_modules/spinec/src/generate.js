for (var i=0;i<frameworks.length; i++){
    var tile=document.createElement("materialize-card-image");
    tile.setAttribute("class","col s12 m6 l6 xl4");
    tile.setAttribute("img",frameworks[i].img);
    tile.setAttribute("content",frameworks[i].content);
    tile.setAttribute("action",frameworks[i].action);
    tile.setAttribute("actionLink",frameworks[i].actionLink);
    document.getElementById("tile-section").appendChild(tile);
}

