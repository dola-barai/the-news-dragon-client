import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'
const RightNav = () => {
    return (
        <div className='mt-4'>
            <h4>Login With</h4>
            <Button variant="outline-primary" className='mb-2'><FaGoogle /> Login with Google</Button>
            <Button variant="outline-secondary"><FaGithub /> Login with Github</Button>
            <div className='mt-3'>
                <h4>Find Us On</h4>
                <ListGroup>
                  <ListGroup.Item> <FaFacebook /> facebook</ListGroup.Item>
                  <ListGroup.Item> <FaTwitter /> twitter</ListGroup.Item>
                  <ListGroup.Item> <FaInstagram /> instagram</ListGroup.Item>
                </ListGroup>
                <QZone></QZone>
                <div>
                    <img src={bg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default RightNav;