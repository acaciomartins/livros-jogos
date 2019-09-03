import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Combat from '../../components/combat'
import { blue } from 'ansi-colors';
import livro from '../../model/ACidadeDosLadroes.json';
import ficha from '../../model/ficha.json';

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

                {this.state.isCombat && <Combat 
                    ficha={ficha}
                    turno={this.state.turno}
                    paragraphCurrent={this.state.paragraphCurrent}
                    openCloseModal={this.openCloseModal.bind(this, 'isCombat')}
                    ></Combat>}
            </View>
        )
    }

    nextParagrahph = (next) => {
        let n = livro.capitulos.filter((chapter) => chapter.pagaragrafo === next)[0]
        this.setState({paragraphCurrent: n})
        // Valida especial
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

        // Valida itens
        // Se não tive item obrigatorio desabilita link proximo paragrafo

        return n;
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


