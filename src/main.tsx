import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from "@/components/theme-provider"
import { Provider } from 'react-redux'
import store from './store/Store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
    <ThemeProvider defaultTheme="dark">
      <App />
    </ThemeProvider>
    </Provider>
  </BrowserRouter>,
)
