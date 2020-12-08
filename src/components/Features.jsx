import React from 'react'
import { Panel, Row, Col, Avatar, Icon } from 'rsuite'

export const Features = () => {
    return (
        <div className="my-5">
            <Row className="features p-0 mx-4 mx-md-auto">
                <div className="heading mb-3 w-75 mx-auto">
                    <h3>Our Speciality</h3>
                    <p>Here's what we have got for you!</p>
                    <hr />
                </div>
                <FeatureContent />
            </Row>
        </div>
    )
}

const FeatureContent = () => {
    const features = [
        {
            id: 1,
            title: "Access Anywhere",
            icon: "soundcloud"
        },
        {
            id: 2,
            title: "Design Albums",
            icon: "image"
        },
        {
            id: 3,
            title: "Feel On the Go!",
            icon: "podcast"
        },
        {
            id: 4,
            title: "Non-Stop Melody",
            icon: "music"
        },

    ]
    return (
        <>
            {
                features.map(feature => {
                    return (
                        <Col xs={24} sm={12} lg={6} className="py-2 feature" key={feature.id}>
                            <Panel className="py-2" shaded>
                                <h4>{feature.title}</h4>
                                <Avatar className="feature-icon mb-3" size="lg" circle><Icon icon={feature.icon} /></Avatar>
                                <p>Lorem ipsum dolor sit amet consectetur! Et exercitationem, iusto distinctio quibusdam ab quaerat deleniti doloremque ad fuga delectus!</p>
                            </Panel>
                        </Col>
                    )
                })
            }
        </>
    )
}
