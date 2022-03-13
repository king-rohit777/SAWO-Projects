import { useState, useEffect } from 'react'
import './styles/App.css';
import Template from './components/Templates';
import Meme from './components/Meme';
import Sawo from 'sawo'
import styles from "./styles"
import React from 'react'
function App() {
  const [templates, setTemplates] = useState([]);
  const [meme, setMeme] = useState(null);
  const [userPlayload, setUserPayload] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const config = {
      containerID: 'sawo-container',
      identifierType: "email",
      apiKey: "bf306610-45f8-473a-860f-829f109ea736", //localhost
      onSuccess: onSuccessLogin
    };

    // creating instance
    let sawo = new Sawo(config)
    // calling method to show form
    sawo.showForm();

    fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json())
      .then((data) => {
        setTemplates(data.data.memes);
      });
  }, []);
  const onSuccessLogin = async (payload) => {
    setUserPayload(payload);
    setIsLoggedIn(true);
  }
  return (
    <React.Fragment>
      <div style={styles.containerStyle}>
        <section>
          {/* Showing Successful login message */}
          {isLoggedIn && (
            <React.Fragment>
              <div className="App">
                <h1>Meme Generator</h1>
                {meme === null ? <Template templates={templates} setMeme={setMeme} /> : <Meme meme={meme} setMeme={setMeme} />}

              </div>
            </React.Fragment>
          )}

          {/*Redirect*/}
          {
            !isLoggedIn && (
              <div style={styles.formContainer} id="sawo-container">
                {/* Sawo form will appear here */}
              </div>
            )}
        </section>
      </div>
    </React.Fragment>
  );
}

export default App;