import LoadinggBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { deleteLicense, listLicense } from '../actions/licenseActions';
import React, { useEffect, useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { Container, Modal, Button, Row } from 'react-bootstrap'
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import { DateToStr } from '../Utility';
import { useDispatch, useSelector } from 'react-redux';
import { updateLicense } from '../actions/licenseActions';

export default function LicenseScreen() {
    const dispatch = useDispatch();
    const licenseList = useSelector(state => state.licenseList);
    const { loading, error, licenses } = licenseList;

    useEffect(() => {
        dispatch(listLicense());
    }, [dispatch]);

    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [rowData, setRowData] = useState({});
    const [targetDate, setTargetDate] = useState(Date);
    const [yearStep, setYearStep] = useState(0);
    const [monthStep, setMonthStep] = useState(0);
    const [dateStep, setDateStep] = useState(0);
    const [deviceId, setDeviceId] = useState('');
    const [isNew, setIsNew] = useState(false);

    const { updated } = useSelector((state) => state.licenseUpdate);
    useEffect(() => {
        if (updated) {
            setShowUpdateModal(false);
            dispatch(listLicense());
        }
    }, [updated, dispatch]);

    const { deleted } = useSelector((state) => state.licenseDelete);

    useEffect(() => {
        if (deleted) {
            setShowDeleteModal(false);
            dispatch(listLicense());
        }
    }, [deleted, dispatch]);

    useEffect(() => {
        let date = (isNew) ? new Date(Date.now()) : new Date(rowData.date);
        if (yearStep) {
            date.setFullYear(date.getFullYear() + parseInt(yearStep));
        }
        if (monthStep) {
            date.setMonth(date.getMonth() + parseInt(monthStep));
        }
        if (dateStep) {
            date.setDate(date.getDate() + parseInt(dateStep));
        }
        setTargetDate(date);
    }, [dateStep, monthStep, yearStep, rowData, isNew])

    const columns = [
        {
            dataField: '#',
            text: 'No',
            formatter: (cell, row, rowIndex) => {
                return <span>{rowIndex + 1}</span>;
            }
        },
        { dataField: "deviceId", text: "DeviceId", sort: true },
        { dataField: "date", text: "License Date", formatter: DateToStr, sort: true },
        { dataField: "createdAt", text: "Created Date", formatter: DateToStr, sort: true },
        { dataField: "updatedAt", text: "Updated Date", formatter: DateToStr, sort: true },
        { dataField: "updatedBy", text: "Updated By" },
        {
            dataField: "edit",
            text: "Action",
            sort: false,
            formatter: (cell, row, rowIndex, formatExtraData) => {
                return (
                    <div
                        style={{
                            textAlign: "center",
                            cursor: "pointer",
                            lineHeight: "normal"
                        }}>
                        <span onClick={() => updateDlg(row)}>
                            <i className="fa fa fa-pencil-square-o"></i>
                        </span> <span onClick={() => deleteConfirmDlg(row)}>
                            <i className="fa fa-trash-o"></i>
                        </span>
                    </div>)
            },
            headerAttrs: { width: 100 },
            attrs: { width: 100, class: "EditRow" }
        }
    ]

    const { SearchBar } = Search;

    function updateDlg(data = null) {
        if (data) {
            setTargetDate(data.date);
            setRowData(data);
            setIsNew(false);
        }
        else {
            setTargetDate(Date.now())
            setRowData({});
            setIsNew(true);
        }
        setDateStep(0);
        setMonthStep(0);
        setYearStep(0)
        setShowUpdateModal(true);
    }

    function updateDevice() {
        dispatch(updateLicense({
            _id: rowData._id,
            deviceId: deviceId,
            date: targetDate
        }))
    }

    function deleteConfirmDlg(data) {
        setShowDeleteModal(true);
        setRowData(data);
    }

    function deleteDevice() {
        dispatch(deleteLicense({
            id: rowData._id
        }))
    }

    return (<div>
        <h1 className="title">License Management</h1>
        {loading ? (<LoadinggBox ></LoadinggBox>) :
            error ? (<MessageBox variant="danger">{error}</MessageBox>) : (<>
                <Modal show={showUpdateModal}>
                    <Modal.Body>
                        <Container>
                            <Modal.Title>
                                {isNew ? <>New Device</> : <>Update Device "{rowData.deviceId}" </>}
                            </Modal.Title>
                            {isNew ?
                                <div className="formgroup mt-2">
                                    <label>DeviceId:</label>
                                    <input type="text" className="form-control" onChange={(e) => setDeviceId(e.target.value)}></input>
                                </div>
                                : (<div className="mt-4"><label>Current License Date:</label> {DateToStr(rowData.date)}</div>)}
                            <div className="mt-4"><label>Target License Date:</label> {DateToStr(targetDate)}</div>
                            <Row className="mt-4">
                                <div className="formgroup col-4">
                                    <label>Year:</label>
                                    <input type="number" min="0" step="1" className="form-control" onChange={(e) => setYearStep(e.target.value)}></input>
                                </div>
                                <div className="formgroup col-4">
                                    <label>Month:</label>
                                    <input type="number" min="0" step="1" className="form-control" onChange={(e) => setMonthStep(e.target.value)}></input>
                                </div>
                                <div className="formgroup col-4">
                                    <label>Date:</label>
                                    <input type="number" min="0" step="1" className="form-control" onChange={(e) => setDateStep(e.target.value)}></input>
                                </div>
                            </Row>
                            <div className="flex mt-2">
                                <Button className="m-2 float-end btn btn-danger" onClick={() => setShowUpdateModal(false)}>Cancel</Button>
                                <Button className="m-2 float-end btn btn-primary" onClick={() => updateDevice()}>Update</Button>
                            </div>
                        </Container>
                    </Modal.Body>
                </Modal>
                <Modal show={showDeleteModal}>
                    <Modal.Body>
                        <Container>
                            <Modal.Title className="m-1">
                                Delete Device
                            </Modal.Title>
                            <p>Do you want really Device "{rowData.deviceId}"</p>
                            <div className="flex mt-2">
                                <Button className="m-2 float-end btn btn-danger" onClick={() => setShowDeleteModal(false)}>Cancel</Button>
                                <Button className="m-2 float-end btn btn-primary" onClick={() => deleteDevice()}>Delete</Button>
                            </div>
                        </Container>
                    </Modal.Body>
                </Modal>
                <ToolkitProvider
                    keyField="_id"
                    data={licenses}
                    columns={columns}
                    search={{ searchFormatted: true }}
                >
                    {
                        props => (
                            <div className="flex">
                                <SearchBar {...props.searchProps} className="m-2" />
                                <Button className="float-end" onClick={() => updateDlg()}>New Device</Button>
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
