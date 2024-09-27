interface Question {
  question: string
  answer: string
}

interface Category {
  name: string
  questions: Question[]
}

export const categories: Category[] = [
  {
    name: 'JavaScript',
    questions: [
      {
        question: 'JavaScript 有哪些資料型別？該怎麼辨別一個變數的資料型別？',
        answer:
          'JavaScript 有七種基本資料型別：Number、String、Boolean、Undefined、Null、Symbol 和 BigInt，以及一種複雜資料型別：Object。可以使用 typeof 運算子來辨別變數的資料型別，但要注意 typeof null 會返回 "object"，這是一個歷史遺留的錯誤。對於更精確的類型檢查，可以使用 Object.prototype.toString.call() 方法。'
      },
      {
        question: '在 JavaScript 當中，==、=== 與 Object.is()的區別？',
        answer:
          '== 是寬鬆相等，會進行類型轉換；=== 是嚴格相等，不進行類型轉換；Object.is() 類似於 ===，但處理一些特殊情況，如 NaN 和 -0/+0 的比較。例如，NaN === NaN 為 false，但 Object.is(NaN, NaN) 為 true。'
      },
      {
        question: 'null、undefined 與 undeclared 的區別？',
        answer:
          'null 是一個表示"無"的對象，轉為數值時為0；undefined 是一個表示"未定義"的原始值，轉為數值時為 NaN；undeclared 是一個變數未聲明就使用，會報 ReferenceError 錯誤。typeof null 會返回 "object"，typeof undefined 會返回 "undefined"，而 typeof undeclared_variable 會返回 "undefined"。'
      },
      {
        question: 'Map 與 object 的差別？為什麼有 object 還需要 Map？',
        answer:
          'Map 的鍵可以是任何類型，而 object 的鍵只能是字符串或 Symbol。Map 會維護鍵的插入順序，object 不會。Map 有內建的 size 屬性，object 需要手動計算。Map 在頻繁增刪鍵值對的場景下表現更好。Map 是可迭代的，而 object 需要通過 Object.keys() 等方法轉換。Map 更適合用於需要經常添加或刪除鍵值對的場景。'
      },
      {
        question: '請解釋 Set、Map、WeakSet 和 WeakMap 的區別？',
        answer:
          'Set 存儲唯一值，Map 存儲鍵值對。WeakSet 和 WeakMap 類似於 Set 和 Map，但它們的鍵是弱引用，不會阻止垃圾回收。WeakSet 只能存儲對象，WeakMap 的鍵必須是對象。WeakSet 和 WeakMap 不可迭代，也沒有 size 屬性。它們主要用於存儲對象的附加數據，而不影響對象的垃圾回收。'
      },
      {
        question:
          '在 JavaScript 中 0.1 + 0.2 會是多少？為什麼？如何避免相關問題？',
        answer:
          '0.1 + 0.2 的結果是 0.30000000000000004，而不是預期的 0.3。這是因為 JavaScript 使用 IEEE 754 標準的雙精度浮點數來表示數字，某些小數無法精確表示。避免這個問題可以：1) 使用整數運算後再除以 100；2) 使用 toFixed() 方法取整；3) 使用第三方庫如 decimal.js；4) 在比較時使用一個很小的誤差範圍。'
      },
      {
        question: '嚴格模式 (use strict) 的用途？有什麼好處？',
        answer:
          '嚴格模式是一種 JavaScript 運行時的限制模式，目的是消除語言中一些不合理、不嚴謹之處，減少一些怪異行為。好處包括：1) 消除 JavaScript 語法的一些不合理、不嚴謹之處；2) 消除代碼運行的一些不安全之處；3) 提高編譯器效率，增加運行速度；4) 為未來新版本的 JavaScript 做好鋪墊。例如，它會禁止使用未聲明的變量，禁止刪除不可刪除的屬性等。'
      },
      {
        question: '在 JavaScript 中用 var, let, 以及 const 有什麼差別？',
        answer:
          'var 是函數作用域，可以重複聲明，會被提升；let 是塊級作用域，不可重複聲明，不會被提升，有暫時性死區；const 也是塊級作用域，必須初始化，不可重新賦值（但對於對象，其屬性可以修改）。推薦使用 const 和 let，因為它們提供了更好的作用域控制和錯誤預防。'
      },
      {
        question:
          'Javascript 的作用域 (Scope) 與作用域鏈 (Scope Chain) 是什麼？',
        answer:
          '作用域是變量和函數的可訪問範圍。JavaScript 有全局作用域、函數作用域和塊級作用域（ES6引入）。作用域鏈是 JavaScript 引擎查找變量時遵循的結構，從當前作用域開始，逐級向上查找，直到全局作用域。這種鏈式結構保證了內部作用域可以訪問外部作用域的變量，但外部作用域不能訪問內部作用域的變量。'
      },
      {
        question: '什麼是閉包 (Closure)？',
        answer:
          '閉包是指一個函數可以訪問其外部函數作用域中的變量，即使該外部函數已經返回。閉包由函數以及創建該函數的詞法環境組成。主要用途包括：1) 數據私有化；2) 實現函數工廠；3) 實現模塊化。閉包可能導致內存洩漏，因為它會保持對外部變量的引用。'
      },
      {
        question: '什麼是提升 (Hoisting)？',
        answer:
          '提升是 JavaScript 將變量和函數聲明移動到其所在作用域頂部的行為。變量聲明會被提升，但初始化不會。函數聲明會被完全提升。這意味著你可以在聲明之前使用變量和函數。但是，最佳實踐是在使用前聲明變量和函數，以提高代碼的可讀性。注意，let 和 const 聲明的變量不會被提升，它們有"暫時性死區"。'
      },
      {
        question:
          'JavaScript 中陣列 (Array) 的遍歷方法 (for loop, for...in, for…of, forEach, map, filter, every, some) 是什麼？',
        answer:
          '1) for loop：最基本的遍歷方法，可以控制迭代過程。2) for...in：遍歷對象的可枚舉屬性，包括原型鏈上的屬性，不推薦用於數組。3) for...of：遍歷可迭代對象的值。4) forEach：對每個元素執行回調函數，無法中斷循環。5) map：創建一個新數組，其結果是對每個元素調用函數的返回值。6) filter：創建一個新數組，包含通過測試的所有元素。7) every：測試所有元素是否都通過了指定函數的測試。8) some：測試是否至少有一個元素通過了指定函數的測試。'
      },
      {
        question:
          'JavaScript 中的 sort 傳入 (a,b) => b - a 會是升序還是降序？為什麼呢？',
        answer:
          '傳入 (a,b) => b - a 會得到降序排列。sort 方法根據比較函數的返回值來決定元素的順序：如果返回值小於 0，a 會被排在 b 前面；如果返回值等於 0，a 和 b 的相對位置不變；如果返回值大於 0，b 會被排在 a 前面。在這個例子中，b - a 當 b 大於 a 時會返回正數，導致較大的數排在前面，因此是降序。'
      },
      {
        question: '箭頭函式 (arrow function)和一般函式的差別是什麼？',
        answer:
          '主要差別有：1) 箭頭函數沒有自己的 this，它繼承自外層作用域的 this。2) 箭頭函數不能用作構造函數，不能用 new 調用。3) 箭頭函數沒有 arguments 對象，但可以使用剩餘參數。4) 箭頭函數不能用作生成器函數，不能使用 yield 關鍵字。5) 箭頭函數的語法更簡潔，特別是對於簡單函數。6) 箭頭函數沒有自己的 prototype 屬性。'
      },
      {
        question:
          'JavaScript 立即調用函式 IIFE (Immediately Invoked Function Expression) 是什麼？優缺點是什麼？',
        answer:
          'IIFE 是一個在定義後立即執行的函數表達式。形式如：(function(){})()。優點：1) 創建獨立的作用域，避免變量污染全局命名空間。2) 用於模塊化代碼。3) 可以用來創建私有變量和方法。缺點：1) 可能使代碼難以閱讀和理解。2) 不利於代碼重用。3) 在現代 JavaScript 中，可以使用模塊系統來實現類似功能，IIFE 的使用場景減少。'
      },
      {
        question: '高階函式 (Higher Order Function) 是什麼？',
        answer:
          '高階函數是指接受一個或多個函數作為參數，和/或返回一個函數的函數。JavaScript 中常見的高階函數包括 map、filter、reduce 等。高階函數的主要優點是：1) 提高代碼的抽象程度和復用性。2) 使代碼更加簡潔和易於理解。3) 支持函數式編程範式。4) 可以用來實現裝飾器模式、策略模式等設計模式。'
      },
      {
        question: '說一下你對原型與原型鏈的了解。',
        answer:
          '原型是 JavaScript 對象之間的一種鏈接機制。每個對象都有一個內部屬性 [[Prototype]]，指向其原型對象。原型鏈是由這些鏈接形成的鏈式結構。當訪問一個對象的屬性時，如果對象本身沒有這個屬性，JavaScript 會沿著原型鏈向上查找，直到找到該屬性或到達原型鏈的頂端（通常是 Object.prototype）。原型和原型鏈是 JavaScript 實現繼承的基礎。可以通過 Object.create() 或構造函數來設置對象的原型。'
      },
      {
        question: '請解釋 JavaScript 中 this 的值？',
        answer:
          'this 的值取決於函數的調用方式：1) 在全局作用域中，this 指向全局對象（瀏覽器中是 window）。2) 在對象方法中，this 指向調用該方法的對象。3) 在構造函數中，this 指向新創建的實例。4) 使用 call、apply 或 bind 方法可以顯式設置 this 的值。5) 在箭頭函數中，this 繼承自外層作用域。6) 在事件處理函數中，this 通常指向觸發事件的元素。理解 this 的綁定規則對於正確使用 JavaScript 非常重要。'
      },
      {
        question: '如何使用 call、apply 或 bind？',
        answer:
          'call、apply 和 bind 都用於改變函數執行時的 this 指向。1) call：func.call(thisArg, arg1, arg2, ...)，立即執行函數。2) apply：func.apply(thisArg, [arg1, arg2, ...])，立即執行函數，參數以數組形式傳入。3) bind：func.bind(thisArg, arg1, arg2, ...)，返回一個新函數，不立即執行。call 和 apply 的區別主要在於傳參方式，bind 則是創建一個新函數而不是立即執行。這些方法常用於借用其他對象的方法、實現繼承等場景。'
      },
      {
        question: 'ES6 中的 class 是什麼？和函式構造函式差別是什麼？',
        answer:
          'ES6 的 class 是創建對象和實現繼承的語法糖，本質上還是基於原型的。主要差別：1) 語法更清晰，更接近傳統面向對象語言。2) class 聲明不會被提升，而函數聲明會。3) class 中的代碼自動運行在嚴格模式下。4) class 的方法不可枚舉。5) 必須使用 new 調用 class。6) class 提供了更簡潔的繼承語法（extends）。儘管有這些差異，class 本質上仍然是構造函數的語法糖，JavaScript 的原型繼承機制沒有改變。'
      },
      {
        question: '請說明瀏覽器中的事件循環 (Event Loop)。',
        answer:
          '事件循環是 JavaScript 的執行機制，用於處理異步操作。主要組成：1) 調用棧：執行同步代碼。2) 任務隊列：包括宏任務（如 setTimeout、setInterval、I/O）和微任務（如 Promise、process.nextTick）。3) 事件循環：不斷檢查調用棧是否為空，為空則依次執行任務隊列中的任務。執行順序：同步代碼 > 微任務 > 宏任務。每次宏任務執行完後，會清空所有微任務。理解事件循環對於編寫高效的異步代碼和避免阻塞主線程非常重要。'
      },
      {
        question: 'Promise 是什麼？有什麼用途？',
        answer:
          'Promise 是 JavaScript 中用於處理異步操作的對象。它代表一個異步操作的最終完成或失敗。Promise 有三種狀態：pending（進行中）、fulfilled（已成功）和 rejected（已失敗）。用途：1) 改善回調地獄問題，使異步代碼更易讀和維護。2) 統一異步操作的處理方式。3) 支持鏈式調用和錯誤處理。4) 可以組合多個異步操作（如 Promise.all）。5) 為 async/await 語法提供基礎。Promise 的引入大大改善了 JavaScript 中異步編程的體驗。'
      },
      {
        question: 'Promise.race() 是什麼？如何實踐 Promise.race()？',
        answer:
          'Promise.race() 接收一個 Promise 數組，返回一個新的 Promise，這個 Promise 在數組中的任何一個 Promise 解決或拒絕後，立即解決或拒絕。實現：function promiseRace(promises) { return new Promise((resolve, reject) => { promises.forEach(promise => { Promise.resolve(promise).then(resolve, reject); }); }); } 這個實現遍歷所有輸入的 Promise，並為每個 Promise 添加 resolve 和 reject 處理器。無論哪個 Promise 先完成，都會觸發返回的 Promise 的相應狀態。'
      },
      {
        question: 'Promise.all 是什麼？請實現 Promise.all。',
        answer:
          'Promise.all 接收一個 Promise 數組，返回一個新的 Promise。當所有 Promise 都成功時，返回所有結果的數組；如果有任何一個 Promise 失敗，則立即拒絕。實現：function promiseAll(promises) { return new Promise((resolve, reject) => { let results = []; let completed = 0; if (promises.length === 0) { resolve(results); return; } promises.forEach((promise, index) => { Promise.resolve(promise).then(value => { results[index] = value; completed++; if (completed === promises.length) { resolve(results); } }).catch(reject); }); }); } 這個實現遍歷所有輸入的 Promise，記錄它們的結果，並在所有 Promise 完成時解析返回的 Promise。'
      },
      {
        question: 'JavaScript 中的 async/await 是什麼？和 promise 有什麼差別？',
        answer:
          'async/await 是基於 Promise 的語法糖，用於簡化異步操作的寫法。async 函數返回一個 Promise，await 用於等待 Promise 解決。主要差別：1) 語法更簡潔，看起來像同步代碼。2) 錯誤處理更直觀，可以使用 try/catch。3) 便於條件語句的使用。4) 調試更容易。5) 避免了 Promise 鏈的嵌套。然而，async/await 本質上還是基於 Promise 的，只是提供了一種更易讀、更易寫的方式來處理異步操作。在某些複雜場景（如並行操作）中，直接使用 Promise 可能更合適。'
      },
      {
        question: 'JavaScript 中的 new 做了什麼？',
        answer:
          'new 操作符創建一個用戶定義的對象類型的實例。它做了以下事情：1) 創建一個新的空對象。2) 將這個對象的原型設置為構造函數的 prototype 屬性。3) 將構造函數內部的 this 綁定到新創建的對象。4) 執行構造函數內部的代碼。5) 如果構造函數返回一個對象，則返回該對象；否則，返回創建的新對象。可以用函數模擬 new 的行為：function myNew(constructor, ...args) { const obj = Object.create(constructor.prototype); const result = constructor.apply(obj, args); return (typeof result === "object" && result !== null) ? result : obj; }'
      },
      {
        question:
          'spread syntax 和 rest syntax 的差別是什麼？什麼時候會使用到？',
        answer:
          'Spread 語法（...）用於展開可迭代對象，Rest 語法（也是...）用於收集多個元素到一個數組中。主要區別：1) Spread 用於函數調用、數組字面量和對象字面量中，Rest 用於函數參數和解構賦值中。2) Spread 展開已有的數組/對象，Rest 創建新的數組來存儲剩餘項。使用場景：Spread：複製數組/對象、合併數組/對象、將數組元素作為函數參數。Rest：創建可接受任意數量參數的函數、解構時獲取剩餘元素。這兩種語法大大簡化了 JavaScript 中的許多操作。'
      },
      {
        question: 'ES6 有什麼新特性？',
        answer:
          'ES6（ECMAScript 2015）引入了許多新特性：1) let 和 const 關鍵字。2) 箭頭函數。3) 類（class）。4) 模板字符串。5) 解構賦值。6) 默認參數。7) Rest 和 Spread 操作符。8) Promise。9) 模塊（import/export）。10) Symbol 類型。11) Map 和 Set 數據結構。12) for...of 循環。13) 生成器（Generators）。14) Proxy 和 Reflect。15) 增強的對象字面量。這些特性大大提高了 JavaScript 的表現力和開發效率，使代碼更加簡潔、易讀和強大。'
      },
      {
        question: 'ES2023 有什麼新特性？',
        answer:
          'ES2023 引入了一些新特性：1) Array 查找從末尾開始：findLast() 和 findLastIndex()。2) Hashbang 語法：允許在腳本開頭使用 #! 來指定解釋器。3) Symbols 作為 WeakMap 的鍵。4) 改進的 toReversed、toSorted、toSpliced、with 數組方法，返回新數組而不修改原數組。5) 支持在正則表達式字符類中使用 set 操作符（如並集、交集）。這些新特性進一步增強了 JavaScript 的功能，特別是在數組操作和正則表達式方面。'
      },
      {
        question: 'array 的 push 方法會回傳什麼？',
        answer:
          'array 的 push 方法會返回數組的新長度。例如：let arr = [1, 2, 3]; let newLength = arr.push(4); console.log(newLength); // 輸出 4。這個特性可以用來快速獲取數組的當前長度，特別是在連續 push 操作時。但要注意，push 方法會修改原數組，如果不想修改原數組，可以考慮使用展開運算符（...）來創建新數組。'
      },
      {
        question: '如何用 JavaScript 算出陣列的平均數？',
        answer:
          '計算數組平均數的一種簡潔方法是使用 reduce 方法：const average = arr => arr.reduce((sum, val) => sum + val, 0) / arr.length; 這個函數首先使用 reduce 計算數組所有元素的和，然後除以數組長度得到平均值。對於空數組，這個方法會返回 NaN，可以添加檢查來處理這種情況：const average = arr => arr.length ? arr.reduce((sum, val) => sum + val, 0) / arr.length : 0; 這種方法簡潔高效，適用於大多數情況。'
      },
      {
        question: '請實踐陣列扁平化 (flatten)。',
        answer:
          '實現數組扁平化的一種方法是使用遞歸：function flatten(arr) { return arr.reduce((flat, toFlat) => flat.concat(Array.isArray(toFlat) ? flatten(toFlat) : toFlat), []); } 這個函數使用 reduce 方法遍歷數組，如果遇到嵌套數組就遞歸調用 flatten，否則直接添加到結果中。另一種方法是使用 ES6 的 flat 方法：const flatten = arr => arr.flat(Infinity); 這種方法更簡潔，但可能不被所有瀏覽器支持。對於大型深度嵌套的數組，遞歸方法可能導致堆棧溢出，此時可以考慮使用迭代方法。'
      },
      {
        question:
          'JavaScript 中的淺拷貝 (shallow copy) 和深拷貝 (deep copy) 差別是什麼？要如何實踐？',
        answer:
          '淺拷貝複製對象的第一層屬性，但嵌套對象仍然共享引用。深拷貝創建一個全新的對象，包括所有嵌套結構。實現淺拷貝：1) Object.assign({}, obj) 2) {...obj} 3) Array.from(arr) 實現深拷貝：1) JSON.parse(JSON.stringify(obj))（有限制，不能處理函數、undefined、循環引用等） 2) 遞歸實現：function deepCopy(obj) { if (typeof obj !== "object" || obj === null) return obj; let copy = Array.isArray(obj) ? [] : {}; for (let key in obj) { if (obj.hasOwnProperty(key)) { copy[key] = deepCopy(obj[key]); } } return copy; } 3) 使用第三方庫如 lodash 的 _.cloneDeep()。選擇方法時需考慮性能和特殊情況的處理。'
      },
      {
        question: '為什麼推薦用 structureClone 在 JavaScript 做深拷貝？',
        answer:
          'structuredClone 是一個新的全局函數，用於創建深拷貝。推薦使用的原因：1) 能夠處理循環引用。2) 支持大多數內置類型，包括 Map、Set、Date、RegExp 等。3) 性能通常優於手動實現的深拷貝函數。4) 是語言標準的一部分，不需要額外的庫。5) 可以正確複製 TypedArray 和 ArrayBuffer。6) 提供了轉移機制，可以高效地轉移大型二進制數據。然而，它也有一些限制：不能複製函數、DOM 節點，以及某些內置對象如 Error。對於這些情況，可能需要使用其他方法或自定義邏輯。總的來說，structuredClone 為大多數深拷貝場景提供了一個強大且方便的解決方案。'
      }
    ]
  },
  {
    name: 'HTML',
    questions: [
      {
        question: '什麼是 HTML 語意化？',
        answer:
          'HTML 語意化是指使用適當的 HTML 標籤來傳達內容的結構和意義，而不僅僅是為了展示效果。好處包括：1) 提高可訪問性，對屏幕閱讀器友好。2) 改善 SEO，搜索引擎更容易理解頁面結構。3) 提高代碼可讀性和可維護性。4) 在 CSS 失效時仍能呈現良好的文檔結構。例如，使用 <header>、<nav>、<main>、<article>、<section>、<aside>、<footer> 等標籤來組織頁面結構，而不是僅用 <div> 和 <span>。語意化 HTML 是良好的 Web 開發實踐。'
      },
      {
        question: '<script> 應該放在 HTML 的什麼位置？<link> 呢？',
        answer:
          '<script> 通常建議放在 </body> 標籤之前，這樣可以確保 DOM 完全加載後再執行腳本，提高頁面加載速度。但如果使用 async 或 defer 屬性，則可以放在 <head> 中。<link> 標籤通常放在 <head> 中，以便儘早加載 CSS，避免頁面無樣式閃爍。'
      },
      {
        question: '如何在 HTML 中插入 CSS 樣式？優先順序是什麼？',
        answer:
          'HTML 中插入 CSS 的方法有三種：1) 內聯樣式（style 屬性）。2) 內部樣式表（<style> 標籤）。3) 外部樣式表（<link> 標籤）。優先順序從高到低是：內聯樣式 > 內部樣式表 > 外部樣式表。但具體權重還要考慮選擇器的特殊性。一般推薦使用外部樣式表，因為它提供了最好的分離和重用。'
      },
      {
        question: '請說明 <script> 的 async 與 defer 有什麼不同。',
        answer:
          'async 和 defer 都允許腳本異步加載，不阻塞 HTML 解析。區別是：1) async：腳本下載完成後立即執行，不保證執行順序。適用於獨立腳本。2) defer：腳本延遲到 HTML 解析完成後，DOMContentLoaded 事件前執行，保證執行順序。適用於需要操作 DOM 或依賴其他腳本的情況。沒有這兩個屬性時，腳本會立即下載並執行，阻塞 HTML 解析。'
      }
    ]
  },
  {
    name: 'CSS',
    questions: [
      {
        question: '請說明 CSS 選擇器的優先級。',
        answer:
          'CSS 選擇器優先級從高到低：1) !important（最高，應謹慎使用）。2) 內聯樣式。3) ID 選擇器。4) 類選擇器、屬性選擇器、偽類。5) 元素選擇器、偽元素。6) 通配符選擇器。計算方法：(內聯樣式, ID數, 類數, 元素數)。相同優先級時，後面的覆蓋前面的。複合選擇器的優先級是其組成部分的總和。理解優先級有助於編寫可維護的 CSS。'
      },
      {
        question: 'CSS 中 px、em、rem 的區別？又該如何選擇用哪個？',
        answer:
          'px 是固定單位，1px 等於一個設備像素。em 相對於元素的字體大小，1em 等於當前元素的字體大小。rem 相對於根元素（通常是 <html>）的字體大小。選擇：1) px 用於固定大小，不隨用戶設置變化。2) em 用於需要相對於當前元素字體大小縮放的場景。3) rem 用於響應式設計，易於全局控制。通常推薦使用 rem 作為主要單位，結合 px（邊框等）和 em（文本相關）使用，以實現靈活的響應式設計。'
      },
      {
        question: '說說你對 CSS 盒模型 (Box Model) 的理解。',
        answer:
          'CSS 盒模型描述了元素在頁面佈局中所佔空間。包括：內容（content）、內邊距（padding）、邊框（border）和外邊距（margin）。有兩種盒模型：1) 標準盒模型：width/height 只包括內容區域。2) IE 盒模型（box-sizing: border-box）：width/height 包括內容、內邊距和邊框。盒模型對佈局至關重要，理解它有助於準確控制元素大小和間距。現代開發中，常用 border-box 使尺寸計算更直觀。'
      },
      {
        question: 'CSS 水平垂直置中的方法。',
        answer:
          '常見的 CSS 水平垂直置中方法：1) Flexbox：設置父元素 display: flex; justify-content: center; align-items: center;。2) Grid：設置父元素 display: grid; place-items: center;。3) 絕對定位 + transform：設置子元素 position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);。4) 絕對定位 + margin: auto：設置子元素 position: absolute; top: 0; right: 0; bottom: 0; left: 0; margin: auto;。選擇方法取決於具體需求和瀏覽器兼容性考慮。'
      },
      {
        question: 'display: inline 和 display: block 的差異？',
        answer:
          'display: inline 和 display: block 的主要差異：1) 佈局：inline 元素在同一行內顯示，block 元素獨佔一行。2) 尺寸：inline 元素的寬高由內容決定，block 元素默認寬度為父容器的 100%。3) margin/padding：inline 元素的上下 margin 和 padding 無效，block 元素的所有 margin 和 padding 都有效。4) 包含：inline 元素通常只能包含數據和其他 inline 元素，block 元素可以包含 inline 和 block 元素。5) 默認：<span>、<a> 等是 inline，<div>、<p> 等是 block。理解這些差異有助於更好地控制頁面佈局。'
      },
      {
        question: 'display: none 和 visibility: hidden 的差異？',
        answer:
          'display: none 和 visibility: hidden 的主要差異：1) 佈局影響：display: none 會從文檔流中完全移除元素，不佔用空間；visibility: hidden 隱藏元素，但保留其空間。2) 繼承：visibility 可以被子元素繼承和覆蓋，display: none 不能。3) 事件：display: none 的元素不會響應任何事件；visibility: hidden 的元素可以響應事件。4) 過渡效果：visibility 可以應用過渡效果，display 不行。5) 重繪/回流：display: none 會觸發回流，visibility: hidden 只會觸發重繪。6) 輔助技術：display: none 的元素對屏幕閱讀器不可見，visibility: hidden 可能仍被讀取。選擇使用哪個取決於具體需求和性能考慮。'
      },
      {
        question: '請解釋 CSS position 有什麼值和作用？',
        answer:
          'CSS position 屬性的值和作用：1) static（默認）：元素按正常文檔流定位。2) relative：相對於元素原本位置定位，不脫離文檔流。3) absolute：相對於最近的非 static 定位祖先元素定位，脫離文檔流。4) fixed：相對於瀏覽器視窗定位，脫離文檔流。5) sticky：根據用戶滾動在 relative 和 fixed 之間切換。6) inherit：繼承父元素的 position 值。使用 top、right、bottom、left 屬性來指定偏移。理解這些值的作用對於實現複雜佈局和交互效果至關重要。'
      },
      {
        question: '前端圖片格式選擇，什麼時候該用 JPG、PNG、WebP 或 SVG 呢？',
        answer:
          '圖片格式選擇：1) JPG：適合照片和複雜圖像，有損壓縮，文件小。2) PNG：適合需要透明度的圖像，無損壓縮，文件較大。3) WebP：Google 開發的格式，同時支持有損和無損壓縮，文件小，但兼容性稍差。4) SVG：適合圖標、徽標等矢量圖，可縮放無損，文件小。選擇考慮因素：圖像類型、透明度需求、文件大小、清晰度要求、瀏覽器兼容性。一般而言，照片用 JPG，需要透明度用 PNG，圖標用 SVG，追求更小文件大小可考慮 WebP。'
      },
      {
        question: '偽類 (pseudo-classes) 和偽元素 (pseudo-elements) 是什麼？',
        answer:
          '偽類和偽元素都用於選擇特定狀態或部分的元素。偽類用單冒號（:），選擇元素的特定狀態，如 :hover, :active, :first-child。偽元素用雙冒號（::），創建或選擇元素的特定部分，如 ::before, ::after, ::first-line。主要區別：1) 語法：偽類單冒號，偽元素雙冒號（CSS3 後）。2) 功能：偽類選擇已存在的元素，偽元素創建新的元素。3) 使用場景：偽類多用於狀態樣式，偽元素用於添加內容或樣式化特定部分。理解兩者有助於編寫更精確和高效的 CSS。'
      }
    ]
  },
  {
    name: 'React',
    questions: [
      {
        question: '請解釋 React 生命週期？',
        answer:
          'React 生命週期分為三個階段：掛載、更新和卸載。主要生命週期方法：1) 掛載：constructor, render, componentDidMount。2) 更新：render, componentDidUpdate。3) 卸載：componentWillUnmount。在 React 16.3 後引入了新的生命週期方法，如 getDerivedStateFromProps 和 getSnapshotBeforeUpdate。函數組件使用 Hooks（如 useEffect）來模擬生命週期。理解生命週期有助於正確管理組件狀態和副作用，提高應用性能。'
      },
      {
        question:
          '什麼是純函式 (pure function)？為什麼 React 的函式元件需要是純函式？',
        answer:
          '純函數是給定相同輸入總是返回相同輸出，且沒有副作用的函數。React 函數組件需要是純函數因為：1) 可預測性：輸出只依賴於 props 和 state，便於測試和調試。2) 性能優化：React 可以優化渲染過程，如記憶化。3) 並發模式：純函數有助於實現 React 的並發特性。4) 避免副作用：保證渲染過程的純粹性，副作用應在 useEffect 等 Hooks 中處理。5) 函數式編程：符合 React 的聲明式編程理念。遵循純函數原則有助於構建可靠和高效的 React 應用。'
      },
      {
        question: '什麼是 JSX？為什麼要用 JSX？',
        answer:
          'JSX 是一種 JavaScript 的語法擴展，允許在 JavaScript 中寫類似 HTML 的代碼。使用 JSX 的原因：1) 直觀：結合 HTML 和 JavaScript，使組件結構更清晰。2) 編譯時檢查：可以在編譯時發現錯誤。3) 性能：JSX 編譯為高效的 JavaScript 代碼。4) 類型安全：與 TypeScript 結合提供更好的類型檢查。5) 靈活性：可以嵌入任何 JavaScript 表達式。6) 安全：默認防止 XSS 攻擊。JSX 不是必須的，但它大大提高了開發 React 應用的效率和可讀性。'
      },
      {
        question: 'React Hooks 是什麼？',
        answer:
          'React Hooks 是 React 16.8 引入的特性，允許在函數組件中使用狀態和其他 React 特性。主要 Hooks：1) useState：管理組件狀態。2) useEffect：處理副作用。3) useContext：訪問 Context。4) useReducer：複雜狀態邏輯。5) useCallback 和 useMemo：性能優化。6) useRef：訪問 DOM 元素。Hooks 的優點：1) 簡化組件邏輯。2) 更好的代碼復用。3) 避免 class 組件的問題。4) 更容易理解和測試。Hooks 改變了 React 開發範式，使函數組件成為主流。'
      },
      {
        question: '為什麼只能在最頂端層呼叫 Hook？從 useState 實作原理來回答。',
        answer:
          'Hooks 只能在最頂層調用是因為 React 依賴調用順序來正確關聯 state 和對應的 Hook。useState 的實現原理：React 在組件內部維護一個 Hooks 數組，每次渲染時按順序調用 Hook。如果在條件語句中使用 Hook，可能導致調用順序改變，使 React 無法正確關聯 state。這種設計使得 React 能夠高效地管理 Hooks 狀態，避免了顯式傳遞 state 的複雜性。遵守這個規則確保了 Hooks 在多次渲染之間保持一致性，是 Hooks 系統正常工作的基礎。'
      },
      {
        question: '為什麼 React 渲染列表時需要加上 key？',
        answer:
          'React 要求在渲染列表時為每個元素添加 key 的原因：1) 高效更新：key 幫助 React 識別哪些項目被修改、添加或刪除，從而最小化 DOM 操作。2) 維護組件狀態：正確的 key 可以在重新排序時保持組件狀態。3) 避免重複渲染：沒有 key 或使用索引作為 key 可能導致不必要的重渲染。4) 提高性能：特別是在大型列表中，正確的 key 可以顯著提升性能。5) 解決重複項問題：唯一的 key 可以幫助 React 正確處理列表中的重複項。使用穩定且唯一的標識符作為 key 是最佳實踐。'
      },
      {
        question: '什麼是 HOC (higher order component)？',
        answer:
          'HOC（高階組件）是一個函數，接受一個組件作為參數並返回一個新組件。主要特點：1) 復用邏輯：將通用功能封裝在 HOC 中，可以跨多個組件復用。2) 增強組件：可以向被包裝組件添加新的 props 或修改現有 props。3) 條件渲染：可以基於某些條件決定是否渲染被包裝組件。4) 組合性：多個 HOC 可以組合使用。5) 不修改原組件：遵循組合而非繼承的原則。HOC 在 React 中廣泛用於實現諸如權限控制、日誌記錄等橫切關注點。雖然 Hooks 在某些場景下可以替代 HOC，但 HOC 仍然是一種強大的組件復用技術。'
      },
      {
        question: 'useEffect 和 useLayoutEffect 的差別是什麼？',
        answer:
          'useEffect 和 useLayoutEffect 的主要區別：1) 執行時機：useEffect 在渲染完成後異步執行，useLayoutEffect 在 DOM 更新後同步執行。2) 性能影響：useEffect 不會阻塞瀏覽器繪製，useLayoutEffect 可能會延遲屏幕更新。3) 使用場景：useEffect 適用於大多數副作用，useLayoutEffect 適用於需要在 DOM 更新後立即執行的操作，如測量 DOM。4) 服務器渲染：useLayoutEffect 在服務器端不執行，可能導致警告。5) 執行順序：useLayoutEffect 總是在 useEffect 之前執行。一般建議優先使用 useEffect，只有在需要同步執行 DOM 操作時才使用 useLayoutEffect。'
      },
      {
        question: '什麼是 Virtual DOM？',
        answer:
          'Virtual DOM（虛擬 DOM）是 React 中的一個概念，它是真實 DOM 的輕量級 JavaScript 表示。主要特點：1) 性能優化：通過批量更新和最小化 DOM 操作來提高性能。2) 跨平台：使 React 可以在不同環境（如 Native）中渲染。3) 聲明式編程：開發者描述 UI 應該是什麼樣子，React 處理實際 DOM 操作。4) Diffing 算法：高效比較新舊虛擬 DOM 樹的差異。5) 批量更新：將多個更新合併，減少重繪和回流。6) 同步更新：保證 UI 與應用狀態的一致性。虛擬 DOM 是 React 高效渲染的核心機制，也是其聲明式編程模型的基礎。'
      },
      {
        question:
          '為什麼更新 React 中的 state 要用 immutable 的寫法？什麼是 immutable？該如何寫才會是 immutable？',
        answer:
          '在 React 中使用 immutable 更新 state 的原因：1) 性能優化：React 可以快速比較引用來決定是否需要重新渲染。2) 可預測性：避免意外的副作用。3) 時間旅行調試：便於實現撤銷/重做功能。4) 並發特性：支持 React 的並發模式。Immutable 意味著一旦創建就不能被修改的數據。實現 immutable 更新：1) 展開運算符：{ ...oldState, newProp: newValue }。2) Object.assign()：Object.assign({}, oldState, { newProp: newValue })。3) 數組方法：concat(), map(), filter() 等。4) 使用 Immer 等庫。遵循 immutable 原則有助於構建更可靠和高效的 React 應用。'
      },
      {
        question: '請解釋 React fiber。',
        answer:
          'React Fiber 是 React 16 中引入的新協調引擎。主要特點：1) 增量渲染：將渲染工作分解成小單元，可以暫停和恢復。2) 優先級：可以為不同的更新分配優先級。3) 錯誤邊界：更好的錯誤處理機制。4) 並發模式：支持非阻塞渲染。5) 更好的動畫、佈局和手勢處理。6) 異步渲染：可以在後台準備新的元素樹。7) 可中斷/可恢復：長時間運行的任務可以被分割。Fiber 的核心是重新實現了 React 的核心算法，使其更適合於複雜的 UI 交互和動畫。它為未來的 React 特性如並發模式奠定了基礎。'
      },
      {
        question: 'React 18 有出什麼新功能？',
        answer:
          'React 18 的主要新功能：1) 自動批處理：自動合併多個 state 更新，提高性能。2) 並發渲染：新的 root API 支持並發特性。3) Suspense 改進：支持服務器端組件。4) 新的 Hooks：如 useId, useTransition, useDeferredValue。5) 嚴格模式增強：更好地檢測副作用。6) 改進的 Suspense 和錯誤邊界交互。7) 新的客戶端和服務器端渲染 APIs。8) 選擇性的並發特性：通過 createRoot 啟用。9) 改進的 TypeScript 支持。這些新特性旨在提高應用性能、改善用戶體驗，並為未來的 React 發展奠定基礎。'
      },
      {
        question: '在 React 中怎麼優化效能？',
        answer:
          'React 性能優化策略：1) 使用 React.memo 進行組件記憶化。2) 使用 useMemo 和 useCallback 記憶化值和函數。3) 使用 PureComponent 或 shouldComponentUpdate 控制重渲染。4) 使用 key 優化列表渲染。5) 代碼分割和懶加載（React.lazy 和 Suspense）。6) 避免不必要的渲染，如使用 Context 時的優化。7) 使用生產版本的 React。8) 使用 Web Workers 處理複雜計算。9) 使用虛擬滾動處理大列表。10) 優化圖片和資源加載。11) 使用 React Profiler 進行性能分析。12) 考慮使用狀態管理庫如 Redux 進行狀態管理。這些技術可以顯著提高 React 應用的性能和響應性。'
      }
    ]
  },
  {
    name: 'Next.js',
    questions: [
      {
        question: 'Next.js 中的 SSR 是什麼?',
        answer:
          'SSR (Server-Side Rendering) 是 Next.js 的一個特性，允許在服務器上渲染 React 組件，提高首次加載性能和 SEO。它能夠在服務器端生成完整的 HTML，使得頁面內容更快地呈現給用戶，並且對搜索引擎更友好。'
      },
      {
        question: '什麼是 Next.js 中的靜態生成（Static Generation）？',
        answer:
          '靜態生成是 Next.js 的一種預渲染方法，它在構建時生成 HTML。這意味著在用戶請求之前，頁面的 HTML 就已經生成好了。靜態生成適用於內容不經常變化的頁面，如博客文章或產品列表。它提供了極快的頁面加載速度，因為內容可以被 CDN 緩存。'
      },
      {
        question: 'Next.js 中的 API 路由是什麼？',
        answer:
          'API 路由允許你在 Next.js 應用中創建 API 端點。它們位於 pages/api 目錄下，每個文件都會變成一個 API 端點。API 路由使得在同一個 Next.js 項目中構建前端和後端變得容易，無需單獨的後端服務器。這對於處理表單提交、數據庫操作或與第三方 API 集成非常有用。'
      },
      {
        question: '解釋 Next.js 中的動態路由。',
        answer:
          '動態路由允許你創建具有動態參數的頁面。在 Next.js 中，你可以通過在方括號中包裹文件名來創建動態路由，例如 [id].js。這使得你可以根據 URL 參數動態生成頁面內容。動態路由對於創建產品詳情頁、用戶資料頁等基於數據的頁面非常有用。'
      },
      {
        question: 'Next.js 中的 getServerSideProps 函數有什麼作用？',
        answer:
          'getServerSideProps 是 Next.js 中用於服務器端渲染的函數。它在每次請求時在服務器上運行，允許你獲取外部數據並將其作為 props 傳遞給頁面。這對於需要頻繁更新或基於用戶特定數據的頁面很有用。使用 getServerSideProps 可以確保頁面始終顯示最新數據，但可能會增加頁面加載時間。'
      },
      {
        question:
          '什麼是 Next.js 中的增量靜態再生（Incremental Static Regeneration）？以及 getServerSideProps 和 getStaticProps 的差異？',
        answer:
          '增量靜態再生（ISR）是 Next.js 的一個功能，它允許你在特定的時間間隔後重新生成靜態頁面。這結合了靜態生成的性能優勢和服務器端渲染的數據新鮮度。使用 ISR，你可以為每個頁面設置一個重新驗證時間，在這個時間過後，Next.js 將在後台重新生成該頁面。這對於需要定期更新但不需要實時數據的頁面非常有用。\n\ngetServerSideProps 和 getStaticProps 的主要差異：\n1) 執行時機：getServerSideProps 在每次請求時在服務器上執行，而 getStaticProps 在構建時執行。\n2) 數據新鮮度：getServerSideProps 總是提供最新數據，getStaticProps 提供構建時的數據。\n3) 性能：getStaticProps 通常性能更好，因為頁面可以被緩存。\n4) 使用場景：getServerSideProps 適用於需要實時或用戶特定數據的頁面，getStaticProps 適用於可以預先渲染的頁面。\n5) 部署要求：使用 getServerSideProps 的頁面需要服務器運行 Node.js，而 getStaticProps 生成的頁面可以靜態部署。'
      }
    ]
  },
  {
    name: 'Browser',
    questions: [
      {
        question:
          '請說明 DOMContentLoaded, load, beforeunload, unload 的觸發時機。',
        answer:
          'DOMContentLoaded：DOM 完全加載和解析後觸發，不等待樣式表、圖片和子框架加載完成。load：頁面及所有資源（圖片、樣式等）完全加載後觸發。beforeunload：窗口、文檔及其資源即將卸載時觸發，常用於顯示確認對話框。unload：文檔或一個子資源正在被卸載時觸發，用於清理工作。這些事件在頁面生命週期中扮演重要角色，了解它們有助於優化頁面加載和卸載過程。'
      },
      {
        question: '請說明瀏覽器中的事件委派、捕獲、冒泡。',
        answer:
          '事件委派：將事件監聽器添加到父元素而不是每個子元素，利用事件冒泡處理子元素事件，提高性能和靈活性。事件捕獲：事件從最外層元素向目標元素傳播的過程。事件冒泡：事件從目標元素向最外層元素傳播的過程。DOM 事件流：捕獲階段 → 目標階段 → 冒泡階段。可以使用 addEventListener 的第三個參數控制在捕獲或冒泡階段處理事件。理解這些概念有助於更好地控制事件處理和提高應用性能。'
      },
      {
        question: 'e.target 和 e.currentTarget 的區別。',
        answer:
          'e.target：指向觸發事件的元素，即事件的實際目標。e.currentTarget：指向事件綁定的元素，即當前正在處理事件的元素。區別：在事件冒泡過程中，e.target 保持不變，而 e.currentTarget 會隨著事件冒泡到不同層級的元素而改變。例如，點擊一個按鈕，e.target 始終是按鈕，而 e.currentTarget 可能是按鈕、其父元素或更上層的元素，取決於事件處理函數綁定在哪個元素上。理解這個區別對於正確處理事件委派和複雜的事件流非常重要。'
      },
      {
        question: 'CORS 是什麼？為什麼要有 CORS？',
        answer:
          'CORS（跨源資源共享）是一種安全機制，允許服務器聲明哪些源可以訪問其資源。為什麼需要 CORS：1) 安全性：防止惡意網站訪問敏感數據。2) 同源策略限制：瀏覽器默認阻止跨域請求，CORS 提供了安全的跨域方法。3) API 訪問控制：允許服務器精確控制哪些域可以訪問資源。4) 減少安全風險：降低 CSRF 和 XSS 攻擊的風險。5) 支持現代 Web 應用：允許前端和後端分離部署。CORS 通過在 HTTP 頭中添加額外的 Origin 相關字段來工作，使服務器能夠決定是否允許跨域請求。理解和正確配置 CORS 對於構建安全的 Web 應用至關重要。'
      },
      {
        question: '請解釋 HTTP caching 機制。',
        answer:
          'HTTP 緩存機制允許瀏覽器或代理服務器存儲 Web 內容以提高性能。主要方法：1) 強緩存：通過 Cache-Control 和 Expires 頭控制，直接使用本地緩存，不發送請求。2) 協商緩存：使用 ETag 或 Last-Modified 頭，發送條件請求檢查資源是否變化。3) 緩存驗證：使用 If-None-Match 或 If-Modified-Since 頭進行驗證。4) 緩存刷新：通過版本號或時間戳更新緩存。5) 私有vs公共緩存：通過 Cache-Control 指定緩存範圍。6) 緩存破壞：使用唯一 URL 強制重新獲取資源。正確使用 HTTP 緩存可以顯著提高網站性能和用戶體驗。'
      },
      {
        question: '請描述 cookie, sessionStorage 和 localStorage 的差異。',
        answer:
          'Cookie, sessionStorage 和 localStorage 都是瀏覽器存儲機制，但有以下差異：1) 生命週期：Cookie 可設置過期時間，sessionStorage 在頁面會話結束時清除，localStorage 永久保存直到被清除。2) 容量：Cookie 通常限制 4KB，sessionStorage 和 localStorage 一般至少 5MB。3) 與服務器通信：Cookie 會在 HTTP 請求中自動發送，而 Storage 對象不會。4) 易用性：Storage 對象提供了更簡單的 JavaScript API。5) 作用域：Cookie 可跨子域，sessionStorage 限於當前頁面，localStorage 在同源頁面間共享。6) 安全性：Cookie 可設置 HttpOnly 防止 XSS，Storage 對象無此功能。選擇使用哪種機制取決於數據的敏感性、大小和使用場景。'
      },
      {
        question: '你知道 localStorage 但你知道 IndexedDB 嗎？',
        answer:
          'IndexedDB 是一個低級 API，用於客戶端存儲大量結構化數據。與 localStorage 相比：1) 存儲容量：IndexedDB 可存儲更大量的數據，而 localStorage 通常限制在 5-10MB。2) 數據類型：IndexedDB 可存儲結構化數據，包括文件/二進制數據，而 localStorage 僅限於字符串。3) 異步操作：IndexedDB 使用異步 API，不會阻塞主線程，而 localStorage 是同步的。4) 索引和查詢：IndexedDB 支持索引和高級查詢，localStorage 只能按 key 存取。5) 事務支持：IndexedDB 提供事務支持，確保數據完整性。6) 複雜性：IndexedDB 的 API 較為複雜，而 localStorage 簡單易用。IndexedDB 適用於需要存儲大量結構化數據或需要高性能查詢的 Web 應用。'
      },
      {
        question: '分享從瀏覽器輸入網址到打開網頁的整個過程。',
        answer:
          '從輸入 URL 到頁面加載的過程：1) 輸入 URL：用戶在瀏覽器地址欄輸入 URL。2) DNS 解析：將域名轉換為 IP 地址。3) 建立 TCP 連接：客戶端與服務器建立 TCP 三次握手。4) 發送 HTTP 請求：瀏覽器發送 HTTP GET 請求。5) 服務器處理請求並回應：服務器處理請求，返回 HTTP 響應。6) 瀏覽器解析 HTML：開始解析 HTML 文檔。7) 請求額外資源：如 CSS、JavaScript、圖片等。8) 渲染頁面：構建 DOM 樹、CSSOM 樹，然後合成渲染樹。9) 執行 JavaScript：解析並執行 JavaScript 代碼。10) 頁面加載完成：觸發 load 事件。整個過程涉及網絡、服務器、瀏覽器渲染引擎等多個方面，理解這個過程有助於優化網頁性能和用戶體驗。'
      },
      {
        question:
          '請問瀏覽器的渲染過程？回流 (reflow) 重繪 (repaint) 的差別是什麼？',
        answer:
          '瀏覽器渲染過程：1) 解析 HTML 生成 DOM 樹。2) 解析 CSS 生成 CSSOM 樹。3) 將 DOM 和 CSSOM 合併成渲染樹。4) 布局（回流）：計算元素的大小和位置。5) 繪製：將元素繪製到屏幕上。回流（Reflow）和重繪（Repaint）的區別：回流：當渲染樹中的一部分（或全部）因為元素的規模尺寸、布局、隱藏等改變而需要重新構建，這個過程稱為回流。回流必定會導致重繪。重繪：當渲染樹中的一些元素需要更新屬性，而這些屬性只是影響元素的外觀、風格，而不會影響布局，比如背景色、文字顏色等，這個過程稱為重繪。回流比重繪的代價更高，因為回流涉及到布局的變化。優化建議包括：批量修改 DOM，使用 DocumentFragment，避免頻繁讀取會引發回流的屬性等。'
      },
      {
        question: '請解釋 HTTP 和 HTTPS，兩者有什麼差別？',
        answer:
          'HTTP（超文本傳輸協議）和 HTTPS（HTTP 安全）的主要區別：1) 安全性：HTTPS 通過 SSL/TLS 協議加密數據，而 HTTP 以明文傳輸。2) 端口：HTTP 默認使用 80 端口，HTTPS 使用 443 端口。3) URL 前綴：HTTP 使用 "http://"，HTTPS 使用 "https://"。4) 認證：HTTPS 需要 SSL 證書，提供身份驗證。5) 性能：HTTPS 由於加密解密過程，可能略慢於 HTTP。6) SEO：搜索引擎更青睞 HTTPS 網站。7) 數據完整性：HTTPS 能防止數據被篡改。8) 適用場景：HTTPS 適用於涉及敏感信息的網站。9) 成本：HTTPS 需要購買和維護 SSL 證書。10) 連接過程：HTTPS 需要 SSL 握手。總的來說，HTTPS 提供了更高的安全性和可信度，是現代 Web 的推薦標準。'
      },
      {
        question: '請問 HTTPS 的加密過程？',
        answer:
          'HTTPS 的加密過程（SSL/TLS 握手）：1) 客戶端發送 ClientHello：包含支持的 SSL/TLS 版本、加密套件等。2) 服務器回應 ServerHello：選擇使用的協議版本和加密套件。3) 服務器發送證書：包含公鑰和證書鏈。4) 服務器發送 ServerHelloDone。5) 客戶端驗證證書。6) 客戶端生成隨機密鑰，用服務器公鑰加密後發送。7) 客戶端發送 ChangeCipherSpec，表示後續使用協商的密鑰和加密套件。8) 客戶端發送 Finished 消息。9) 服務器用私鑰解密得到會話密鑰。10) 服務器發送 ChangeCipherSpec。11) 服務器發送 Finished 消息。12) 握手完成，開始加密通信。這個過程確保了通信的機密性、完整性和身份認證，是 HTTPS 安全性的核心。'
      },
      {
        question: 'cookie 有哪些屬性？怎麼禁止 js 訪問 cookie？',
        answer:
          'Cookie 的主要屬性：1) Name：cookie 的名稱。2) Value：cookie 的值。3) Domain：指定 cookie 可以送達的主機名。4) Path：指定 cookie 在哪個路徑下有效。5) Expires/Max-Age：設置 cookie 的過期時間。6) Secure：只在 HTTPS 連接中傳輸。7) HttpOnly：禁止 JavaScript 訪問 cookie。8) SameSite：控制 cookie 在跨站請求時的行為。禁止 JavaScript 訪問 cookie：設置 HttpOnly 屬性。例如，在服務器端設置 cookie 時：Set-Cookie: name=value; HttpOnly。這樣設置後，JavaScript 將無法通過 document.cookie 訪問該 cookie，這有助於防止 XSS 攻擊。但請注意，HttpOnly cookie 仍會在 HTTP 請求中發送到服務器。'
      },
      {
        question: 'HTTP/1、HTTP/1.1 和 HTTP/2 的區別。',
        answer:
          'HTTP/1、HTTP/1.1 和 HTTP/2 的主要區別：HTTP/1：1) 連接不複用。2) 僅支持文本傳輸。HTTP/1.1：1) 引入持久連接。2) 管道化請求。3) 緩存控制增強。4) 支持分塊傳輸。5) 引入主機頭。HTTP/2：1) 多路複用：單一 TCP 連接處理多個請求。2) 服務器推送：主動推送相關資源。3) 頭部壓縮：減少冗餘頭信息。4) 二進制分幀：更高效的傳輸。5) 流量控制：更好的網絡利用。6) 優先級和依賴性：優化資源加載順序。HTTP/2 相比前兩個版本，大幅提高了 Web 性能，減少了延遲，提高了頁面加載速度。每個新版本都解決了前一個版本的限制，並引入了新的優化特性。'
      },
      {
        question: '什麼是垃圾回收機制 (Garbage Collection)？',
        answer:
          '垃圾回收（GC）是自動管理內存的機制，主要用於識別和清除不再使用的內存。主要特點：1) 自動化：無需手動釋放內存。2) 週期性：定期執行或在特定條件下觸發。3) 標記-清除：識別活動對象，清除非活動對象。4) 引用計數：跟踪對象被引用的次數。5) 分代回收：根據對象存活時間分類處理。6) 增量回收：分步執行，減少暫停時間。7) 並發回收：與應用程序並行執行。優點包括簡化內存管理、防止內存泄漏。缺點可能包括性能開銷、不可預測的暫停。在 JavaScript 等高級語言中，GC 是語言運行時的重要組成部分，理解 GC 有助於編寫更高效的代碼和診斷性能問題。'
      },
      {
        question: '什麼是 CDN？',
        answer:
          'CDN（內容分發網絡）是分布式服務器系統，用於更快、更可靠地向用戶傳遞內容。主要特點：1) 地理分布：服務器分布在不同地理位置。2) 緩存：在邊緣服務器緩存靜態內容。3) 負載均衡：分散用戶請求到不同服務器。4) 就近訪問：用戶從最近的服務器獲取內容。5) 安全性：提供 DDoS 防護等安全服務。6) 性能優化：壓縮、優化路由等。7) 實時監控：監控網絡狀況和性能。優點包括：提高網站速度、減少源服務器負載、提高可用性和冗餘性。CDN 特別適用於大型網站、流媒體服務和需要全球分發內容的應用。使用 CDN 可以顯著改善用戶體驗，尤其是對地理位置分散的用戶群。'
      },
      {
        question: '什麼是 SSL 和 TLC？兩者有什麼不一樣？',
        answer:
          'SSL（安全套接層）和 TLS（傳輸層安全）是用於在網絡上提供安全通信的協議。主要區別：1) 版本：SSL 是較早的協議，TLS 是其後續版本。2) 安全性：TLS 通常更安全，修復了 SSL 的一些漏洞。3) 握手過程：TLS 握手過程略有不同，更安全高效。4) 警報機制：TLS 有更詳細的警報機制。5) 記錄協議：TLS 的記錄協議更靈活。6) 密碼套件：TLS 支持更多現代加密算法。7) 兼容性：TLS 向後兼容 SSL。8) 使用情況：現代系統主要使用 TLS，SSL 已被廢棄。儘管在日常用語中常將兩者混用，但技術上 TLS 是 SSL 的改進版本。目前，HTTPS 連接實際上使用的是 TLS 協議，而非 SSL。了解這些差異有助於選擇適當的安全協議和配置。'
      },
      {
        question: 'TCP 和 UPD 的區別是什麼？',
        answer:
          'TCP（傳輸控制協議）和 UDP（用戶數據報協議）的主要區別：1) 連接：TCP 是面向連接的，UDP 是無連接的。2) 可靠性：TCP 提供可靠傳輸，UDP 不保證可靠性。3) 順序：TCP 保證數據順序，UDP 不保證。4) 速度：UDP 通常比 TCP 快。5) 流量控制：TCP 有流量控制機制，UDP 沒有。6) 錯誤檢測：TCP 提供錯誤檢測和糾正，UDP 只有基本的錯誤檢測。7) 應用場景：TCP 適用於要求可靠性的應用（如網頁、郵件），UDP 適用於實時應用（如視頻流、在線游戲）。8) 數據邊界：TCP 數據是流式的，UDP 保留數據邊界。9) 首部開銷：TCP 首部較大（20字節），UDP 首部較小（8字節）。10) 狀態：TCP 要維護連接狀態，UDP 是無狀態的。選擇使用 TCP 還是 UDP 取決於應用的具體需求，如對可靠性、速度的要求等。'
      },
      {
        question: '請問常見的 HTTP 狀態碼。',
        answer:
          '常見的 HTTP 狀態碼：1xx（信息性狀態碼）：100 Continue。2xx（成功狀態碼）：200 OK，201 Created，204 No Content。3xx（重定向狀態碼）：301 Moved Permanently，302 Found，304 Not Modified。4xx（客戶端錯誤狀態碼）：400 Bad Request，401 Unauthorized，403 Forbidden，404 Not Found，405 Method Not Allowed，429 Too Many Requests。5xx（服務器錯誤狀態碼）：500 Internal Server Error，502 Bad Gateway，503 Service Unavailable，504 Gateway Timeout。這些狀態碼幫助客戶端理解請求的結果，對於調試和錯誤處理非常重要。瞭解這些狀態碼有助於開發者快速診斷問題，提供更好的用戶體驗。'
      },
      {
        question: 'websocket 和 HTTP 通訊協定的差別是？',
        answer:
          'WebSocket 和 HTTP 的主要區別：1) 連接：WebSocket 是持久連接，HTTP 是請求-響應模型。2) 雙向通信：WebSocket 支持全雙工通信，HTTP 主要是單向的。3) 協議：WebSocket 使用 ws:// 或 wss://，HTTP 使用 http:// 或 https://。4) 實時性：WebSocket 適合實時應用，HTTP 需要輪詢或長輪詢模擬實時。5) 效率：WebSocket 更高效，減少了 HTTP 的頭部開銷。6) 狀態：WebSocket 是有狀態的，HTTP 是無狀態的。7) 推送：WebSocket 支持服務器主動推送，HTTP 通常不支持（除了 HTTP/2 的服務器推送）。8) 跨域：WebSocket 天然支持跨域，HTTP 需要額外的 CORS 配置。9) 使用場景：WebSocket 適用於聊天、實時數據等場景，HTTP 適用於一般的網頁請求。10) 實現複雜度：WebSocket 實現可能較為複雜，需要處理連接維護等問題。了解這些差異有助於選擇適合特定應用需求的通信協議。'
      }
    ]
  }
]
