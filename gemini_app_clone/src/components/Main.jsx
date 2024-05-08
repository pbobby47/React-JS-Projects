import { assets } from "../assets/Assests";

const Main = () => {
  return (
    <>
      <div id="main-container">
        <div className="header">
          <div>
            <p>
              Gemini <i class="fa-solid fa-caret-down"></i>
            </p>
          </div>
          <div className="user">P</div>
        </div>
        <div className="content">
          <div className="welcome">
            <p>
              <span>Hello, Bobby Perecharla</span>
            </p>
            <p>How can i help you today?</p>
          </div>
          <div className="cards">
            <div className="card">
              <div>
                Suggest beautiful places to see on an upcoming road trip
              </div>
              <p>
                <img src={assets.compass_icon} alt="" />
              </p>
            </div>
            <div className="card">
              <div>Briefly summarize this concept: Urban planning</div>
              <p>
                <img src={assets.bulb_icon} alt="" />
              </p>
            </div>
            <div className="card">
              <div>
                Brainstrom team bonding activities for our work retreat.
              </div>
              <p>
                <img src={assets.message_icon} alt="" />
              </p>
            </div>
            <div className="card">
              <div>Improve the readability of the following code</div>
              <p>
                <img src={assets.code_icon} alt="" />
              </p>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="input-box">
            <input type="text" placeholder="Enter a prompt here" />
            <p>
              <img src={assets.gallery_icon} alt="" />
            </p>
            <p>
              <img src={assets.mic_icon} alt="" />
            </p>
            <p>
              <img src={assets.send_icon} alt="" />
            </p>
          </div>
          <div className="info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. <span>Your privacy & Gemini Apps</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
