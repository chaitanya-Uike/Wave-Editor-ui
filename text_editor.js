const Font = Quill.import("formats/font")
const Size = Quill.import('attributors/style/size');

// register fonts
Font.whitelist = [
    "arial",
    "roboto",
    "montserrat",
    "helvetica",
    "poppins",
    "merriweather",
    "playfair"
]
Quill.register(Font, true)

// register font sizes
fontSizes = ['14px', '16px', '18px', '22px', '28px', '36px']
Size.whitelist = fontSizes;
Quill.register(Size, true);


const quill = new Quill('#editor', {
    modules: {
        toolbar: '#toolbar'
    },
    theme: 'snow'
})

// change the link placeholder to www.github.com
var tooltip = quill.theme.tooltip;
var input = tooltip.root.querySelector("input[data-link]");
input.dataset.link = 'www.github.com';



