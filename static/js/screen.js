var put=$('.searchBox input')
var fileNameFa=$('#list tr').slice(1)
console.log(fileNameFa)
var fileName=[]
for (let i = 0; i < fileNameFa.length; i++) {
    fileName.push($(fileNameFa[i]).children().first().text())
}
console.log(fileName)
put.on('input',()=>{
    fileName.forEach((item,index)=>{
        if(item.indexOf(put.val())==-1){
            $(fileNameFa[index]).css('display','none')
        }else{
            $(fileNameFa[index]).css('display','')
        }
    })
})