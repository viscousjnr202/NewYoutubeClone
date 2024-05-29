// export const API_KEY = 'AIzaSyAUeK6Fz2lWOHbgb-Wup5XEGCgQnIOyuXY'
export const API_KEY = 'AIzaSyCFCPOvc8r7Da5gqIRaCGznBMBhG_3F1yY'

export const value_converter = (value)=>{
    if(value > 1000000){
        return( Math.floor(value/1000000)+ 'M')
    }
    if(value > 1000){
        return( Math.floor(value/1000)+ 'K')
    }
    else{
        return(value)
    }
}