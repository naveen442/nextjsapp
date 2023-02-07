import '../styles/globals.css'
import Layout from '../components/Layout'
import { useEffect } from 'react'

import { useRouter } from 'next/router'



// const darkTheme = createTheme({
//   type: 'dark',
//   theme: {
//     colors: {NextUIProvider},
//   }
// })
function App({ Component, pageProps }) {

  return (
   
      <Layout>

        <Component {...pageProps} />

      </Layout>
    

  )

}
export default App