import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Alert, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
// import {livro} from '../model/ACidadeDosLadroes'

// export default function ParagraphText() {
export default class ParagraphText extends Component {
    constructor(props) {
        super(props);
        this.ficha = {
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
    }
        this.livro = {
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
                    "energia": 0
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
                    },
                ]
            },
            {
                "pagaragrafo": 2,
                "texto": "Você retira a pulseira do seu braço e a joga no monstro que se aproxima. Ela cai sobre a sua carapaça, semelhante a uma armadura, e gruda nela como se estivesse colada. Você fica então observando enquanto a pulseira começa a queimar, penetrando na carapaça, o corpo da Centopéia Gigante. A fumaça sai do orifício exatamente redondo e, à medida em que a pulseira queima, penetrando cada vez mais, você pode ver que os movimentos frenéticos da Centopéia são os estertores da morte. Finalmente, ela fica imóvel, e você consegue se esgueirar entre seu corpo e o teto do túnel. Você continua andando pelo túnel, que termina em uma grade de ferro, através da  qual passa o esgoto.",
                "proximo": [{
                        "texto": "Se quiser retirar a grade, vá para?     Vá para ",
                        "paragrafo": 377
                    },
                    {
                        "texto": "Se preferir caminhar de volta para o buraco de entrada, vá para",
                        "paragrafo": 174
                    },
                ],
                "especial": [],
                "combate": []
            },
            {
                "pagaragrafo": 3,
                "texto": "O homem pára de tocar e diz que ele pode lhe trazer boa sorte. Pela soma de três Peças de Ouro, ele cantará uma canção para você que lhe trará boa sorte. ",
                "proximo": [{
                        "texto": "Se quiser pagar o músico, vá para ",
                        "paragrafo": 37
                    },
                    {
                        "texto": "Se não acreditar nele, poderá seguir em frente para a próxima barraca vá para ",
                        "paragrafo": 398
                    },
                ],
                "especial": [],
                "combate": []
            },
            {
                "pagaragrafo": 4,
                "texto": "Você ouve uma campainha tocar do outro lado da porta e, poucos minutos depois, ela é aberta por um homem magro de pele pálida, com olhos fundos e escuros, usando um uniforme de servente. Com uma voz fria e sibilante, ele diz: \"Sim?\" ",
                "proximo": [{
                        "texto": "Se quiser dizer a ele que você é um via jante perdido, vá para",
                        "paragrafo": 339
                    },
                    {
                        "texto": "Se quiser atacar o homem com sua espada, vá para",
                        "paragrafo": 35
                    },
                ],
                "especial": [],
                "combate": []
            },
            {
                "pagaragrafo": 5,
                "texto": "Desembainhando sua espada, você salta por cima do balcão para atacar o HOMEM-ORCA, que rapidamente pega a sua acha de mão. Você logo se dá conta de que o Homem-Orca tem prática no uso da arma dele.",
                "proximo": [{
                        "texto": "Se você vencer, vá para ",
                        "paragrafo": 371
                    },
                ],
                "especial": [],
                "combate": [
                    {
                        "nome": "HOMEM-ORCA",
                        "habilidade": 8,
                        "energia": 5
                    },
                ]
            },]

        }

        this.state = {
            isCombat: false,
            turno: 1,
            paragraphCurrent: this.nextParagrahph(1),
    }   
   
    }
    render() {
        return (
            <View>
                <Text style = { styles.tabBarInfoText } >{ this.state.paragraphCurrent.nome }</Text>
                <Text style = { styles.tabBarInfoText } >{ this.state.paragraphCurrent.pagaragrafo }</Text>
                <Text style = { styles.tabBarInfoText } >{ this.state.paragraphCurrent.texto }</Text>
                <FlatList 
                    data={this.state.paragraphCurrent.proximo}
                    renderItem={({item}) => 
                        <TouchableOpacity onPress={() => this.nextParagrahph(item.paragrafo)} style={styles.helpLink}>
                            <Text>
                                {item.texto} - {item.paragrafo}
                            </Text>
                        </TouchableOpacity>
                        }>
                </FlatList>
                {this.state.paragraphCurrent.combate.length > 0 && 
                <Button
                    onPress={this.openCombatModal}
                    title="Combate"
                    color="#841584">
                </Button>}

                {this.state.isCombat &&
                    <View>
                        <Text>Combate</Text>
                        <Text>Turno: {this.state.turno}</Text>
                        <View
                            style={{
                                borderTopColor: 'black',
                                borderTopWidth: 1,
                            }}>
                            <Text>Você</Text>
                            <Text>Nome: {this.ficha.nome}</Text>
                            <Text>Habilidade: {this.ficha.habilidade}</Text>
                            <Text>Energia: {this.ficha.energia}</Text>
                            <Text>Sorte: {this.ficha.sorte}</Text>
                        </View>
                        <View>
                            <Text>Adversário</Text>
                            <FlatList 
                                data={this.state.paragraphCurrent.combate}
                                renderItem={({item}) => 
                                    <View
                                        style={{
                                            borderTopColor: 'black',
                                            borderTopWidth: 1,
                                        }}>
                                        <Text>Nome: {item.nome}</Text>
                                        <Text>Habilidade: {item.habilidade}</Text>
                                        <Text>Energia: {item.energia}</Text>
                                    </View>}>
                            </FlatList>
                        </View>
                        <View>
                        <Button
                            onPress={() => this.playAtack(this.state.paragraphCurrent.combate)}
                            title="Iniciar Ataque"
                            color="#F00">
                        </Button>
                        </View>
                    </View>}
            </View>
        )
    }

    nextParagrahph = (next) => {
        let n = this.livro.capitulos.filter((chapter) => chapter.pagaragrafo === next)[0]
        this.setState({paragraphCurrent: n})
        if (n.especial.length) {
            n.especial.forEach((e) => {
                switch (Object.getOwnPropertyNames(e).toString()) {
                    case "energia":
                        this.ficha.energia = this.ficha.energia + e.energia
                        break
                    case "sorte":
                        this.ficha.sorte = this.ficha.sorte + e.sorte
                        break;
                    case "habilidade":
                            this.ficha.habilidade = this.ficha.habilidade + e.habilidade
                            break;
                    default:
                        break;
                }
            })
        }
        return n;
    }

    alertCombat = (turno) => {
        Alert.alert(
            `${turno.titulo}`,
            `${turno.mensagem}`,
            [
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
          );
    }

    playAtack = (combat) => {
        let abiliityPlayer = this.ficha.habilidade;
        
        for (i = 0; i < combat.length; i++) {
            this.setState({turno: i})
            //let combatNow = Object.assign({}, combat[i]); 
            let combatNow = combat[i]; 
            
            while (combatNow.energia > 0 && this.ficha.energia > 0) {
                let dicePlayer = Math.floor(Math.random() * 13);
                let diceNPC =  Math.floor(Math.random() * 13);
                let abiliityNpc = combatNow.habilidade
    
                if ((dicePlayer + abiliityPlayer) > (diceNPC + abiliityNpc)) {
                    combatNow.energia = combatNow.energia - 2;
                    let turno = {
                        "titulo":  `Você Ganhou!!!`,
                        "mensagem": `"2d6 = [${dicePlayer}] + ${abiliityPlayer} = ${dicePlayer + abiliityPlayer} contra NPC = ${diceNPC + abiliityNpc}`
                    }
                    this.alertCombat(turno);
                } else if ((dicePlayer + abiliityPlayer) < (diceNPC + abiliityNpc)) {
                    this.ficha.energia = this.ficha.energia - 2;
                    let turno = {
                        "titulo":  `${combatNow.nome} Ganhou!!!`,
                        "mensagem": `( "2d6 = [${diceNPC}] + ${abiliityNpc} = ${diceNPC + abiliityNpc}  contra Você = ${dicePlayer + abiliityPlayer}`,
                    }
                    this.alertCombat(turno);
                }
            }


        }
    }

    openCombatModal = () => {
        this.setState({isCombat: !this.state.isCombat})
    }
}



// function getParagraph() {
//     return livro
// }

const styles = StyleSheet.create({
    tabBarInfoText: {
        
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
});


