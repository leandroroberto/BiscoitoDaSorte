import React, { useState } from 'react'
import { View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native'

export default function App(){

  const [img, setImg] = useState(require('./src/assets/biscoito.png'))
  const [textoFrase, setTextoFrase] = useState('')
  let frases = [
    '"A vida trará coisas boas se tiver paciência."',
    '"Não compense na ira o que lhe falta na razão."',
    '"A maior de todas as torres começa no solo."',
    '"Não há que ser forte. Há que ser flexível."',
    '"A juventude não é uma época da vida, é um estado de espírito."'
  ]


  function quebraBiscoito(){
    setImg(require('./src/assets/biscoitoAberto.png'))
    let numeroAleatorio = Math.floor(Math.random() * frases.length)
    setTextoFrase(frases[numeroAleatorio])
  }

  function reiniciarBiscoito(){
    setImg(require('./src/assets/biscoito.png'))
    setTextoFrase('')
  }

  return(
    <View style={styles.container}>

       <Image
       source={img}
       style={styles.img}
       />

      <Text style={styles.textoFrase}>{textoFrase}</Text>
      
      <TouchableOpacity style={styles.botao} onPress={ quebraBiscoito }>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={ reiniciarBiscoito } style={[styles.botao, {marginTop: 15, borderColor: '#121212'}]}>
        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto, {color: '#121212'}]}>Reiniciar Biscoito</Text>
        </View>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  img:{
    width: 230,
    height: 230
  },

  textoFrase: {
    fontSize: 20,
    color: "#DD7B22",
    margin: 50,
    fontStyle: 'italic',
    textAlign: 'center'
  },

  botao:{
    width: 230,
    height: 50,
    borderColor: '#DD7B22',
    borderWidth: 2,
    borderRadius: 25
  },

  btnArea:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  btnTexto:{
    fontSize: 17,
    fontWeight: 'bold',
    color: '#DD7B22'
  }
})