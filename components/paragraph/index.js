import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Alert, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { blue } from 'ansi-colors';
import livro from '../../model/ACidadeDosLadroes.json';
import ficha from '../../model/ficha.json';

// import {livro} from '../model/ACidadeDosLadroes'

// export default function ParagraphText() {
export default class ParagraphText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCombat: false,
            turno: 1,
            paragraphCurrent: this.nextParagrahph(1),
    }   
   
    }
    render() {
        return (
            <View style={styles.container}>
                { !this.state.isCombat && 
                <View style={styles.paragraph}>
                    <Text style = { styles.numberParagraph } >{ this.state.paragraphCurrent.pagaragrafo }</Text>
                    <Text style = { styles.textParagraph } >{ this.state.paragraphCurrent.texto }</Text>
                    <FlatList
                        style={{
                            flex: 1,
                        }}
                        data={this.state.paragraphCurrent.proximo}
                        renderItem={({item}) => 
                            <TouchableOpacity 
                                onPress={() => this.nextParagrahph(item.paragrafo)} 
                                style={styles.buttonParagraph}>
                                <Text
                                    style={{
                                        fontSize: 12,
                                        color: blue,
                                        textAlign: "center",
                                    }}>
                                    {item.texto} - {item.paragrafo}
                                </Text>
                            </TouchableOpacity>
                            }>
                    </FlatList>
                    {this.state.paragraphCurrent.combate.length > 0 && 
                    <TouchableOpacity 
                            onPress={this.openCombatModal}
                            style={styles.buttonCombat}>
                            <Text style={styles.buttonText}>Combate</Text>
                        </TouchableOpacity>
                    }
                </View>}

                {this.state.isCombat &&
                    <View style={styles.combat}>
                        <View
                            style={{
                                marginBottom: 30,
                            }}>
                            <Text style={styles.title}>Combate</Text>
                            <Text style={styles.subTitle}>Turno: {this.state.turno}</Text>
                        </View>

                        <View>
                            <Text style={styles.subTitle}>Você</Text>
                            <Text style={styles.subTitle}>Nome: {ficha.nome}</Text>
                        </View>
                        <View
                            style={{
                                borderTopColor: 'black',
                                borderTopWidth: 1,
                                flexDirection: "row",
                                justifyContent: "space-between",
                                flexWrap: "wrap",
                                flex: 1,
                                marginBottom: 30,
                            }}>
                            
                            <Text>Habilidade: {ficha.habilidade}</Text>
                            <Text>Energia: {ficha.energia}</Text>
                            <Text>Sorte: {ficha.sorte}</Text>
                        </View>
                        <View>
                        <Text style={styles.subTitle}>Adversário(s)</Text>
                            <FlatList 
                                data={this.state.paragraphCurrent.combate}
                                renderItem={({item}) => 
                                    <View
                                        style={{
                                            borderTopColor: 'black',
                                            borderTopWidth: 1,
                                            flexDirection: "row",
                                            justifyContent: "space-between",
                                            flexWrap: "wrap",
                                            flex: 1,
                                            flexGrow: 1,
                                        }}>
                                        <Text>Nome: {item.nome}</Text>
                                        <Text>Habilidade: {item.habilidade}</Text>
                                        <Text>Energia: {item.energia}</Text>
                                    </View>}>
                            </FlatList>
                        </View>
                        <View>
                        <TouchableOpacity 
                            onPress={() => this.playAtack(this.state.paragraphCurrent.combate)} 
                            style={styles.buttonRed}>
                            <Text style={styles.buttonText}>Iniciar Ataque</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            onPress={() => this.openCloseModal('isCombat')} 
                            style={styles.buttonBlue}>
                            <Text style={styles.buttonText}>Voltar</Text>
                        </TouchableOpacity>
                        </View>
                    </View>}
            </View>
        )
    }

    nextParagrahph = (next) => {
        let n = livro.capitulos.filter((chapter) => chapter.pagaragrafo === next)[0]
        this.setState({paragraphCurrent: n})
        if (n.especial.length) {
            n.especial.forEach((e) => {
                switch (Object.getOwnPropertyNames(e).toString()) {
                    case "energia":
                            ficha.energia = ficha.energia + e.energia
                        break
                    case "sorte":
                            ficha.sorte = ficha.sorte + e.sorte
                        break;
                    case "habilidade":
                            ficha.habilidade = ficha.habilidade + e.habilidade
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
        let abiliityPlayer = ficha.habilidade;
        
        for (i = 0; i < combat.length; i++) {
            this.setState({turno: i})
            let combatNow = combat[i]; 
            
            while (combatNow.energia > 0 && ficha.energia > 0) {
                let dicePlayer = Math.floor(Math.random() * 13);
                let diceNPC =  Math.floor(Math.random() * 13);
                let abiliityNpc = combatNow.habilidade
    
                if ((dicePlayer + abiliityPlayer) > (diceNPC + abiliityNpc)) {
                    combatNow.energia = combatNow.energia - 2;
                    let turno = {
                        "titulo":  `Você Ganhou!!!`,
                        "mensagem": `2d6 = [${dicePlayer}] + ${abiliityPlayer} = ${dicePlayer + abiliityPlayer} contra NPC = ${diceNPC + abiliityNpc}`
                    }
                    this.alertCombat(turno);
                } else if ((dicePlayer + abiliityPlayer) < (diceNPC + abiliityNpc)) {
                    ficha.energia = ficha.energia - 2;
                    let turno = {
                        "titulo":  `${combatNow.nome} Ganhou!!!`,
                        "mensagem": `2d6 = [${diceNPC}] + ${abiliityNpc} = ${diceNPC + abiliityNpc}  contra Você = ${dicePlayer + abiliityPlayer}`,
                    }
                    this.alertCombat(turno);
                }
            }
        }
    }

    openCloseModal = (key) => {
        this.setState({[key]: !this.state[key]})
    }

    openCombatModal = () => {
        this.setState({isCombat: !this.state.isCombat})
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'space-between',
    },
    paragraph: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        padding: 30,
    },
    combat: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        padding: 30,
    },
    numberParagraph: {
        alignItems: "center",
        fontSize: 16,
        color: '#999',
        marginTop: 5,
        lineHeight: 18,
        fontWeight: 'bold',
    },
    textParagraph: {
        fontSize: 15,
        color: '#999',
        marginTop: 5,
        lineHeight: 25,
        textAlign: "justify",
    },
    buttonRed: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#DF4723',
        borderRadius: 4,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonBlue: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#3399ff',
        borderRadius: 4,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonParagraph: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 4,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#3399ff',
        elevation: 2,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 2,
        },
    },
    buttonCombat: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#841584',
        borderRadius: 4,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        alignSelf: 'center',
        color: '#999',
        fontSize: 24,
        fontWeight: 'bold'
    },
    subTitle: {
        alignSelf: 'center',
        color: '#999',
        fontSize: 18,
        fontWeight: 'bold'
    },
    tabBarInfoText: {
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    
});


