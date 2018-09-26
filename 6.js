// function lan(){
//     console.log('h'.toUpperCase('es')+'ello,'+'World')
    
// }
// lan()
function helloWorld(arg)
{
    switch(arg)
    {
        case 'en':return "Hello World"
                break
        case 'ru':return "Привет мир"
                break
        case 'es':return "Hola Mundo"
                break
        case 'de':return "Hallo Welt"
                break
        default: return "Hello World"
    }
}
console.log(helloWorld('en'));
console.log(helloWorld('ru'));
console.log(helloWorld('de'));
console.log(helloWorld('es'));

