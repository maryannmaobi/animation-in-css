count = 0;
// var ten = [];
function disp(){
    var ten = JSON.parse(localStorage.books);
    var obj = {
        title: booktitle.value,
        pages:mypage.value,
        author:myauthor.value
    };
    ten.push(obj);
    localStorage.books = JSON.stringify(ten);
    if (booktitle.value == "" || mypage.value == "" || myauthor.value == ""){
        $('#divs').toggle(1000)
        document.getElementById('divs').style.display = "block";
    }
  }

function dispe(){
    var ann = JSON.parse(localStorage.books);
    console.log(ann)
    for(var i = 0; i < ann.length; i ++){
        count++;
        var m = `<tr><td>`+count+`</td><td>`+ann[i].author+`</td><td>`+ann[i].pages+`</td><td>`+ann[i].title+`</td></tr>`;
      tbody.innerHTML += m;
}
}
function hideMe(){
    document.getElementById('divs').style.display = ""; 
}

