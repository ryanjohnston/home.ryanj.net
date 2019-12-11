import React from 'react'
import './styles/normalize.css'
import './styles/main.scss'
import machines from './data/machines.json'
import apps from './data/apps.json'

import { SmallGrid, RegularGrid } from './components/grid'
import { Icon, Tile, Section, Head } from './components/blocks'
import { SubHead } from './components/headers'

function App() {
  return (
    <div className="App standard-padding">
      <Head text="Johnston Private Cloud" />

      <Section>
        <SubHead text="Applications" />
        <SmallGrid>
          {apps.map((app, index) => {
            return <Icon key={index} title={app.title} image={app.image} link={app.link}></Icon>
          })}
        </SmallGrid>
      </Section>

      <Section>
        <SubHead text="Machines" />
        <RegularGrid>
          {machines.map((machine, index) => {
            return (
              <Tile
                key={index}
                title={machine.title}
                image={machine.image}
                description={machine.description}
              >
                <ul className="left-text regular white" key={index}>
                  {machine.text.map((text, index) => {
                    return (
                      <li key={index} className="white regular">
                        {text}
                      </li>
                    )
                  })}
                  <li>
                    <a className="red regular" href={machine.ssh}>
                      SSH Access
                    </a>
                  </li>
                </ul>
              </Tile>
            )
          })}
        </RegularGrid>
      </Section>
    </div>
  )
}

export default App
