export default function ({ store, redirect, route }) {
    // const userJSON = localStorage.getItem('user');
    // if (!store.state.auth.loggedIn) {
    // Nếu chưa đăng nhập, chuyển hướng về trang đăng nhập
    const userLocal = localStorage.getItem('user')
    console.log(12333, userLocal);
    const dataJS = JSON.parse(userLocal)
    if (!dataJS?.email && !dataJS?.password || userLocal == null) {
      return redirect('/signup')
    }
    // }
    // Kiểm tra trạng thái đăng kí
    // redirect("/signup")
  }