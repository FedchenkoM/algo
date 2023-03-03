class HashTable {
  constructor(size) {
    this.size = size
    this.store = new Array(size)
  }
  hash(key) {
    let sum = 0
    for (let i = 0; i < key.length; i++) {
      sum += key.charCodeAt(i)
    }
  }
  add(key, value) {
    this.dict.push()
  }
  get(key) {

  }
}