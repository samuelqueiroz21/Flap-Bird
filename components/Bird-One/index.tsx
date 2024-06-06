import { View, ImageBackground,  } from 'react-native'
import { styles } from './styles'

type Props = {
  posY: number,
}


export function Passaro({ posY }: Props) {
  return (
    <View style={[styles.container, {bottom: posY}]}>

       <ImageBackground source={require('./flapBird.png')} resizeMode="cover" style={styles.image}>
       </ImageBackground>
      
    </View>
  )
}