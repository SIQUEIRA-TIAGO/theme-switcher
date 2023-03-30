const switchTheme = (switchBtn) => {
    const body = document.getElementsByTagName('body')[0]
    if(switchBtn){
        localStorage.setItem('theme', 'dark')
        body.classList.add('dark')
        body.classList.remove('light')
    } else {
        localStorage.removeItem('theme')
        body.classList.add('light')
        body.classList.remove('dark')
    }
}

const theme = localStorage.getItem('theme')
if(theme){
    switchTheme(document.getElementsByTagName('input')[0].checked = true)
}

document.getElementsByTagName('input')[0].addEventListener('change', (evt) => {
    switchTheme(evt.target.checked)
})