import React from 'react'
import { Row, Col } from 'rsuite'
import music from '../images/musicbg.jpg'
import mike from '../images/mike.png'

export const MusicLover = () => {
    return (
        <>
            <div>
                <Row className="m-0 music-parent">
                    <Col sm={24} md={12} className="p-0 left-fd"> 
                        <img src={music} alt="music-band" width="100%" height="100%" />
                    </Col>
                    <Col sm={24} md={12} className="p-0 right-fd">
                        <div className="right-fd-inner">
                            <div className="w-100 text-center pt-4">
                                 <img src={mike} alt="music" height="140px" width="140px" />
                            </div>
                            <h1>MEET OUR MUSIC STARS!</h1>
                            <p>It is a long established fact that a reader will be distracted by the readable
                            content of a page when looking at it's layout! dolor sit amet, consectetur adipiscing elit.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus, nesciunt aliquam? 
                            Quo quam fugit nesciunt. Deleniti, erspiciatis minus?</p>  
                            <div className="w-100 text-center pb-5">
                                <button className="read-more">Read More!</button>    
                            </div>                
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}
