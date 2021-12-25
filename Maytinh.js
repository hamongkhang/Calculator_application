import React from "react";
import {View, Text, Button, TouchableOpacity, StyleSheet} from "react-native";
export default class MayTinh extends React.Component{
    //truyen du lieu vào màn hình máy tính
    constructor(){
        super();
        this.state={
            resultText:"",
            caclculationText:""
        };
        this.operations=['DEL','+','-','*','/'];
    }
    calculateResult(){
        const text=this.state.resultText;
        this.setState({
            caclculationText:eval(text)
        });
    }
    validate(){
        const text=this.state.resultText
    switch(text.slice(-1)){
        case '+':
            case '-':
                case '*':
                    case '/':
                        return false
    }
    return true
    }
    buttonPressed(text){
        if(text=='='){
            return this.validate()&& this.calculateResult()
        }
        this.setState({
            resultText:this.state.resultText+text
        })
    }
    operate(operation){
        switch(operation){
            case 'DEL':
                let text=this.state.resultText.split('')
                text.pop()
                    this.setState({
                        resultText:text.join('')
                    })
break
case '+':
    case '-':
        case '*':
            case '/':
const lastChar=this.state.resultText.split('').pop()
if(this.operations.indexOf(lastChar)>0)
return
if(this.state.resultText==""){
    return
}
this.setState({
    resultText:this.state.resultText+operation
})
        }
    }
    //dien so
    render(){
    let rows =[];
    let nums=[[1,2,3],[4,5,6],[7,8,9],['.',0,'=']];
    for(let i=0;i<4;i++){
        let row=[];
        for(let j=0;j<3;j++){
        row.push(
        <TouchableOpacity key={nums[i][j]}>
        <Text onPress={()=>this.buttonPressed(nums[i][j])} style={styles.btnText}>{nums[i][j]}</Text>
        </TouchableOpacity>
        );
    }
    rows.push(<View style={[styles.row,styles.white]} key={i}>{row}</View>
        );
    }

    //dien phep tinh
    let ops=[];
    for (let i=0;i<5;i++){
        ops.push(
            <TouchableOpacity style={styles.btn}
            key={this.operations[i]}
            onPress={()=>this.operate(this.operations[i])}
        >
<Text style={[styles.btnText,styles.white]}>{this.operations[i]}</Text>
        </TouchableOpacity>
        )
    }

        return(
        <View style={styles.container}>
        <View style={styles.result}>
        <Text style={styles.resultText}>
            {this.state.resultText}
            </Text>
        </View>
        <View style={styles.calculation}>
        <Text style={styles.caclculationText}>
            {this.state.caclculationText}
            </Text>
        </View>
        <View style={styles.buttons}>
        <View style={styles.numbers}>
        {rows}
        </View>  
        <View style={styles.operations}>
        {ops}
        </View>   
        </View>
        </View>
        );
}
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'green',
    },
    row:{
        borderWidth:1,
        borderRadius:10,
        flexDirection:'row',
        flex:1,
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'green',
    },
    btnText:{
        fontSize:30,
    },
    white:{
        color:'white',
    },
    btn:{
        flex:1,
        alignItems:'center',
        alignSelf:'stretch',
        justifyContent:'center',
    },
    caclculationText:{
        fontSize:25,
        color:'white',
    },
    resultText:{
        fontSize:30,
        color:'white',
    },
    result:{
        flex:2,
        backgroundColor:'green',
        justifyContent:'center',
        alignItems:'flex-end'
    },
    calculation:{
          flex:1,
          backgroundColor:'blue',
          justifyContent:'center',
          alignItems:'flex-end',
    },
    buttons:{
        flex:7,
        flexDirection:'row',
    },
    numbers:{
        flex:6,
        backgroundColor:'red',
    },
    operations:{
        flex:1,
        justifyContent:'space-around',
        alignItems:'stretch',
        backgroundColor:'black',
    }
});