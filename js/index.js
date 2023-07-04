const {createApp} = Vue

createApp({
    data(){
        return{
            isDone: true,
            hover: false,
            currentTask: "",
            todos: [
                {
                    task: "Fare la spesa",
                    done: true
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
            console.log(this.todos[index]);
        },
        changeClass(){
            
        }
    }

}).mount("#app");