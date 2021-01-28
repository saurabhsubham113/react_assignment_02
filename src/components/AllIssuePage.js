import React, { Component } from 'react'
import IssueList from './IssueList';
import IssueInMemory from "./IssueInMemory";

export default class AllIssuePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 'Id',
            description: 'Issue Description',
            severity: 'Severity',
            status: 'Status'
        }
    }
    borderStyle = {
        border: '1px solid black'
    }

    render() {
        return (
            <div>
                <h1>Issue List</h1>

                <table style={this.borderStyle}>
                    <thead >
                        <tr>
                            <th style={this.borderStyle}>Id</th>
                            <th style={this.borderStyle}>Issue Description</th>
                            <th style={this.borderStyle}>Severity</th>
                            <th style={this.borderStyle}>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {IssueInMemory.map((issue) => (
                            <IssueList key={issue.id} issueList={issue} />
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
