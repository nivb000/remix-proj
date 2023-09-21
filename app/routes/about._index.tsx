import { Outlet } from '@remix-run/react'
import React from 'react'

const About = () => {
  return <section>
    About section
    <Outlet />
  </section>
}

export default About