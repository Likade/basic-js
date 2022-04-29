const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function quickSort(arr) {
  if (arr.length == 0) return [];
  let a = [],
    b = [],
    p = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < p) a.push(arr[i]);
    else b.push(arr[i]);
  }
  return quickSort(a).concat(p, quickSort(b));
}
function isString(val) {
  return (typeof val === "string" || val instanceof String);
}
function createDreamTeam(members)
{ 
  if(Array.isArray(members)==false)return false;
  let str = '';
  let j = 0;
  for(var i = 0; i<members.length; i++)
  { j = 0;
      if(isString(members[i])){
        while(members[i][j]==' ')j++;
        str+=members[i][j];}
  }
  var arr = quickSort(str.toUpperCase());
  str = '';
  for(var i = 0; i<arr.length; i++)
      str+=arr[i];
  return str.length==0 ? false : str; 
}
console.log(createDreamTeam([ true, null]))

module.exports = {
  createDreamTeam
};
