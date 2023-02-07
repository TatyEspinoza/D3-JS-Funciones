document.querySelectorAll('#ele1, #ele2, #ele3, #ele4').forEach(selection => {
    selection.addEventListener('click', function () {
        selection.style.backgroundColor = "pink"

        document.addEventListener('keydown', function (event) {
            if (event.key === 'a') {
                document.querySelector('#ele1').style.backgroundColor = 'blueviolet'
                document.querySelector('#ele2').style.backgroundColor = 'blueviolet'
                document.querySelector('#ele3').style.backgroundColor = 'blueviolet'
                document.querySelector('#ele4').style.backgroundColor = 'blueviolet'

            } else if (event.key === 's') {
                document.querySelector('#ele1').style.backgroundColor = 'aqua'
                document.querySelector('#ele2').style.backgroundColor = 'aqua'
                document.querySelector('#ele3').style.backgroundColor = 'aqua'
                document.querySelector('#ele4').style.backgroundColor = 'aqua'
            }
            else if (event.key === 'd') {
                document.querySelector('#ele1').style.backgroundColor = 'gold'
                document.querySelector('#ele2').style.backgroundColor = 'gold'
                document.querySelector('#ele3').style.backgroundColor = 'gold'
                document.querySelector('#ele4').style.backgroundColor = 'gold'
            }
        })
    })
})
