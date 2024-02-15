class MaxHeap {
  private data: number[]

  constructor(initialData: number[]) {
    this.data = initialData
    this.buildMaxHeap()
  }

  private buildMaxHeap() {
    const numberOfTreesToHeapify = Math.floor(this.data.length / 2)

    for (let i = numberOfTreesToHeapify; i > 0; i--) {
      const rootOfTreeToHepify = i - 1
      this.maxHeapifyTree(rootOfTreeToHepify)
    }
  }

  private maxHeapifyTree(rootIndex: number): boolean {
    const leftChildIndex = rootIndex * 2 + 1
    const rightChildIndex = rootIndex * 2 + 2

    let rootValue = this.data[rootIndex]
    const leftChildValue = this.data[leftChildIndex]
    const rightChildValue = this.data[rightChildIndex]

    let swapedLeft = false
    let swapedRight = false

    if (leftChildValue && leftChildValue > rootValue) {
      this.data[rootIndex] = leftChildValue
      this.data[leftChildIndex] = rootValue
      swapedLeft = true
    }
    rootValue = this.data[rootIndex]
    if (rightChildValue && rightChildValue > rootValue) {
      this.data[rootIndex] = rightChildValue
      this.data[rightChildIndex] = rootValue
      swapedRight = true
    }
    if (swapedLeft) this.maxHeapifyTree(leftChildIndex)
    if (swapedRight) this.maxHeapifyTree(rightChildIndex)
    return swapedLeft || swapedRight
  }

  getMaxValue() {
    return this.data[0]
  }

  seeHeap() {
    return console.log(this.data)
  }

  getMaxLevelOfHeap() {
    if (this.data.length === 0) return 0
    const level = Math.floor(Math.log2(this.data.length) + 1)
    return level
  }

  insert(value: number) {
    this.data.push(value)
    const indexOfNewValueParent = Math.floor(this.data.length / 2) - 1
    let swaped = this.maxHeapifyTree(indexOfNewValueParent)

    if (swaped) {
      let nextParentIndex = Math.floor((indexOfNewValueParent + 1) / 2) - 1
      while (swaped && nextParentIndex >= 0) {
        swaped = this.maxHeapifyTree(nextParentIndex)
        nextParentIndex = Math.floor((nextParentIndex + 1) / 2) - 1
      }
    }
  }

  delete() {
    if (this.data.length > 0) {
      const lastElement = this.data.pop()!
      this.data.splice(0, 1, lastElement)
      this.maxHeapifyTree(0)
    }
  }
}

const unorderedArray = [1, 72, 6, 57, 88, 60, 42, 83, 73, 48, 85, 86, 32, 21, 67, 89, 5, 99]
const maxHeap = new MaxHeap(unorderedArray)
maxHeap.seeHeap()
maxHeap.delete()
maxHeap.seeHeap()
