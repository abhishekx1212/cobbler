$(document).ready(function () {
    $('.fa-bars').click(function (e) {
        e.preventDefault()

        $('.mobile-navbar').slideToggle()
    })

    $('.black').click(function (e) {
        e.preventDefault()

        $(':root').css({ '--cream-color': '#2C2D2F' })
        $(':root').css({ '--cream-2-color': '#2C2D2F' })
        $(':root').css({ '--header-background': 'white' })
        $(':root').css({ '--white-text-2': 'black' })
        $(':root').css({ '--white-background': 'black' })
        $(':root').css({ '--border-cream': 'gray' })
        $('.footer-img').attr("src", "assets/images/logo.png")
    })

    $('.cream').click(function (e) {
        e.preventDefault()

        $(':root').css({ '--cream-color': '#DEB380' })
        $(':root').css({ '--cream-2-color': '#FFE4C3' })
        $(':root').css({ '--header-background': '#2C2D2F' })
        $(':root').css({ '--white-text-2': 'white' })
        $(':root').css({ '--white-background': 'white' })
        $(':root').css({ '--border-cream': '#DEB380' })
        $('.footer-img').attr("src", "assets/images/logo-dark.png")
    })
})