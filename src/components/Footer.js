import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

export default () => {

  const footerNavs = [
      {
          href: 'javascript:void()',
          name: 'About'
      },
      {
          href: 'javascript:void()',
          name: 'Blog'
      },
      {
          href: 'javascript:void()',
          name: ''
      },
      {
          href: 'javascript:void()',
          name: 'Team'
      },
      {
          href: 'javascript:void()',
          name: 'Careers'
      },

      {
          href: 'javascript:void()',
          name: 'Suuport'
      }
  ]

  return (
      <footer className="text-gray-400 bg-white px-4 py-5 max-w-screen-xl mx-auto"> 
          <div className="max-w-lg sm:mx-auto sm:text-center">
                <Link to="/">
              <img src={logo} className="w-32 sm:mx-auto" />
                </Link>
              <p className="leading-relaxed mt-2 text-[15px]">
                 insACHAT est développé par une équipe de 6 étudiants de l'INSA de Lyon dans le cadre d'un projet d'étude.
              </p>
          </div>
          <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
              {
                  footerNavs.map((item, idx) => (
                      <li className=" hover:text-gray-800">
                          <a key={idx} href={item.href}>
                              { item.name }
                          </a>
                      </li>
                  ))
              }
          </ul>
          <div className="mt-8 items-center justify-center sm:flex">
              <div className="mt-4 sm:mt-0">
                  &copy; 2023 INSACHAT All rights reserved.
              </div>
            
          </div>
          <style jsx>{`
              .svg-icon path,
              .svg-icon polygon,
              .svg-icon rect {
                  fill: currentColor;
              }
          `}</style>
      </footer>
  )
}
