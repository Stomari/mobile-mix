import { StyleSheet } from 'react-native';

export default ListStyles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flex: 1,
  },
  item: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
  },
  text: {
    color: 'black',
  },
  button: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5
  },
  separator: {
    backgroundColor: 'grey',
    height: 1
  },
});
