/**
 * @param {HTMLSelectElement} selectDD
 * @returns {void}
 */
function hideOrShow(selectDD){
    const selectID = selectDD.value
    const htmlOption = document.getElementById('htmloption')
    const jsOption = document.getElementById('jsoption')
    if(selectID == "htmloption"){
        htmlOption.classList.remove('hide')
        jsOption.classList.add('hide')
    }else{
        htmlOption.classList.add('hide')
        jsOption.classList.remove('hide')
    }
}
/**
 * 
 * @param {Event} e 
 * @returns {}
 */
function valaszto(e){
    /**@type {HTMLSelectElement} */
    const target = e.target

    hideOrShow(target)
}