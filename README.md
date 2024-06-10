# CommonAncestorFinder

CommonAncestorFinder is a command-line tool designed to navigate the file system and find the common parent directory of two given file paths. This tool is useful for operations that require determining the lowest common ancestor in a directory structure.

## Features

- Navigate the file system hierarchy
- Find the common parent directory for two given file paths
- Simple and intuitive interface

## Usage

1. **Clone the repository:**
    ```sh
    git clone https://github.com/MatiasCarabella/CommonAncestorFinder.git
    cd CommonAncestorFinder
    ```

2. **Run the tool:**
    ```sh
    node CommonAncestorFinder.js
    ```

3. **Example:**
    ```javascript
    const root = new File('root');
    const [a, b, c, d] = ['a', 'b', 'c', 'd'].map(char => new File(char));

    root.addChild(a);
    root.addChild(b);
    a.addChild(c);
    a.addChild(d);

    console.log(`The common parent of a and b is: ${findParent(root, a, b).name}`); // -> root
    console.log(`The common parent of c and d is: ${findParent(root, c, d).name}`); // -> a
    ```

4. **Expected Output:**
```
The common parent of a and b is: root
The common parent of c and d is: a
```

## Installation

To use CommonAncestorFinder, ensure you have [Node.js](https://nodejs.org/) installed.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

