function htmlCon(arr) {
  if (arr.length == 3) {
    let checkedForElementArrays = arr.filter(el => Array.isArray(el)); //[ ['a', 'text'] ]
    if (checkedForElementArrays.length == 0) {
      return `<${arr[0]}>${arr[1]}${arr[2]}</${arr[0]}>`;
    } else {
      let convertedElementArray = htmlCon(checkedForElementArrays.flat()); //['a', 'text']
      return `<${arr[0]}>${convertedElementArray} ${arr[2]}</${arr[0]}>`;
    }
  } else {
    if (arr.length == 1) {
      return `<${arr[0]}/>`;
    }
    if (arr.length == 2) {
      if (arr[1].startsWith("<")) {
        let secondElement = `${arr[1]}`;
        let sanitised = secondElement
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;");
        return `<${arr[0]}>${sanitised}</${arr[0]}>`;
      } else {
        return `<${arr[0]}>${arr[1]}</${arr[0]}>`;
      }
    }
  }
}

console.log(htmlCon(["p", "<b>Text</b>"]));
