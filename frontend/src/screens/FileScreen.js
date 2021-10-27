import LoadinggBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { deleteFile, listFile, fileUpload, getFile } from '../actions/fileActions';
import React, { useEffect, useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { Container, Modal, Button } from 'react-bootstrap'
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import { DateToStr } from '../Utility';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default function FileScreen() {
    const { SearchBar } = Search;
    const dispatch = useDispatch();

    const fileList = useSelector(state => state.fileList);
    const { loading, error, files } = fileList;
    useEffect(() => {
        dispatch(listFile());
    }, [dispatch]);

    const [showUploadModal, setShowUploadModal] = useState(false);
    useEffect(() => {
        if (showUploadModal) { setUploadFiles(null); }
    }, [showUploadModal]);
    const [uploadFiles, setUploadFiles] = useState(null);
    const [date, setDate] = useState(new Date());

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [row, setRow] = useState('');
    useEffect(() => {
        setShowDeleteModal(true);
    }, [row]);

    const { uploaded } = useSelector((state) => state.fileUpload);
    useEffect(() => {
        if (uploaded) {
            setShowUploadModal(false);
            dispatch(listFile());
        }
    }, [uploaded, dispatch]);

    const { deleted } = useSelector((state) => state.fileDelete);
    useEffect(() => {
        if (deleted) {
            setShowDeleteModal(false);
            dispatch(listFile());
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
        {
            dataField: "name",
            text: "Name",
            sort: true,
            formatter: (cell, row) => {
                return (
                    <span onClick={() => {dispatch(getFile(row._id))}}>{cell}</span>
                )
            }
        },
        { dataField: "date", text: "Date", formatter: DateToStr, sort: true },
        { dataField: "createdAt", text: "Uploaded Date", formatter: DateToStr, sort: true },
        { dataField: "", text: "Uploaded By" },
        {
            dataField: "edit",
            text: "Action",
            sort: false,
            formatter: (cell, row) => {
                return (
                    <div
                        style={{
                            textAlign: "center",
                            cursor: "pointer",
                            lineHeight: "normal"
                        }}>
                        <span onClick={() => setRow(row)}>
                            <i className="fa fa-trash-o"></i>
                        </span>
                    </div>);
            },
            headerAttrs: { width: 100 },
            attrs: { width: 100, class: "EditRow" }
        }
    ]

    function UploadFile(e) {
        e.preventDefault();
        const formData = new FormData();
        Array.from(uploadFiles).forEach(file => {
            formData.append('file', file);
        });
        if (date) formData.append('date', date);
        dispatch(fileUpload(formData));
    }

    return (<div>
        {loading ? (<LoadinggBox ></LoadinggBox>) :
            error ? (<MessageBox variant="danger">{error}</MessageBox>) : (<>
                <Modal show={showUploadModal}>
                    <Modal.Body>
                        <Container>
                            <Modal.Title>
                                Upload File
                            </Modal.Title>
                            <input type="file" className="form-control mt-4" multiple accept=".csv" onChange={(e) => setUploadFiles(e.target.files)} />
                            <div className="formgroup mt-4">
                                <label>Date</label>
                                <DatePicker className="form-control" selected={date} onChange={(d) => setDate(d)} />
                            </div>
                            <div className="flex mt-2">
                                <Button className="m-2 float-end btn btn-danger" onClick={() => setShowUploadModal(false)}>Cancel</Button>
                                <Button className="m-2 float-end btn btn-primary" onClick={UploadFile}>OK</Button>
                            </div>
                        </Container>
                    </Modal.Body>

                </Modal>
                <Modal show={showDeleteModal}>
                    <Modal.Body>
                        <Container>
                            <Modal.Title className="m-1">
                                Delete File
                            </Modal.Title>
                            <p>Do you want really delete {row.name} file?</p>
                            <div className="flex mt-2">
                                <Button className="m-2 float-end btn btn-danger" onClick={() => setShowDeleteModal(false)}>Cancel</Button>
                                <Button className="m-2 float-end btn btn-primary" onClick={() => { dispatch(deleteFile(row._id)) }}>Delete</Button>
                            </div>
                        </Container>
                    </Modal.Body>
                </Modal>
                <ToolkitProvider
                    keyField="_id"
                    data={files}
                    columns={columns}
                    search={{ searchFormatted: true }}
                >
                    {
                        props => (
                            <div className="flex">
                                <SearchBar {...props.searchProps} className="m-2" />
                                <Button className="float-end" onClick={() => setShowUploadModal(true)}>Upload Excel</Button>
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
