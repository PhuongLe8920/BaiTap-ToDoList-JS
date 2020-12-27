function Validation(){
    this.checkNull = function (input, spanId, mess){
        if (input === ""){
            // alert("Task empty!");
            getElement("notiInput").style.display = "block";
            getElement("notiInput").innerHTML = "Empty task";
            return false;
        }
        return true;
    };

    
}