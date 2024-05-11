import React from "react";
import { Link } from "react-router-dom";





const Connected = (props) => {
   
    return (
        <div className="connected-container">
            
  <body>
    <div class="main-container">
      <div class="nav">
        <img id="logo" src="C:\Users\hirak\Desktop\votingApp\React-Voting-Application-main\React-Voting-Application-main\y\img1.jpg"/>
        {/* <h4 class="candidates">Candidates</h4> */}
        {/* <h4 class="results">Results</h4> */}
        <h4 class="our-aim"><Link to="/OurAim">Our Aim</Link></h4>
        <h4 class="contact-us"><Link to="/ContactUs">Contact Us</Link></h4>
        {/* <button id="button"> Admin</button> */}
    </div>
      <div class="flex-row-d">
        <div class="group"></div>
        <span class="take-charge-of-your-vote" >Take Charge of<br />Your Vote</span>


        <h1 className="connected-header">You are Connected to Metamask</h1>
        <p className="connected-account">Metamask Account: {props.account}</p>
        <p className="connected-account">Remaining Time: {props.remainingTime}</p>
            { props.showButton ? (
                <p className="connected-account">You have already voted</p>
            ) : (
                <div>
                    <input type="number" placeholder="Entern Candidate Index" value={props.number} onChange={props.handleNumberChange}></input>
                    <br />
                    <br />
            <button className="login-button" onClick={props.voteFunction}>Vote</button>

                </div>
            )}
            <br />
            <br />
            <table id="myTable" className="candidates-table">
                <thead>
                <tr>
                    <th>Index</th>
                    <th>Candidate name</th>
                    {/* <th>Candidate votes</th> */}
                </tr>
                </thead>
                <tbody>
                {props.candidates.map((candidate, index) => (
                    <tr key={index}>
                    <td>{candidate.index}</td>
                    <td>{candidate.name}</td>
                    {/* <td>{candidate.voteCount}</td> */}
                    </tr>
                ))}
                </tbody>
            </table>


        <span class="vote-tomorrow">#VoteForTomorrow<br />#VoteForBetter <br />#VoteForFuture</span>
        {/* <div class="rectangle-6">
          <button class="vote-now">Vote Now</button>
          <div class="arrow-right"></div>
          
        </div> */}
      </div>
      <div class="vector"></div>
    </div>
   
  </body>
            
            
        </div>
    )
}

export default Connected;