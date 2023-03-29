document.getElementsByTagName('input')[0].addEventListener('change', () => {
    const body = document.getElementsByTagName('body')[0]
        body.classList.toggle('dark')
        body.classList.toggle('light')
})