//

 export let ValidateEmptyField=(fieldName, data)=>{

    if (data===""){
        return{
    error:`${fieldName} cannot be empty`
}}
return null
}

export let ValidateAllFieldTypes=(fieldName,value){
    let errorMsg=null
    if(fieldName="email"){
        errorMsg=ValidateEmptyField(fieldName,value)
        if(errorMsg!=null)return errorMsg

        if(value.includes("@")){
            errorMsg=`${fieldName}not valid`

            return errorMsg

        }
    }else if(fieldName=="name"){
        errorMsg=ValidateEmptyField(fieldName,value)
    
        if(errorMsg!=null)return errorMsg

        // check for length of name must be greater than 3

        if (value.length<3){
            errorMsg=`${fieldName}must be at least 3 character long`
            return errorMsg
        }


    }
return null
}







