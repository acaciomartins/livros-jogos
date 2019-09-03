import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

export default class Combat extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isCombat: false,
            turno: 1,
            
        }   
    }

    render() {
        return (

            <View style={styles.combat}>
                <View
                    style={{
                        marginBottom: 30,
                    }}>
                    <Text style={styles.title}>Combate</Text>
                    <Text style={styles.subTitle}>Turno: {this.props.turno}</Text>
                </View>
                <View>
                    <Text style={styles.subTitle}>Você</Text>
                    <Text style={styles.subTitle}>Nome: {this.props.ficha.nome}</Text>
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
                    
                    <Text>Habilidade: {this.props.ficha.habilidade}</Text>
                    <Text>Energia: {this.props.ficha.energia}</Text>
                    <Text>Sorte: {this.props.ficha.sorte}</Text>
                </View>
                <View>
                    <Text style={styles.subTitle}>Adversário(s)</Text>
                    <FlatList 
                        data={this.props.paragraphCurrent.combate}
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
                        onPress={() => this.playAtack(this.props.paragraphCurrent.combate)} 
                        style={styles.buttonRed}>
                        <Text style={styles.buttonText}>Iniciar Ataque</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={() => this.props.openCloseModal()} 
                        style={styles.buttonBlue}>
                        <Text style={styles.buttonText}>Voltar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
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
    
    rollDiceD6 = (amount, type) => {
        let r = 0;
        for (i = 0; i < amount; i++) {
            r += Math.floor(Math.random() * (type + 1));
        }
        return r;
    }

    playAtack = (combat) => {
        let abiliityPlayer = this.props.ficha.habilidade;
 

        for (i = 0; i < combat.length; i++) {
            this.setState({turno: i})
            let combatNow = combat[i]; 
            
            while (combatNow.energia > 0 && this.props.ficha.energia > 0) {
                let dicePlayer = this.rollDiceD6(2, 6);
                let diceNPC =  this.rollDiceD6(2, 6);
                let abiliityNpc = combatNow.habilidade
    
                if ((dicePlayer + abiliityPlayer) > (diceNPC + abiliityNpc)) {
                    combatNow.energia = combatNow.energia - 2;
                    let turno = {
                        "titulo":  `Você Ganhou!!!`,
                        "mensagem": `2d6 = [${dicePlayer}] + ${abiliityPlayer} = ${dicePlayer + abiliityPlayer} contra NPC = ${diceNPC + abiliityNpc}`
                    }
                    this.alertCombat(turno);
                } else if ((dicePlayer + abiliityPlayer) < (diceNPC + abiliityNpc)) {
                    this.props.ficha.energia = this.props.ficha.energia - 2;
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
}

const styles = StyleSheet.create({
    combat: {
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        padding: 30,
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
})