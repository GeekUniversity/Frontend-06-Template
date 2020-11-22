function kmp(source,pattern) {
    let table = new Array(pattern.length).fill(0);
   {
    let i = 1,j = 0;
    while(i < pattern.length) {
        if(pattern[i] === pattern[j]) {
            ++i,++j;
            table[i] = j;
        } else {
            if(j > 0) {
                j = table[j];
            } else {
                ++i;
            }
        }
    }
   }

   console.log(table);

   {
    let i = 0,j = 0;
    while(i < source.length) {
       
        if(pattern[j] === source[i]) {
            
            ++i,++j;
            console.log('tag---', i,j);
        } else {
            if (j > 0) {
                console.log('tag++++', source,j);
               j = table[j];
            } else {
                ++i;
            }
        }

        if (j === pattern.length) {
            console.log('tag', '1');
            return true;
        }
       
    }
    console.log('tag==', i,j);
    return false;
   }

}

console.log(kmp('aabaaac','aabaaac'));

