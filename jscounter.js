const t = document.getElementById("time")
t.addEventListener("click",function(){
    // +this.innerHTM 為數字型態
    this.innerHTML = +this.innerHTML + 1
})