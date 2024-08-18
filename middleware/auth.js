export default function ({ route, redirect }) {
    const token = localStorage.getItem('token')
  
    if (!token && route.path !== '/login' && route.path !== '/register') {
      return redirect('/login')
    }
  }
  