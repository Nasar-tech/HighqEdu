import React from 'react'

const OnlyContactus = () => {
    return (
        <>
        
            <div class="container mt-4">
        <br></br>
        <div class="container mt-4">
          <br/><br/>
          <h3 class="text-center">Fill your Details to get touch with us</h3>
        </div>
        <div class="row contactUs">
          <div class="col-8 mx-auto bg-light formDiv">
            <form method="POST">
              
              <div class="mb-3">
                <label for="email" class="form-label">
                  Enter youre Email :  &nbsp; *
                </label>
                <input
                placeholder="Ex. shaiknasar765@gmail.com"
                  type="email"
                  class="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="mobile" autoComplete="off" class="form-label">
                  Enter youre Mobile Number :  &nbsp; *
                </label>
                <input type="number" placeholder="Ex. 8074826020" autoComplete="off" class="form-control" id="mobile" />
              </div>
              <div class="mb-3">
                <label for="textBox" autoComplete="off" class="form-label mt-2">
                  Enter your Intension to Contact us  :
                </label><br/>
                <textarea placeholder="Ex. forTesting (or) Fullstack Development " type="text" className="textArea">
                  
                </textarea>

                
              </div>

              <button type="submit" class="btn btn-primary mt-4">
                Submit
              </button>
            </form>
          </div>
        </div>
        </div>
        </>
    )
}

export default OnlyContactus
