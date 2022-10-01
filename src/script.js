class List {
    data = []

    addNote(text) {
        const item = {
            id: Date.now(),
            text,
            status: false,
            noticed: false
        };
        this.data.push(item);
    }

    remove(id) {
        const index = this.getNoteIndexByld(id);
        this.data.splice(index, 1);
    }

    getNoteIndexByld(id) {
        return this.data.findIndex((value) => value.id === id);
    }
}

class ToDoList extends List {
    updateStatus(id) {
        const index = this.getNoteIndexByld(id);
        this.data[index].status = !this.data[index].status;
    }

    notice(id) {
        const index = this.getNoteIndexByld(id);
        this.data[index].noticed = !this.data[index].noticed;
    }

    statistic() {
        const newObj = {
            length: 0,
            done: 0,
            left: 0,
            noticed: 0
        };
        newObj.length = this.data.length;
        const statusDone = this.data.filter((element) => {
            if(element.status === true) {
                return element;
            }
        });
        const isItNoticed = this.data.filter((element) => {
            if(element.noticed === true) {
                return element;
            }
        });
        newObj.done = statusDone.length;
        newObj.left = newObj.length - newObj.done;
        newObj.left = isItNoticed.length;
        return newObj;
    }
}

const newList = new ToDoList();