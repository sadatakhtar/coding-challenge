# coding-challenge
Two Javascript tasks

Task 1: Create a function which takes two color inputs (Hexadecimal ) and returns the average color.
Task 2: Implement a function that takes such an array and generates the string of HTML markup.

  • Empty tags should be self-closing.
  • Consecutive text nodes are merged in the finished output.
  
Examples:

['div'] => '<div/>'
['h1', 'Text'] => '<h1>Text</h1>'
['span', 'More', 'Text'] => '<span>MoreText</span>'
['a', ['b', 'More'], ' Text'] => '<a><b>More</b> Text</a>'
['p', '<b>Text</b>'] => '<p>&lt;b&gt;Text&lt;/b&gt;</p>'
