import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
   
  },
  area: {
    flex: 1,
  
   flexDirection: 'row',
   padding:10
     
  },
  control: {
    flexDirection: 'row',
    gap: 10,
    margin: 10,
    alignItems: 'center',
  },
  controlText: {
    color: '#fff',
  },
  controlButton: {
    flex: 1,
    height: 80,
    
    backgroundColor: '#7cfc00',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  background: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 140,
   
  
    
  }
})

//   justifyContent: 'spaceBetween',