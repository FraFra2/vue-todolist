const {createApp} = Vue

createApp({
    data(){
        return{
            isDone: true,
            hover: false,
            inputTask: "",
            currentTask: {
                task: "",
                done: false
            },
            btnInpClasses: "rounded-xl p-[1rem] ml-2 mb-5",
            todos: [
                {
                    task: "Fare la spesa",
                    done: false
                },
                {
                    task: "Rinnovare Carta Identità",
                    done: false
                },
                {
                    task: "Pagare Affitto Luglio",
                    done: false
                },
                {
                    task: "Pagare Bollette",
                    done: false
                },
            ]
        }
    },
    methods: {
        deleteTask(index){
            this.todos.splice(index, 1);
        },
        changeClass(index){
            if(!this.todos[index].done){
                this.todos[index].done = true;
            }else{
                this.todos[index].done = false;
            }
        },
        addTask(){
            this.currentTask.task = this.inputTask;
            let copyobj = {
                ...this.currentTask
            }
            this.todos.push(copyobj);
            this.inputTask = "";
            this.inputTask.task = "";
        }
    }

}).mount("#app");