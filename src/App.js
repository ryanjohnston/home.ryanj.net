import React from 'react'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Johnston Private Cloud</h1>
      </header>
      <section>
        <h2>Entertainment</h2>
        <ul>
          <li>
            <a
              href="http://plex.ryanj.net:32400/web/index.html#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Plex
            </a>
          </li>
          <li>
            <a href="http://couchpotato:5050/" target="_blank" rel="noreferrer noopener">
              Couch Potato
            </a>
          </li>
        </ul>
        <h2>Documents and Files</h2>
        <ul>
          <li>
            <a href="http://nextcloud/" target="_blank" rel="noopener noreferrer">
              Document Storage &amp; Sharing
            </a>
          </li>
          <li>
            <a href="http://freenas/" target="_blank" rel="noopener noreferrer">
              Network Storage System
            </a>
          </li>
        </ul>
        <h2>Downloaders</h2>
        <ul>
          <li>
            <a href="http://sabnzb:8080/" target="_blank" rel="noopener noreferrer">
              SabNzb
            </a>
          </li>
        </ul>
        <h2>Search</h2>
        <ul>
          <li>
            <a href="http://magneticod:8080" target="_blank" rel="noopener noreferrer">
              Magnetico Torrent Search
            </a>
          </li>
          <li>
            <a href="http://searx" target="_blank" rel="noopener noreferrer">
              Web Search
            </a>
          </li>
          <li>
            <a href="http://hydra:5076/" target="_blank" rel="noopener noreferrer">
              NZB Hydra
            </a>
          </li>
        </ul>
        <h2>System</h2>
        <ul>
          <li>
            <a href="http://pihole/admin/index.php" target="_blank" rel="noopener noreferrer">
              Pi-hole Ad Blocking
            </a>
          </li>
          <li>
            <a href="http://znc:9999" target="_blank" rel="noopener noreferrer">
              ZNC
            </a>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default App
