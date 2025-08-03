import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
    return (
        <div>
            <h1>Custom App!</h1>
        </div>
    )
}

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'click me to visit Google'
)

ReactDom.createRoot(document.getElementById('root')).render(

    <App />
    // <MyApp />
    // reactElement
    

)
