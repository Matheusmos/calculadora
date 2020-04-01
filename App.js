import React, {Component} from 'react';

import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default class App extends Component {
  
  constructor() {
    super()
    this.state = {}
  }

  render() {

    let rows = []
    let nuns = [[1,2,3] , [4,5,6] , [7,8,9] , [0, '.', '=']]
    
    for(let i = 0; i < 4; i++){
      let row = []
      for(let j = 0; j < 3; j++){
        row.push(<TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>{nuns[i][j]}</Text>
        </TouchableOpacity>)
        }
        rows.push(<View style={styles.row}>{row}</View>)
      }
    
    
    return (
      <View style={styles.container}>
        <View style={styles.result}>
            <Text style={styles.resultText}>11*11</Text>
        </View>
        <View style={styles.calculation}>
            <Text style={styles.calculationText}>121</Text>
        </View>
        <View style={styles.buttons}>
          <View style={styles.numbers}>
            {rows}
            
          </View>
          <View style={styles.operations}>
            <Button title="+"/>
            <Button title="+"/>
            <Button title="+"/>
            <Button title="+"/>
          </View>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  resultText: {
    fontSize: 28,
    color: 'white',
  },

  btn: {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    
  },

  btnText: {
    fontSize: 35,
  },

  calculationText: {
    fontSize: 24,
    color: 'white',
  },


  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  result: {
    flex: 2,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'flex-end',
    /*backgroundColor: '#1e1240'*/
  },

  calculation: {
    flex: 1,
    backgroundColor: 'coral',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  
  buttons: {
    flexGrow: 7,
    flexDirection: 'row',
  },

  numbers: {
    flex: 3,
    backgroundColor: 'yellow'
  },

  operations: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'space-around',
    alignItems: 'stretch',
  },
});
