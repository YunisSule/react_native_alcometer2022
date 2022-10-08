import { StyleSheet } from 'react-native';

export const light = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: '#fff'
  },
  toggleButton: {
    marginHorizontal: 20,
    width: 40
  },
  Contentcontainer: {
    flex: 1,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  header: {
    alignItems: 'center',
    marginBottom: 50
  },
  heading: {
    fontSize: 32
  },
  label: {
    fontSize: 18,
    marginBottom: 5
  },
  input: {
    paddingHorizontal: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#131313',
    borderRadius: 4
  },
  inputContainer: {
    marginVertical: 10,
    alignSelf: 'center'
  },
  answerContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  result: {
    fontSize: 28
  },
  buttonContainer: {
    alignSelf: 'stretch',
    marginBottom: 10
  }
});

export const dark = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: '#4E4E4E'
  },
  toggleButton: {
    marginHorizontal: 20,
    width: 40
  },
  Contentcontainer: {
    flex: 1,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  header: {
    alignItems: 'center',
    marginBottom: 50
  },
  heading: {
    fontSize: 32,
    color: '#fcfcfc'
  },
  text: {
    color: '#fcfcfc'
  },
  label: {
    fontSize: 18,
    color: '#fcfcfc',
    marginBottom: 5
  },
  input: {
    paddingHorizontal: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#fcfcfc',
    borderRadius: 4,
    color: '#fcfcfc'
  },
  inputContainer: {
    marginVertical: 10,
    alignSelf: 'center'
  },
  answerContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  result: {
    color: '#fcfcfc',
    fontSize: 28
  },
  buttonContainer: {
    alignSelf: 'stretch',
    marginBottom: 10
  }
});
