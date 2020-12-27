function TaskList() {
    this.arr = [];

    this.findIndex = function (taskId) {
        return this.arr.findIndex(function(item, i) {
            return taskId === item.taskId;
        })
    };

    this.addTask = function (task){
        this.arr.push(task);
    };

    this.deleteTask = function (taskId) {
        var viTri = this.findIndex(taskId);
        if(viTri !== -1){
            this.arr.splice (viTri, 1);
        }
    };

    this.getTaskById = function (taskId) {
        var viTri = this.findIndex(taskId);
        if (viTri !== -1){
            return this.arr[viTri];
        }
    };

    this.updateTask = function (task){
        var viTri = this.findIndex(taskId);
        if (viTri !== -1){
            this.arr[viTri] = task;
        }
    };


}