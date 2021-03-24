import React, { Fragment } from "react";

const DisplayGitUser = props => {
    let { users, repos, loading } = props;
    let repo = repos.data;
    return (
        <Fragment>
            <section className="card">
                {loading === true ? "LOADING..." : <article className="row">
                    <div className="col-md-3">
                        <img src={users.avatar_url} alt={users.name} />
                        <hr className="hr" />
                        <div style={{ padding: "10px" }}>{users.bio}</div>
                    </div>
                    <div className="col-md-9">
                        <ul className="list-group">
                            <li className="list-group-item">{users.login}</li>
                            <li className="list-group-item">LOCATION:{users.location}</li>
                            <li className="list-group-item">COMPANY:{users.company}</li>
                            <li className="list-group-item">
                                {users.hireable === true ? "hireable" : "learner"}
                            </li>
                            <li className="list-group-item">
                                <a href={users.html_url}>MORE DETAILS</a>
                            </li>
                        </ul>
                    </div>
                </article>}
            </section>
        </Fragment>
    );
};

export default DisplayGitUser;
