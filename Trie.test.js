const Trie = require('./Trie')
const TrieNode = require('./TrieNode')

let trie
beforeEach (() => trie = new Trie())

describe('Trie insertion tests', () => {
  test('should be able to initialize a Trie with a root node', () => {
    expect(trie.root).toEqual({ children: {}, endOfWord: false })
  })

  test('should insert a new word in an empty hash', () => {
    const word = 'rob'
    trie.insert(word)
    expect(trie.root).toEqual({
      children: {
        r: {
          children: {
            o: {
              children: {
                b: { children: {}, endOfWord: true }
              },
              endOfWord: false
            }
          },
          endOfWord: false
        }
      },
      endOfWord: false
    })
  })

  test('should insert a new word with a nonempty hash', () => {
    const word = 'rob'
    trie.insert(word)
    trie.insert('red')
    expect(trie.root).toEqual({
      children: {
        r: {
          children: {
            o: {
              children: {
                b: { children: {}, endOfWord: true }
              },
              endOfWord: false
            },
            e: {
              children: {
                d: { children: {}, endOfWord: true }
              },
              endOfWord: false
            }
          },
          endOfWord: false
        }
      },
      endOfWord: false
    })
  })
})

describe('Searching inside of a trie', () => {
  beforeEach(() => {
    const word = 'rob'
    trie.insert(word)
  })

  test('finds the word rob', () => {
    expect(trie.search('rob')).toBeTruthy()
  })

  test('does not find the word ro', () => {
    expect(trie.search('ro')).not.toBeTruthy()
  })
})