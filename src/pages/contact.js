import React from "react";

const Contact = () => {
  return (
    <div>
      <div class="container">
        <form action="" method="POST">
          <div class="form-row">
            <div class="input-data">
              <input type="text" required></input>
              <div class="underline"></div>
              <label for="">First Name</label>
            </div>
            <div class="input-data">
              <input type="text" required></input>
              <div class="underline"></div>
              <label for="">Last Name</label>
            </div>
          </div>
          <div class="form-row">
            <div class="input-data">
              <input type="text" required></input>
              <div class="underline"></div>
              <label for="">Email Address</label>
            </div>
            <div class="input-data">
              <input type="text" required></input>
              <div class="underline"></div>
              <label for="">News Category</label>
            </div>
          </div>
          <div class="form-row">
            <div class="input-data textarea">
              <textarea rows="8" cols="80" required></textarea>
              <br />
              <div class="underline"></div>
              <label for="">Write your message</label>
              <br />
              <div class="form-row submit-btn">
                <div class="input-data">
                  <div class="inner"></div>
                  <input type="submit" value="submit"></input>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
