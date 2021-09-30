import { Register } from '../scenes/Auth/Register.js'
import { MainLayout } from './MainLayout.js'

export const rotesConfig = [
  {
    layout: MainLayout,
    routes: [
      ['/auth/register', Register, true],
    ]
  }
]