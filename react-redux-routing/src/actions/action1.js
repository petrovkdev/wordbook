export const getForm1 = () => dispatch => {
  console.log('getForm1');
  dispatch({
    type: 'form1',
    payload: []
  })
}
