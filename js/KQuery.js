class KQueryClass
{
    constructor(){};

    changeClassName(selector, name)
    {
       var elements= document.querySelectorAll(selector);
       var e;
       console.log(elements);
       for(let i =0;i<elements.length;i++)
       {
           elements[i].className=name;
       }
    }

    getDataSets(selector)
    {
        var datasets=[];
        var elements= document.querySelectorAll(selector);
        // console.log(elements);
       for(let i =0;i<elements.length;i++)
       {
            datasets.push(elements[i].dataset);
       }
        return datasets;
    }

    addChild(selector, elementName, innerHtml)
    {
        const n = document.createElement(elementName);
        n.innerHTML=innerHtml;
        console.log(n);
        var element= document.querySelector(selector);
        element.appendChild(n,element);
    }


    addElementBefore(selector, elementName, innerHtml)
    {
        const n = document.createElement(elementName);
        n.innerHTML=innerHtml;
        console.log(n);
        var element= document.querySelector(selector);
        element.parentNode.insertBefore(n,element);
    }

    addElementAfter(selector, elementName, innerHtml)
    {
        const n = document.createElement(elementName);
        n.innerHTML=innerHtml;
        console.log(n);
        var element= document.querySelector(selector);
        element.parentNode.insertBefore(n,element.nextSibling);
    }

    ajaxGet(url,data={},success =()=>{} ,error= ()=>{},responseType)
    {
        let xhr = new XMLHttpRequest();
        url+='?';

        for (var key in data) {
            url += key + '=' + data[key] + "&";
        }
        xhr.open("GET", url);
        xhr.responseType = responseType;
        xhr.send();
        xhr.onload = function(){
            if (xhr.status == 200 || xhr.status ==201){ 
                success(xhr.responseText)
            }else{ 
                error(xhr.responseText)
            }
        };
    }

    ajaxPost(url,data={},success =()=>{} ,error= ()=>{},responseType)
    {
        let xhr = new XMLHttpRequest();
        url+='?';

        var formData = new FormData();

        for (var key in data) {
            formData.append(key,data[key]);
        }
        xhr.open("POST", url,true);
        xhr.responseType = responseType;
        xhr.send(formData);
        xhr.onload = function(){

            if (xhr.status == 200 || xhr.status == 201){ 
                success(xhr.responseText)
            }else{ 
                error(xhr.responseText)
            }
        };
    }

    getVal(selector){
       var element = document.querySelector(selector);
       return element.value
    }

    setVal(selector,value){
        var element = document.querySelector(selector);
        element.value = value;
     }

     getCheckedVal(selector){
       var element = document.querySelector(selector);
        return element.checked;
     }
     setCheckedVal(selector,value){
        var element = document.querySelector(selector);
          element.checked=value;
      }
 








}

var KQuery= new KQueryClass();