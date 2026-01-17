export class List {
    // Set default value to an empty array if there's no input
    constructor(values = []) {
        // Assign input array to List object
        this.values = values;
    }

    append(list) {
        // Expand current object's list of values and given list's values
        // Combine them into one list
        this.values = [...this.values, ...list.values];
        // Return List object
        return this;
    }

    concat(listOfLists) {
        // Create a new list with the current values list
        const newList = new List(this.values);
        // For each of the values in the given input
        // Append each value to the new list
        listOfLists.values.forEach((list) => newList.append(list));
        // Return the new list
        return newList;
    }

    filter(func) {
        // Initialize the filtered array
        const filtered = [];
        // For each value inside of the array of values
        for (const val of this.values) {
            // Filter the object's array of values through given function
            // Add the values that pass the given function test to the filtered array
            if (func(val)) filtered.push(val);
        }
        // Return a new List object with the filtered array as this.values
        return new List(filtered);
    }

    map(func) {
        // Initialize the mapped array
        const mapped = [];
        // For each value inside the array of values
        for (const val of this.values) {
            // Apply given function to current object's array of values
            // Add resulting value to mapped array
            mapped.push(func(val));
        }
        // Return a new List object with the mapped array as this.values
        return new List(mapped);
    }

    length() {
        // Get length of the object's current array of values
        return this.values.length;
    }

    foldl(func, val) {
        // Assign initial value to the accumulator
        let acc = val;
        // For each value of the object's array of values
        for (let i of this.values) {
            // Run the current value (i) through given function
            acc = func(acc, i);
        }
        // Return the output after running each value through the function
        return acc;
    }

    foldr(func, val) {
        // Assign initial value to the accumulator
        let acc = val;
        // For each value in the array of objects (Right to left)
        for (let i = this.values.length - 1; i >= 0; i--) {
            // Run current value through the given function
            acc = func(acc, this.values[i]);
        }
        // Return the output after running each value through the function
        return acc;
    }

    reverse() {
        // Initialize reversed array
        let reversed = [];
        // For each value in the array of objects (Right to left)
        for (let i = this.values.length - 1; i >= 0; i--) {
            // Add the current value (this.values[i]) to the reversed array
            reversed.push(this.values[i]);
        }
        // Return new List with reversed array as this.values
        return new List(reversed);
    }
}