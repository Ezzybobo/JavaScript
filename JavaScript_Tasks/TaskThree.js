let size = 8;

for (let level=1; level<=size; level++) {
        let row="";
    for (let hash=1; hash<=size; hash++) {
        let sum = level + hash;
    if (sum%2==0) {
        row+=" ";
    }
    else {
        row+="#";
    }
    }   
    console.log(row);
}
