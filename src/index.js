class Descartes {
  /**
   * [constructor 初始化]
   * @method constructor
   * @param  {[Array]}    arr [[Array1,Array2,Array3,...]]
   */
  constructor (arr) {
    if (!Array.isArray(arr)) throw new TypeError()
    else this._arr = arr
  }
  descartes_2 () {
    const arr = this._arr
    const end = arr.length - 1
    const result = []

    const recursive = (curr, start) => {
      const first = arr[start]
      const last = (start === end)
      for (var i = 0; i < first.length; ++i) {
        var copy = curr.slice()
        copy.push(first[i])
        if (last) {
          result.push(copy)
        } else {
          recursive(copy, start + 1)
        }
      }
    }

    if (arr.length) recursive([], 0)
    else result.push([])

    return result
  }

  /**
   * [descartes_1 入口函数]
   * @method descartes_1
   * @return {[Array]}  [Array|[Array1,Array2,Array3,...]]
   */
  descartes_1 () {
    const arr = this._arr
    let result = []

    if (!arr) return []
    if (arr.length <= 0) return []
    if (arr.length === 1) result = this.descartes1(arr[0])
    if (arr.length === 2) result = this.descartes2(arr[0], arr[1])
    if (arr.length >= 3) result = this.descartes3(arr)

    return result
  }
  /**
   * [descartes1 如果传入的参数只有一个数组，求笛卡尔积结果]
   * @method descartes1
   * @param  {[Array]}   arr1 [一维数组]
   * @return {[Array]}   [二维数组]
   */
  descartes1 (arr1) {
    const result = []

    for (let i in arr1) {
      result.push([arr1[i]])
    }

    return result
  }
  /**
   * [descartes2 如果传入的参数只有两个数组，求笛卡尔积结果]
   * @method descartes2
   * @param  {[Array]}   arr1 [一维数组]
   * @param  {[Array]}   arr2 [一维数组]
   * @return {[Array]}   [二维数组]
   */
  descartes2 (arr1, arr2) {
    const result = []

    for (let i in arr1) {
      for (let j in arr2) {
        result.push([arr1[i], arr2[j]])
      }
    }

    return result
  }
  /**
   * [descartes3 如果传入的参数有三个以上的数组，求笛卡尔积结果]
   * @method descartes3
   * @param  {[Array]}   arr [二维数组
   * @return {[Array]}   [二维数组]
   */
  descartes3 (arr) {
    let arr2D = this.descartes2(arr[0], arr[1])

    for (let i = 2; i < arr.length; i++) {
      arr2D = this.descartes2DAnd1D(arr2D, arr[i])
    }

    return arr2D
  }
  /**
   * [descartes2DAnd1D 降维]
   * @method descartes2DAnd1D
   * @param  {[Array]}         arr2D [二维数组]
   * @param  {[Array]}         arr1D [一维数组]
   * @return {[Array]}         [二维数组]
   */
  descartes2DAnd1D (arr2D, arr1D) {
    const result = []

    for (let i in arr2D) {
      for (let j in arr1D) {
        result.push(arr2D[i].concat(arr1D[j]))
      }
    }

    return result
  }
}

export default Descartes
