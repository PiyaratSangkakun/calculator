import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button} from 'react-native';
import Constants from 'expo-constants';
import { LinearGradient } from 'expo-linear-gradient';

import AssetExample from './components/AssetExample';

import { Card } from 'react-native-paper';

export default class App extends React.Component {

  constructor(props)
  {
    super(props);
    this.state=
    {
      output:"",
      num1:"",
      num2:"",
      s:"",
      tmp:"0"

    }
  }

  onpress(index)
  {
    switch(index)
    {
      case"1":
      {
        this.setState({num1:this.state.num1+"1"});
        this.setState({output:this.state.output+"1"});
        break
      }

      case"2":
      {
        this.setState({num1:this.state.num1+"2"});
        this.setState({output:this.state.output+"2"});
        break
      }

      case"3":
      {
        this.setState({num1:this.state.num1+"3"});
        this.setState({output:this.state.output+"3"});
        break
      }

      case"4":
      {
        this.setState({num1:this.state.num1+"4"});
        this.setState({output:this.state.output+"4"});
        break
      }

      case"5":
      {
        this.setState({num1:this.state.num1+"5"});
        this.setState({output:this.state.output+"5"});
        break
      }

      case"6":
      {
        this.setState({num1:this.state.num1+"6"});
        this.setState({output:this.state.output+"6"});
        break
      }

      case"7":
      {
        this.setState({num1:this.state.num1+"7"});
        this.setState({output:this.state.output+"7"});
        break
      }

      case"8":
      {
        this.setState({num1:this.state.num1+"8"});
        this.setState({output:this.state.output+"8"});
        break
      }

      case"9":
      {
        this.setState({num1:this.state.num1+"9"});
        this.setState({output:this.state.output+"9"});
        break
      }

      case"0":
      {
        this.setState({num1:this.state.num1+"0"});
        this.setState({output:this.state.output+"0"});
        break
      }

      case".":
      {
        this.setState({num1:this.state.num1+"."});
        this.setState({output:this.state.output+"."});
        break
      }

      case"AC":
      {
        this.setState({output:""});
        this.setState({num1:""}),
        this.setState({num2:""})
        break
      }

      case"=":
      {

        if((this.state.s) =="+")
        {

          this.setState({output:Number(this.state.tmp)+Number(this.state.num1)})
        }

        if((this.state.s) =="-")
        {

          this.setState({output:Number(this.state.tmp)-Number(this.state.num1)})
        }

        if((this.state.s) =="x")
        {

          this.setState({output:Number(this.state.tmp)*Number(this.state.num1)})
        }

        if((this.state.s) =="÷")
        {

          this.setState({output:Number(this.state.tmp)/Number(this.state.num1)})
        }

        break
      }

    }

  }
  eual(op){

        if(op == "+")
        { this.setState({tmp:this.state.output})
          this.setState({output:""})
          this.setState({num1:""})
          this.setState({s:"+"})
        }

        if(op == "-")
        { this.setState({tmp:this.state.output})
          this.setState({output:""})
          this.setState({num1:""})
          this.setState({s:"-"})
        }

        if(op == "x")
        { this.setState({tmp:this.state.output})
          this.setState({output:""})
          this.setState({num1:""})
          this.setState({s:"x"})
        }

        if(op == "÷")
        { this.setState({tmp:this.state.output})
          this.setState({output:""})
          this.setState({num1:""})
          this.setState({s:"÷"})
        }

  }

  render() {
    return (
      <LinearGradient colors={['black','black']} style={{flex:1}}>
      <View style={{flex: 1}} />
       <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              <View style={{flex: 1,  backgroundColor: 'black'}} >
              <Text
              style={styles.texttop}>
              {this.state.output}
              </Text>
              </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row',justifyContent: 'centr'}}>
              <View style={{flex: 1, backgroundColor: 'black'}} >
                <TouchableOpacity
                  style={styles. top}
                  onPress={()=>{this.onpress("AC")}}>
                  <Text style={styles.textblack}>AC</Text>
                </TouchableOpacity>
              </View>

              <View style={{flex: 1,  backgroundColor: 'black'}} >
                <TouchableOpacity
                  style={styles.top}
                  onPress={()=>{this.onpress("+/-")}}>
                  <Text
                  style={styles.textblack}>+/-
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={{flex: 1,  backgroundColor: 'black'}} >
                <TouchableOpacity
                  style={styles.top}
                  onPress={()=>{this.eual("%")}}>
                  <Text style={styles.textblack}>%</Text>
                </TouchableOpacity>
              </View>

              <View style={{flex: 1,  backgroundColor: 'black'}} >
                <TouchableOpacity
                  style={styles.side}
                  onPress={()=>{this.eual("÷")}}>
                  <Text style={styles.text}>÷</Text>
                </TouchableOpacity>
              </View>

          </View>

           <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>

              <View style={{flex: 1,  backgroundColor: 'black'}} >
                <TouchableOpacity
                  style={styles.number}
                  onPress={()=>{this.onpress("7")}}>
                  <Text style={styles.text}>7</Text>
                </TouchableOpacity>
              </View>

              <View style={{flex: 1, backgroundColor: 'black'}} >
                <TouchableOpacity
                  style={styles.number}
                  onPress={()=>{this.onpress("8")}}>
                  <Text style={styles.text}>8</Text>
                </TouchableOpacity>
              </View>

              <View style={{flex: 1,  backgroundColor: 'black'}} >
                <TouchableOpacity
                  style={styles.number}
                  onPress={()=>{this.onpress("9")}}>
                  <Text style={styles.text}>9</Text>
                </TouchableOpacity>
              </View>

              <View style={{flex: 1,  backgroundColor: 'black'}} >
                <TouchableOpacity
                  style={styles.side}
                  onPress={()=>{this.eual("x")}}>
                  <Text style={styles.text}>x</Text>
                </TouchableOpacity>
              </View>
          </View>

          <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>
              <View style={{flex: 1, backgroundColor: 'black'}} >
                <TouchableOpacity
                  style={styles.number}
                  onPress={()=>{this.onpress("4")}}>
                  <Text style={styles.text}>4</Text>
                </TouchableOpacity>
              </View>

              <View style={{flex: 1,  backgroundColor: 'black'}} >
                <TouchableOpacity
                  style={styles.number}
                  onPress={()=>{this.onpress("5")}}>
                  <Text style={styles.text}>5</Text>
                </TouchableOpacity>
              </View>

              <View style={{flex: 1,  backgroundColor: 'black'}} >
                <TouchableOpacity
                  style={styles.number}
                  onPress={()=>{this.onpress("6")}}>
                  <Text style={styles.text}>6</Text>
                </TouchableOpacity>
              </View>

              <View style={{flex: 1,  backgroundColor: 'black'}} >
                <TouchableOpacity
                  style={styles.side}
                  onPress={()=>{this.eual("-")}}>
                  <Text style={styles.text}>-</Text>
                </TouchableOpacity>
              </View>
          </View>

          <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>

              <View style={{flex: 1,  backgroundColor: 'black'}} >
                <TouchableOpacity
                  style={styles.number}
                  onPress={()=>{this.onpress("1")}}>
                  <Text style={styles.text}>1</Text>
                </TouchableOpacity>
              </View>

              <View style={{flex: 1, backgroundColor: 'black'}} >
                <TouchableOpacity
                  style={styles.number}
                  onPress={()=>{this.onpress("2")}}>
                  <Text style={styles.text}>2</Text>
                </TouchableOpacity>
              </View>

              <View style={{flex: 1,  backgroundColor: 'black'}} >
                <TouchableOpacity
                  style={styles.number}
                  onPress={()=>{this.onpress("3")}}>
                  <Text style={styles.text}>3</Text>
                </TouchableOpacity>
              </View>

              <View style={{flex: 1,  backgroundColor: 'black'}} >
                <TouchableOpacity
                  style={styles.side}
                  onPress={()=>{this.eual("+")}}>
                  <Text style={styles.text}>+</Text>
                </TouchableOpacity>
              </View>
          </View>




          <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center'}}>

              <View style={{flex: 2,  backgroundColor: 'black'}} >
                <TouchableOpacity
                  style={styles.numberzero}
                  onPress={()=>{this.onpress("0")}}>
                  <Text style={styles.text}>0</Text>
                </TouchableOpacity>
              </View>

              <View style={{flex: 1,  backgroundColor: 'black'}} >
                <TouchableOpacity
                  style={styles.number}
                  onPress={()=>{this.onpress(".")}}>
                  <Text style={styles.text}>.</Text>
                </TouchableOpacity>
              </View>

              <View style={{flex: 1,  backgroundColor: 'black'}} >
                <TouchableOpacity
                  style={styles.side}
                  onPress={()=>{this.onpress("=")}}>
                  <Text style={styles.text}>=</Text>
                </TouchableOpacity>
              </View>
          </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  textblack: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'right',
    color : "black"
  },

  text: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'right',
    color : "white"
  },
  texttop: {
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'right',
    color : "white"
  },

  top:{
    alignItems: 'center',
    padding: 5,
    height: 80,
    width: 80,
    borderRadius:400,
    backgroundColor: '#d4d4d2',
    justifyContent: 'center',
  },

  number:{
    alignItems: 'center',
    padding: 5,
    height: 80,
    width: 80,
    borderRadius:400,
    backgroundColor:'#505050',
    justifyContent: 'center',
  },

  numberzero:{
    alignItems: 'left',
    padding: 5,
    height: 80,
    width: 170,
    borderRadius:400,
    backgroundColor:'#505050',
    justifyContent: 'center',
  },

  side:{
    alignItems: 'center',
    padding: 5,
    height: 80,
    width: 80,
    borderRadius:400,
    backgroundColor:'#FF9500',
    justifyContent: 'center',
  }


});
