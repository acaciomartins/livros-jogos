export const livro = () => {
    return ({
        "dadosLivro": [{
            "nome": "A Cidade dos Ladrões"
        }],
        "capitulos": [{
            "pagaragrafo": 1,
            "texto": "A caminhada para Port Blacksand o leva na direção do oeste por uns 80 quilômetros, atravessando " +
                "planícies e subindo serras.Felizmente," +
                "não acontece nenhum encontro perigoso.Finalmente," +
                "você , chega à costa e vê a alta muralha que circunda Port Blacksand e o aglomerado de construções que" +
                "se projeta para o mar como uma feia mancha negra.Há navios ancorados no porto e fumaça subindo" +
                "suavemente de chaminés.Parece suficientemente pacífico, e somente quando o vento muda," +
                "trazendo o cheiro de podridão na brisa, você se lembrada natureza cruel deste lugar notório." +
                "Seguindo a estrada empoeirada para o norte ao longo da costa, na direção dos portões da cidade," +
                "você começa a notar alguns sinais assustadores - crânios em espetos de madeira," +
                "homens morrendo de fome em jaulas suspensas nas muralhas da cidade e bandeiras negras em toda parte.Ao se" +
                "aproximar do portão principal, um frio corre pela sua espinha," +
                "e você instintivamente segura o cabo de sua espada para se reanimar.No portão," +
                "você se depara com um guarda alto, usando uma cota de" +
                "malha de aço e um elmo de ferro. Ele avança, barrando a sua passagem com a lança," +
                "e diz: \"Quem quer entrar em Port Blacksand sem ser convidado ? Explique o quê está fazendo aqui ou volte pelo" +
                "caminho que veio.\" Você: ",
            "proximo": [{
                    "texto": "Dirá a ele que quer ser levado a Nicodemus?     Vá para ",
                    "paragrafo": 202
                },
                {
                    "texto": " Dirá a ele que quer vender alguns objetos roubados?   Vá para ",
                    "paragrafo": 33
                },

                {
                    "texto": "Atacará o guarda rapidamente com sua espada?     Vá para",
                    "paragrafo": 49
                },
            ],
            "especial": [{
                "energia": -1
            }],
            "combate": [{
                    "nome": "elfo",
                    "habilidade": 5,
                    "energia": 6
                },
                {
                    "nome": "goblin 01",
                    "habilidade": 3,
                    "energia": 6
                },
                {
                    "nome": "goblin 02",
                    "habilidade": 3,
                    "energia": 4
                }
            ]
        }]
    })
}

export const ficha = () => {
    return ({
        "nome": "Durval",
        "habilidade": 10,
        "energia": 20,
        "sorte": 18,
        "suprimento": 10,
        "ouro": 5,
        "equipamentos": ["mochila", "espada"],
        "pocoes": ["energia"],
        "combates": ["goblin 01"],
        "historico": [1, 2],
        "salvos": [{
            "ficha01": {
                "data": "11/09/2019",
                "habilidade": 10,
                "energia": 20,
                "sorte": 18,
                "suprimento": 10,
                "ouro": 5,
                "equipamentos": ["mochila", "espada"],
                "pocoes": ["energia"],
                "combates": ["goblin 01"],
                "historico": [1, 2]
            }
        }, {
            "ficha02": {
                "data": "12/09/2019",
                "habilidade": 10,
                "energia": 20,
                "sorte": 18,
                "suprimento": 10,
                "ouro": 5,
                "equipamentos": ["mochila", "espada"],
                "pocoes": ["energia"],
                "combates": ["goblin 01"],
                "historico": [1, 2]
            }
        }]
    })
}