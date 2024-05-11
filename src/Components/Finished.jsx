import React from "react";

const Finished = (props) => {
    return (
        <div className="login-container">
            <h1 className="welcome-message">Voting is Finished</h1>
            <br/>
            <br/>
            <br/>
            <table id="myTable" className="candidates-table">
                <thead>
                <tr>
                    <th>Index</th>
                    <th>Candidate name</th>
                    <th>Candidate votes</th>
                </tr>
                </thead>
                <tbody>
                {props.candidates && props.candidates.map((candidate, index) => (
                    <tr key={index}>
                    <td>{candidate.index}</td>
                    <td>{candidate.name}</td>
                    <td>{candidate.voteCount}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default Finished;