import React from 'react'
import "./Right.css"

function Right() {
    return (
      <div className="rightbody">
        <div className="wrapper">
          <form>
            <div>Email</div>
            <div>
              <input type="text" />
            </div>
            <div>Subject</div>
            <div>
              <input type="text" />
            </div>
            <div>Message</div>
            <div>
              <textarea name="Text1" cols="40" rows="5"></textarea>
            </div>

            <button className="button">Send</button>
          </form>
        </div>
      </div>
    );
}

export default Right
