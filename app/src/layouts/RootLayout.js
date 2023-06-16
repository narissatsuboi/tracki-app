import * as React from 'react'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
      <>
        <main>
          <Outlet></Outlet>
        </main>
      </>
  )
}