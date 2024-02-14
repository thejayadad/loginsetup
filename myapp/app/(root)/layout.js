import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header'
import React from 'react'

const layout = ({children}) => {
  return (
    <div className="flex h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
    </div>
  )
}

export default layout