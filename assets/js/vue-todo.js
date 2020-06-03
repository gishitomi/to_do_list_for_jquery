var app = new Vue({
    el: '#app',
    data: {
        newItem: '',
        todos: [],
        dones: ''
    },
    methods: {
        addBtn: function(event) {
            if (this.newItem == '') return;
            var todo = {
                item: this.newItem,
                isDone: false
            }
            this.todos.push(todo)
            this.newItem = ''
        },
        deleteBtn: function(index) {
            this.todos.splice(index, 1)
        },
        doneBtn: function(index) {
            // this.dones.push(index)
            this.todos.splice(index, 1)
        }
    }
})