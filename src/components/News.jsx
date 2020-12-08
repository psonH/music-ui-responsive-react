import React from 'react'
import { Row, Col, Panel } from 'rsuite'
import news1 from '../images/1.jpg'
import news2 from '../images/2.jpg'
import news3 from '../images/3.jpg'

export const News = () => {
    return (
        <>
            <div className="news">
                <Row className="features p-0 mx-4 mx-md-auto">
                    <div className="heading mb-3 w-75 mx-auto">
                        <h3>Latest News</h3>
                        <p>Reader will be distracted by the readable 
                        content of a page when looking at it's layout.</p>
                        <hr />
                    </div>
                    <NewsContent />
                </Row>
            </div>
        </>
    )
}

const NewsContent = () => {
    const features = [
        {
            id: 1,
            title: "Live & Breathe the Music",
            imgSrc: news1
        },
        {
            id: 2,
            title: "Feel the Best Music Aloud",
            imgSrc: news2
        },
        {
            id: 3,
            title: "Take a Break and Listen",
            imgSrc: news3
        }
    ]
    return (
        <>
            {
                features.map(feature => {
                    return (
                        <Col xs={24} md={8} className="p-0 p-md-3 feature" key={feature.id}>
                            <Panel className="mb-3 news-card" shaded>
                                <img src={feature.imgSrc} alt={feature.imgSrc} width="100%"/>
                                <div className="news-card-body">
                                    <h4>{feature.title}</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur! Et exercitationem, 
                                        iusto distinctio quibusdam ab or sit amet consectet
                                        quaerat deleniti doloremque ad fuga delectus!
                                        Uibusdam ab quaerat deleniti doloremque ad fuga delectus!</p>
                                </div>
                            </Panel>
                        </Col>
                    )
                })
            }
        </>
    )
}