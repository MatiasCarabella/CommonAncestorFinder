class File {
    constructor(name) {
        this.children = [];
        this.name = name;
    }

    addChild(file) {
        this.children.push(file);
    }
}

function findPath(root, target, path = []) {
    // Append this node to the path
    path.push(root);

    // If the target is found, return true
    if (root === target) {
        return true;
    }

    // Recur for each child
    for (let child of root.children) {
        if (findPath(child, target, path)) {
            return true;
        }
    }

    // If target not present in subtree rooted with root, remove root from path and return false
    path.pop();
    return false;
}

function findParent(root, file1, file2) {
    // To store paths to file1 and file2
    let path1 = [];
    let path2 = [];

    // Find paths from root to file1 and root to file2
    // If either file1 or file2 is not present, return null
    if (!findPath(root, file1, path1) || !findPath(root, file2, path2)) {
        return null;
    }

    // Compare the paths to get the first different value
    let i;
    for (i = 0; i < path1.length && i < path2.length; i++) {
        if (path1[i] !== path2[i]) {
            break;
        }
    }

    // Return the last common ancestor
    return path1[i - 1];
}

// Example usage:
const root = new File('root');
const [a, b, c, d] = ['a', 'b', 'c', 'd'].map(char => new File(char));

root.addChild(a);
root.addChild(b);
a.addChild(c);
a.addChild(d);

console.log(`The common parent of a and b is: ${findParent(root, a, b).name}`); // -> root
console.log(`The common parent of c and d is: ${findParent(root, c, d).name}`); // -> a