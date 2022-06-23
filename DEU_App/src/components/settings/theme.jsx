import Settings from "./Settings.jsx"

const theme = {
    fontSizes: {
        body: Settings.fontSizes,
        subheading: Settings.fontSizes+2,
        title: Settings.fontSizes+4,
        small: Settings.fontSizes-2
    },
    fonts: {
        main: Settings.sysFont
    },
    fontWeights: {
        normal: '400',
        bold: '800'
    }
}

export default theme