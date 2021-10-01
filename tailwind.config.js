module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: { 
            fontFamily: {
            'barlow': ['Barlow Semi Condensed'],
            },
            fontSize: {
                'fs3': '0.813rem',
                'fs11': '0.688rem',
            },
            lineHeight: {
                'lh18': '1.125rem',
                'lh13': '0.813rem',
                'lh2': '0.688rem',
            },

             colors: {
               "color1" : '#733FC8',
                "color2" : "#CFCFCF",
                "color3" : "#48556A",
                "color4" : "#19202D",
                "color5" : "#A775F1",
                "color6" : "#ECF2F8"
             },
             padding: {
                'p18': '1.125rem',
                'p6': '1.625rem',
                'p4': '1.063rem',
                'p17': '4.438rem',
                'p41': '10.25rem',
                'p165': '10.313rem',
                
             },
             gridTemplateColumns: {
                'box1' : '1fr 1fr 1fr 1fr',
             },
             gridTemplateRows: {
                'box1' : '1fr 1fr',
             }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}