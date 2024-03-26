// Creating an Array Data Structure from scratch

class MyArray {
    constructor(length) {
        this.dataContainer = []
        this.count = 0;
    }
    insert(value) {
        // if the array is full, resize it
        if (this.dataContainer.length === this.count) {
            // Create a new array (twice the size)
            const newDataContainer = [this.count * 2]
            // Copy all the existing data
            for (let i = 0; i < this.count; i++) {
                newDataContainer[i] = this.dataContainer[i]
            }
            // Set the data to the new array
            this.dataContainer = newDataContainer;
        }
        this.dataContainer[this.count++] = value;
    }

    removeAt(index) {
        // Validate index
        if (index < 0 || index >= this.count) {
            throw new Error
        }
        // Shift the data to the left to fill the whole
        for (let i = index; i < this.count; i++) {
            this.dataContainer[i] = this.dataContainer[i + 1];
        }
        this.count--;
    }

    indexOf(data) {
        // if we find it return index 
        // otherwise, return -1
        // 0(n)
        for (let i = 0; i < this.count; i++) {
            if (this.dataContainer[i] === data) return i;
        }
        return -1;
    }


    print() {
        for(let i = 0; i < this.count; i++){
            console.log(this.dataContainer[i])
        }
    }
 }

 const numbers = new MyArray(5);
 numbers.insert(2);
 numbers.insert(4);
 numbers.insert(5);
 numbers.insert(9);
 numbers.removeAt(1)
 console.log(numbers.indexOf(9));
 numbers.print();
