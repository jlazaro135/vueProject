export function arrayRemove(arr, value) { 
    return arr.filter(function(ele){ 
        return ele != value; 
    });
}

export function checkComments(data, text){
    if(!data || data.trim().length === 0){
      return text
    }
    return text = data
}