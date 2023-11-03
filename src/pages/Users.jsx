import React, { useState } from "react";
import { Button, Col, Container, Row } from 'react-bootstrap';
import UserList from '../components/users/List';
import CreateModal from '../components/users/Modals/Create'

function Users() {

    const [ShowUserModal, setShowUserModal] = useState(false)

    const closeModal = (user) => {
        setShowUserModal(false)
    }

    return (
        <Container>
            <Row>
                <Col xs="12">
                    <h1>Users</h1>
                </Col>
                <Row>
                    <Col xz="12" className="d-flex justify-content-end my-2">
                        <Button onClick={() => setShowUserModal(true)}>
                            Create
                        </Button>
                        <CreateModal show={ShowUserModal} onClose={closeModal} />
                    </Col>
                    <Col xs="12">
                        <UserList />
                    </Col>
                </Row>
            </Row>
        </Container>
    )
}

export default Users