const TrieNode = require('./TrieNode')

/**
 * To insert into the trie, the child trie node is created on the root if
 *  it does not exist already.
 *  For each character in the word being inserted, it creates a child node
 *  if the character does not exist, as shown in the following code block:”
 */

class Trie {
  constructor () {
    this.root = new TrieNode()
  }

  insert (word) {
    let currentNode = this.root
    for (let k = 0; k < word.length; k++) {
      const currentChar = word.charAt(k)
      if (!currentNode.children[currentChar]) {
        currentNode.children[currentChar] = new TrieNode()
      }
      currentNode = currentNode.children[currentChar]
    }
    currentNode.endOfWord = true
  }

  search (word) {
    let currentNode = this.root
    for (let k = 0; k < word.length; k++) {
      const currentChar = word.charAt(k)
      if (!currentNode.children[currentChar]) return false
      currentNode = currentNode.children[currentChar]
    }
    return currentNode.endOfWord
  }

  delete (word) {
    this.deleteRecursively(this.root, word, 0)
    return this.root
  }

  deleteRecursively (currentNode, word, index) {
    // base case
    if (index === word.length) {
      if (!currentNode.endOfWord) return false
      currentNode.endOfWord = false
      return Object.keys(currentNode.children).length === 0
    }

    const character = word.charAt(index)
    const node = currentNode.children[character]
    if (!node) return false
    const shouldDeleteNode = this.deleteRecursively(node, word, index + 1)
    if (shouldDeleteNode) {
      delete currentNode.children[character]
      return Object.keys(currentNode.children).length === 0
    }
    return false
  }
}

module.exports = Trie
