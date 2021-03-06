// 为空时是 true
export  const isEmpty = (value) =>{ 
  return(
    value === undefined || value === null || 
    (typeof value === 'object' && Object.keys(value).length === 0) || 
    (typeof value === 'string' && value.trim().length === 0)
  );
}

export const completionImgUrl = ( url ) =>{
  return 'http://localhost:3000/images/' + url;
  //return 'http://94.191.17.174:3000/images/'+url
}