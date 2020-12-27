function Task (_taskId, _taskName, _status) {
    this.taskId = _taskId;
    this.taskName = _taskName;
    this.status = _status;

    this.getRandomId = function(min, max){
        min = Math.ceil(min);
        max = Math.floor(max);
        return ("todo" + Math.floor(Math.random() * (max - min) + min));
    };

    this.getTaskName = function(){
        if(getElement("newTask").value === "") {
            return;
        }
        return getElement("newTask").value;
    };
}