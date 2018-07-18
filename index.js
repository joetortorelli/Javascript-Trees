class Node {
    constructor(data) {
      this.data = data;
      this.children = [];
    }
}

class Tree {
    constructor() {
        this.root = null;
    }
    add(data, toNodeData) {
        var node = new Node(data);
        var parent = toNodeData ? this.findBFS(toNodeData) : null;
        if (parent) parent.children.push(node);
        else
            if(!this.root) this.root = node;
            else return 'Root node is already assigned';
    };
    contains(data) { return this.findBFS(data) ? true : false; };
    findBFS(data) { 
        let queue = [this.root];
        while (queue.length) { 
            let node = queue.shift();
            if (node.data === data) return node;
            for (let i = 0; i < node.children.length; i++)
                queue.push(node.children[i]);
        }
        return null;
    };
    print() {
        if(!this.root) return console.log('No root node found');
        var newline = new Node('\n');
        var queue = [this.root, newline];
        var string = '';
        while(queue.length) {
            var node = queue.shift();
            string += node.data.toString() + (node.data !== '\n' ? ' ' : '');
            if(node === newline && queue.length)
                queue.push(newline);
            for(var i = 0; i < node.children.length; i++)
                queue.push(node.children[i]);
        }
        console.log(string.trim());
    };
}

var tree = new Tree();
tree.add('ceo');
tree.add('cto', 'ceo');
tree.add('dev1', 'cto');
tree.add('dev2', 'cto');
tree.add('dev3', 'cto');
tree.add('cfo', 'ceo');
tree.add('accountant', 'cfo');
tree.add('cmo', 'ceo');
tree.print();  