module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        borderColor: theme => ({
            ...theme('colors'),
            white: '#fff'
        }),
        fontSize: {
            'xs': '.75rem',
            'sm': '.875rem',
            'tiny': '.875rem',
            'base': '1rem',
            'lg': '1.125rem',
            'xl': '1.25rem',
            '2xl': '1.75rem',
            '3xl': '1.875rem',
            '4xl': '2.25rem',
            '5xl': '3rem',
            '6xl': '4rem',
            '7xl': '5rem',
        },
        colors: {
            primary: '#1F2224',
            secondary: '#1A1C1E',
            danger: '#CC4343',
            white: '#fff',
            success:'#499861',
            blue:'#18A7FF',
            black: '#212121',
            textColor:'#D6DDDE',
            borderColor:'#D6DDDE42',
            dark:'#16181942',
            gray:'#8B90913F'
        },
        width: (theme) => ({
            auto: 'auto',
            contain: 'fit-content',
            ...theme('spacing'),
            '1-2': '50%',
            '1-3': '33.333333%',
            '2-3': '66.666667%',
            '1-4': '25%',
            '2-4': '50%',
            '3-4': '75%',
            '1-5': '20%',
            '2-5': '40%',
            '3-5': '60%',
            '4-5': '80%',
            '1-6':'15%',
            '1-10':'10%',
            full: '100%',
            screen: '100vw',
            none: 'none',
            275:'17.5rem',
            6:'6px',
            29:'29px',
            80:'80px'
        }),
        height: {
            '0': '0',
            full: '100%',
            screen: '100vh',
            230:'14.375rem',
            6:'6px',
            80:'80px'
        },
        minWidth: (theme) => ({
            ...theme('width')
        }),
        minHeight: {
            '0': '0',
            '1/4': '25%',
            '1/2': '50%',
            '3/4': '75%',
            'full': '100%',
            screen: '100vh',
        },
        maxWidth: (theme) => ({
            ...theme('width')
        }),
        zIndex: {
            '0': 0,
            '10': 10,
            '20': 20,
            '30': 30,
            '40': 40,
            '50': 50,
            '25': 25,
            '75': 75,
            '100': 100,
            'auto': 'auto',
        },


    },
    variants: {
        display: ['responsive', 'group-hover', 'focus-within'],
        borderWidth: ['responsive', 'first', 'last', 'hover', 'focus', 'active'],
        borderColor: ['active'],
    },
    plugins: [],
}
