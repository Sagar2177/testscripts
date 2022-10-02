console.log('Runnin')

const isPalindrome = function(s){
  const san = s.replace(/[^\w]/gi, '').toLowerCase();
  return s.split('').reverse().join('') === san;
}