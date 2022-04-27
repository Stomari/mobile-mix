import { StyleSheet } from 'react-native';

export default InputStyles = StyleSheet.create({
  input: {
    borderWidth: 1,
    fontSize: 20,
    width: '80%',
    padding: 10,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    width: '100%',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    width: '20%',
  },
  button: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 255, 0.8)'
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
});
