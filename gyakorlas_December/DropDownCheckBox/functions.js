
/**
 * @param {HTMLInputElement} checkbox 
 * @returns {void}
 */
function showHide(checkbox) {
    const pipa = checkbox.checked
    const htmlSection = document.getElementById("htmlsection")
    const jsSection = document.getElementById("jssection")
    if (pipa) {
        htmlSection.classList.add('hide')
        jsSection.classList.remove('hide')
    } else {
        htmlSection.classList.remove('hide')
        jsSection.classList.add('hide')
    }
}
/**
 * 
 * @param {Event} e 
 * @returns {void}
 */
function pipalva(e) {

    /**@type {HTMLInputElement} */
    const target = e.target

    console.log("pipalva")
    showHide(target)
}