import { Login } from '../scenes/Auth/Login.js'
import { Register } from '../scenes/Auth/Register.js'
import { MainLayout } from './MainLayout.js'

export const rotesConfig = [
  {
    layout: MainLayout,
    routes: [
      ['/auth/register', Register, true],
      ['/auth/login', Login, true],
    ]
  }
]