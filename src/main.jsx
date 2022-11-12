import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Server } from 'miragejs'

new Server({
  routes() {
    this.namespace = "api"
    this.get('/reminders', () => ({
      reminders: [
        { id: 1, text: 'Walk the dog' },
        { id: 2, text: 'Take out the trash' },
        { id: 3, text: 'Work out' },
      ],
    }))
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
