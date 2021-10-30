import LoadinggBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import React, { useEffect, useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { Container, Modal, Button } from 'react-bootstrap'
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import { DateToStr } from '../Utility';
import { useDispatch, useSelector } from 'react-redux';
import { listUser, updateUser, deleteUser } from '../actions/userActions';

export default function UserScreen() {
    const dispatch = useDispatch();
    const userList = useSelector(state => state.userList);
    const { loading, error, users } = userList;

    useEffect(() => {
        dispatch(listUser());
    }, [dispatch]);

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [rowData, setRowData] = useState({});
    useEffect(() => {
        setShowDeleteModal(true);
    }, [rowData])

    const { updated } = useSelector((state) => state.userUpdate);
    useEffect(() => {
        if (updated) {
            dispatch(listUser());
        }
    }, [updated, dispatch]);

    const { deleted } = useSelector((state) => state.userDelete);
    useEffect(() => {
        if (deleted) {
            setShowDeleteModal(false);
            dispatch(listUser());
        }
    }, [deleted, dispatch]);

    const columns = [
        {
            dataField: '#',
            text: 'No',
            formatter: (cell, row, rowIndex) => {
                return <span>{rowIndex + 1}</span>;
            }
        },
        { dataField: "name", text: "Name", sort: true },
        { dataField: "email", text: "Email", sort: true },
        { dataField: "createdAt", text: "Created Date", formatter: DateToStr, sort: true },
        { dataField: "updatedAt", text: "Updated Date", formatter: DateToStr, sort: true },
        {
            dataField: "isAdmin", text: "Admin", sort: true, formatter: (cell, row) => {
                return (
                    <div>
                        <span onClick={() => changeUser(row, true)}>
                            <i className={(cell) ? "fa fa-check-square-o" : "fa fa-square-o"} aria-hidden="true"></i>
                        </span>
                    </div>
                )
            }
        }, {
            dataField: "isVerified",
            text: "Verified",
            formatter: (cell, row) => {
                return (
                    <div style={{ textAlign: "center", cursor: "pointer", lineHeight: "normal" }}>
                        <span onClick={() => changeUser(row, false)}>
                            <i className={(cell) ? "fa fa-check-square-o" : "fa fa-square-o"}></i>
                        </span>
                    </div>
                )
            }
        },
        {
            dataField: "edit",
            text: "Action",
            formatter: (cell, row) => {
                return (
                    <div style={{ textAlign: "center", cursor: "pointer", lineHeight: "normal" }}>
                        <span onClick={() => setRowData(row)}>
                            <i className="fa fa-trash-o"></i>
                        </span>
                    </div>)
            },
            headerAttrs: { width: 100 },
            attrs: { width: 100, class: "EditRow" }
        }
    ]

    const { SearchBar } = Search;

    function changeUser(user, isUpdateAdmin) {
        const data = {
            _id: user._id,
            isAdmin: (isUpdateAdmin) ? !user.isAdmin : user.isAdmin,
            isVerified: (isUpdateAdmin) ? user.isVerified : !user.isVerified
        }
        dispatch(updateUser(data));
    }

    return (<div>
        <h1 className="title">User Management</h1>
        {loading ? (<LoadinggBox ></LoadinggBox>) :
            error ? (<MessageBox variant="danger">{error}</MessageBox>) : (<>
                <Modal show={showDeleteModal}>
                    <Modal.Body>
                        <Container>
                            <Modal.Title className="m-1">
                                Delete User
                            </Modal.Title>
                            <p>Do you want really delete "{rowData.name}"</p>
                            <div className="flex mt-2">
                                <Button className="m-2 float-end btn btn-danger" onClick={() => setShowDeleteModal(false)}>Cancel</Button>
                                <Button className="m-2 float-end btn btn-primary" onClick={() => dispatch(deleteUser(rowData._id))}>Delete</Button>

                            </div>
                        </Container>
                    </Modal.Body>
                </Modal>
                <ToolkitProvider
                    keyField="_id"
                    data={users}
                    columns={columns}
                    search={{ searchFormatted: true }}
                >
                    {
                        props => (
                            <div className="flex">
                                <SearchBar {...props.searchProps} className="m-2" />
                                <BootstrapTable
                                    {...props.baseProps}
                                    pagination={paginationFactory()}
                                />
                            </div>
                        )
                    }
                </ToolkitProvider>
            </>
            )}
    </div>
    )
}
