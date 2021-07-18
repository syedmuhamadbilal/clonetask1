import React from 'react'
import { Jumbotron } from 'reactstrap';

const Thankyoupage = () => {
    return (

        <div>
            <Jumbotron>
                <h1 className="display-3">Thankyou</h1>
                <p className="lead">Thankyou for sending us your message</p>
                <hr className="my-2" />
                <p>We have received your email</p>

            </Jumbotron>
        </div>

    )
}

export default Thankyoupage
