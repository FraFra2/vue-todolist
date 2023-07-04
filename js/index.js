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
            this.todos.trim(index, 1);
        },
        changeClass(){
            
        }
    }

}).mount("#app");