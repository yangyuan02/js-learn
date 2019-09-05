/*
 * @Author: yangyuan
 * @Date: 2019-09-05 11:34:01
 * @Email: 1367511704@qq.com
 * @LastEditTime: 2019-09-05 11:43:33
 * @Description:
 */
connect(
  state => ({ order: state.order }),
  dispatch => ({ getOrder: data => dispatch(actionCreator(data)) })
);

connect((state)=> ({order: state.order})),
(dispatch) => ({
    actions: bindActionCreators({
        actionCreator1: actionCreator1,
        actionCreator2: actionCreator2
}),dispatch)
//等价于
connect((state)=> ({order: state.order})),
(dispatch) => ({
actions: {
    actionCreator1: () => dispacth(actionCreator1()),
    actionCreator2: () => dispacth(actionCreator2())
}}))