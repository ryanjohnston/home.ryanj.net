import React from 'react'
import './styles/normalize.css'
import './styles/main.scss'
import machines from './data/machines.json'
import apps from './data/apps.json'

import { SmallGrid, RegularGrid } from './components/grid'
import { Icon, Tile, Section, Head, TextRegular } from './components/blocks'
import { PageHead, SubHead, TileHead } from './components/headers'
import { List, TextListItem, SSHListItem } from './components/lists'
import { TileImage } from './components/images'
import { LinkNewWindow } from './components/links'

function App() {
  return (
    <div className="App standard-padding">
      <Head className="App-header">
        <PageHead className="x-large red standard-padding no-margin">
          Johnston Private Cloud
        </PageHead>
      </Head>

      <Section className="section">
        <SubHead className="standard-padding no-margin medium sea">Applications</SubHead>
        <SmallGrid>
          {apps.map((app, index) => {
            return (
              <Icon className="center-text" key={index}>
                <LinkNewWindow link={app.link} className="block no-margin standard-padding">
                  <img src={app.image} alt={app.title} className="center-text center-margin" />
                </LinkNewWindow>
                <TextRegular className="center-text regular white no-margin block">
                  {app.title}
                </TextRegular>
              </Icon>
            )
          })}
        </SmallGrid>
      </Section>

      <Section className="section">
        <SubHead className="standard-padding no-margin medium sea">Machines</SubHead>
        <RegularGrid>
          {machines.map((machine, index) => {
            return (
              <Tile className="blue-border center-text standard-padding" key={index}>
                <TileImage image={machine.image} description={machine.description} />
                <TileHead className="medium sea standard-padding no-margin">
                  {machine.title}
                </TileHead>
                <List className="left-text regular white" key={index}>
                  {machine.text.map((text, index) => {
                    return (
                      <TextListItem className="white regular" key={index}>
                        {text}
                      </TextListItem>
                    )
                  })}
                  <SSHListItem>
                    <LinkNewWindow link={machine.ssh} className="red regular">
                      SSH Access
                    </LinkNewWindow>
                  </SSHListItem>
                </List>
              </Tile>
            )
          })}
        </RegularGrid>
      </Section>
    </div>
  )
}

export default App
