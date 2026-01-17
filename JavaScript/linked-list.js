/**
 * A Doubly Linked List implementation using sentinel nodes.
 * Provides O(1) performance for insertions and deletions at both ends.
 */
export class LinkedList {
    /**
     * Initializes the list with sentinel head and tail nodes.
     */
    constructor() {
        this.head = {};
        this.tail = {};
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    /**
     * Adds a new element to the end of the list.
     * @param {*} data - The value to store in the list.
     */
    push(data) {
        this.insert(data, this.lastNode());
    }

    /**
     * Adds a new element to the beginning of the list.
     * @param {*} data - The value to store in the list.
     */
    unshift(data) {
        this.insert(data, this.head);
    }

    /**
     * Removes and returns the last element in the list.
     * @returns {*} The data of the removed node.
     */
    pop() {
        return this.del(this.lastNode());
    }

    /**
     * Removes and returns the first element in the list.
     * @returns {*} The data of the removed node.
     */
    shift() {
        return this.del(this.firstNode());
    }

    /**
     * Finds and removes the first occurrence of a specific value.
     * @param {*} data - The value to find and remove.
     */
    delete(data) {
        const node = this.find(data);
        if (node) this.del(node);
    }

    /**
     * Returns the total number of elements in the list.
     * @returns {number} The current size of the list.
     */
    count() {
        return [...this.nodes()].length;
    }

    /**
     * Searches for a node containing the specified data.
     * @param {*} data - The value to search for.
     * @returns {Object|undefined} The node object if found, otherwise undefined.
     */
    find(data) {
        for (const node of this.nodes()) {
            if (node.data === data) return node;
        }
    }

    /**
     * Internal helper to insert data after a specific node.
     * @param {*} data - The value to insert.
     * @param {Object} prev - The node that will precede the new node.
     * @private
     */
    insert(data, prev) {
        const next = prev.next;
        prev.next = next.prev = { data, prev, next };
    }

    /**
     * Internal helper to remove a specific node from the list.
     * @param {Object} node - The node to be removed.
     * @returns {*} The data of the deleted node.
     * @private
     */
    del(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
        return node.data;
    }

    /**
     * Generator that yields each node in the list from first to last.
     * @yields {Object} The next node in the sequence.
     */
    *nodes() {
        for (let node = this.firstNode(); node !== this.tail; node = node.next) {
            yield node;
        }
    }

    /**
     * Retrieves the first data-containing node.
     * @returns {Object} The node immediately following the head sentinel.
     */
    firstNode() {
        return this.head.next;
    }

    /**
     * Retrieves the last data-containing node.
     * @returns {Object} The node immediately preceding the tail sentinel.
     */
    lastNode() {
        return this.tail.prev;
    }
}