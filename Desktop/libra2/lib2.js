count = 0;
// var ten = [];
function disp(){
    var stobooks = Object.keys(localStorage);
    // console.log(stobooks)
     var storebook = "mybooks" + stobooks.length;
        // console.log(storebook)
       
    var obj = {
        title: booktitle.value,
        pages:mypage.value,
        author:myauthor.value
    };
    var ob = JSON.stringify(obj);
    localStorage.setItem(storebook,ob);
    if (booktitle.value == "" || mypage.value == "" || myauthor.value == ""){
        $('#divs').toggle(1000)
        document.getElementById('divs').style.display = "block";
    }
    alert('SUCCESSFULLY ADDED');
     booktitle.value = "";
     mypage.value = "";
     myauthor.value = "";
}

function dispe(){
    $('#showtab').toggle(2000);
    document.getElementById('showtab').style.display = "";
    var fetchkeys = Object.keys(localStorage);

    for (let n = 0; n < fetchkeys.length; n++) {
       var ann = JSON.parse(localStorage.getItem(fetchkeys[n]));
       var author = ann.author;

       var pages = ann.pages;

       var title = ann.title;
       count++;
       var m = `<tr><td>`+count+`</td><td>`+author+`</td><td>`+pages+`</td><td>`+title+`</td></tr>`;
     tbody.innerHTML += m;
   } 
}
function hideMe(){
    document.getElementById('divs').style.display = ""; 
}
function serch() {
     var search = searchme.value;
        var fetchbook = Object.keys(localStorage);
       
        for (let v = 0; v < fetchbook.length; v++){
       
        var book = JSON.parse(localStorage.getItem(fetchbook[v]));
         var ba = book.author;
      var author = book.author;
    
        var pages = book.pages;
    
        var title = book.title;
    
    
      var exp = new RegExp(ba);
       
        if (search.match(exp)){
          
            
            if( search == ba){
            
    count++;
    var mm = `<tr><td>`+count+`</td><td>`+author+`</td><td>`+pages+`</td><td>`+title+`</td></tr>`;
    tdisplay.innerHTML = mm;
    
    }
    
    }
    
    
    }
    
    }





