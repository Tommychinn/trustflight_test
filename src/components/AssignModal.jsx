import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
    Form,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Container,
    Row,
    Col,
} from "reactstrap";

const AssignModal = ({ tasks, task, worker, onClick }) => {
    const [modal, setModal] = useState(false);

    const [employee, setEmployee] = useState(worker);
    const { handleSubmit, register } = useForm();

    const toggle = () => setModal(!modal);

    const updateTask = () => {
        const spreadTasks = [...tasks];
        for (let i = 0; i < spreadTasks.length; i++) {
            if (spreadTasks[i].task === task) {
                spreadTasks[i].employee = employee;
            }
        }
    };

    return (
        <Container>
            <Button onClick={toggle}>Assign</Button>

            <Modal isOpen={modal} toggle={toggle} size="lg">
                <ModalHeader toggle={toggle}>Assign Employee</ModalHeader>
                <Form onSubmit={handleSubmit(updateTask)}>
                    <ModalBody>
                        <Row>
                            <Col lg="12">
                                <label>Employee</label>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="12">
                                <input
                                    ref={register({ required: true })}
                                    type="text"
                                    name="title"
                                    onChange={(e) =>
                                        setEmployee({
                                            ...employee,
                                            worker: e.target.value,
                                        })
                                    }
                                />
                            </Col>
                        </Row>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={onClick}>
                            Submit
                        </Button>{" "}
                        <Button color="secondary" onClick={toggle}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Form>
            </Modal>
        </Container>
    );
};

export default AssignModal;
