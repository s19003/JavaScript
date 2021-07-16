/**
 * 配列(Array)を作成する
 * 配列リテラル記法
 */
let colors = ['Red', 'Blue', 'Green', 'Yellow', 'White']
console.log('Array : ' + colors)

/**
 * 配列(Array)を作成する
 * Arrayコンストラクター
 */
let sample = new Array(5)

// ============================== プロパティ(property) ==============================
console.log('=============== プロパティ(property) ===============')

/**
 * 配列の要素数を取得する
 */
console.log('length : ' + colors.length)

// ============================== メソッド(method) ==============================
console.log('=============== メソッド(method) ===============')

/**
 * 配列をコピーする
 */
let sliceColors = colors.slice()
console.log('slice : ' + sliceColors)

/**
 * 配列の末尾に要素を追加する
 */
let pushColors = colors.slice()
pushColors.push('Purple')
console.log('push : ' + pushColors)

/**
 * 配列の先頭に要素を追加する
 */
let unshiftColors = colors.slice()
unshiftColors.unshift('Purple')
console.log('unshift : ' + unshiftColors)

/**
 * 配列かどうか確認する
 */
console.log(Array.isArray(colors))
