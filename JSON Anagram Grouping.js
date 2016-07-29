// input:{'Words':['Earth','Dormitory','Punishment','Debit Card','Heart','Dirty Room','Hater','Bad Credit']}

// output:{'Anagrams':{['Punishment'],['Debit Card','Bad Credit'],['Dormitory','Dirty Room'],['Earth','Hater','Heart']}}

var input={'Words':['Earth','Dormitory','Punishment','Debit Card','Heart','Dirty Room','Hater','Bad Credit']};

var map={};
var anagram={};
for(var i=0;i<input.Words.length;i++){
    anagram = input.Words[i].toLowerCase().split('').sort().join('').trim();
    if(map[anagram]==null) 
      map[anagram]=[input.Words[i]];
    else
      map[anagram].push(input.Words[i]);
}


  console.log(map);
