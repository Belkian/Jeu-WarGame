class LigneDePlacement{
    constructor(){

    }
    allowDrop(ev) {
        ev.preventDefault();
    }
    
    drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }
    
    drop(ev) {
        ev.preventDefault();
        let data = ev.dataTransfer.getData("text");
        ev.target.appendChild(document.getElementById(data));
    }
}