
const initialState = [
    {
        title: "Programação",
        id: 0,
        cards: [
            {
                id: 0,
                text: "Opa amigo secxoooooooooooooooo",
            },
            {
                id: 1,
                text: "estefany linda gosytosa",
            },
                        {
                id: 2,
                text: "cCOMI O CU DE QUEM TA LENDO AHAHAHAH",
            },
        ]
    },
    {
        title: "SEXO DE GUITRAA",
        id: 0,
        cards: [
            {
                id: 0,
                text: "Opa amigo secxoooooooooooooooo",
            },
            {
                id: 1,
                text: "estefany linda gosytosa",
            },
        ]
    },

    {
        title: "O HOMI DAS CARÇA ERGUIDA MEU",
        id: 0,
        cards: [
            {
                id: 0,
                text: "FELIPE SEU CORNO MACACO",
            },
            {
                id: 1,
                text: "VOU COMER O CU DO PROFESSOR DE POO",
            },
        ]
    },
];

const listReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default listReducer;