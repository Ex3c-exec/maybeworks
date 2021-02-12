export default function searchBarParams(input){
    input = input.replace(/[ /]/gi,'');
    return {
        latime: Number(input.slice(0, 3)),
        inaltime:Number(input.slice(3,5)),
        diametru:input.slice(5)
    }
}