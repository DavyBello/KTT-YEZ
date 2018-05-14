import { Component } from 'react'
import dynamic from 'next/dynamic'
import { Query } from 'react-apollo'
import moment from 'moment'

import { MANAGER_CANDIDATE_BY_ID_DOCUMENTS_QUERY } from '../../../../lib/backendApi/queries'

import {
  ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  UncontrolledTooltip
} from 'reactstrap';
import Pagination from "react-js-pagination"
import Img from 'react-image'
import Dropzone from 'react-dropzone'
// import Lightbox from 'react-image-lightbox'
const Lightbox = dynamic(import('react-image-lightbox'), { loading: () => `` })

import UploadModal from './UploadModal'

const EmptySpace = props => (
  <p className="display-4" style={{ padding: '10px 0px 10px' }}>
    <i className="icon-ghost"></i> This space is lonely
  </p>
)

let images = [];
export default class DocumentsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // showConfirmModal: false,
      modalOpen: false,
      photoIndex: 0,
      isOpen: false,
      files: [],
      //Pagination variables
      currentPage: 1,
      perPage: 4,
    }
    this.toggle = this.toggle.bind(this);
    this.save = this.save.bind(this);
    // this.toggleConfirm = this.toggleConfirm.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  handlePageChange(pageNumber) {
    this.setState({ currentPage: pageNumber });
  }

  onDrop(files) {
    console.log(files);
    this.setState({
      files,
      modalOpen: true
    });
  }
  toggle() {
    //destroy the object URL when closing preview modal
    (this.state.modalOpen) && (window.URL.revokeObjectURL(this.state.files[0].preview));
    this.setState({ modalOpen: !this.state.modalOpen })
  }
  // toggleConfirm(doc){
  //   this.setState({deleteJobId: doc._id || ''})
  //   this.setState({showConfirmModal: !this.state.showConfirmModal})
  // }
  save() {
    //console.log('saving');
    setTimeout(() => this.setState({ modalOpen: !this.state.modalOpen }), 2000)
  }

  render() {
    const { photoIndex, isOpen, files, currentPage, perPage } = this.state;
    return (
      <div>
        <Row>
          <Col xs="12" sm="12" md="12">
            <Card className="border-teal">
              <CardBody>
                <Dropzone onDrop={this.onDrop.bind(this)}
                  style={{
                    borderStyle: 'inherit',
                    borderRadius: '5px'
                  }}
                  accept="image/*"
                  multiple={false}>
                  <div className="text-center">
                    <p className="display-3"><i className="icon-cloud-upload"></i></p>
                    <p className="display-4" style={{ fontSize: '2rem' }}>Drop a file here or click to upload</p>
                  </div>
                </Dropzone>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <UploadModal isOpen={this.state.modalOpen} toggle={this.toggle} save={this.save} file={this.state.files[0]} />
        <Query query={MANAGER_CANDIDATE_BY_ID_DOCUMENTS_QUERY}
          variables={{
            id: this.props.id,
            page: currentPage,
            perPage: perPage
          }}>
          {({ loading, error, data }) => {
            if (loading)
              return "Loading..."

            if (error)
              return `Error! ${error.message}`

            const { managerCandidateById } = data;
            const { documentsPagination } = managerCandidateById;
            const candidate = managerCandidateById;
            images = documentsPagination.items.map((doc) => ({
              imgUrl: doc.fileURL,
              title: doc.fileTitle
            }));
            return (
              <div>
                <Row>
                  {documentsPagination.items.map((doc, index) => (
                    <Col xs="12" sm="4" md="3">
                      <Card className="border-teal">
                        <CardHeader>
                          <b>{doc.fileTitle}</b>
                          <div className="float-right">
                            <Button onClick={() => this.toggleConfirm(doc)} className="btn-sm" outline color="danger"><i className="icon-close"></i></Button>
                          </div>
                        </CardHeader>
                        <CardBody>
                          <div style={{ height: '160px', margin: 'auto' }}
                            onClick={() => this.setState({ isOpen: true, photoIndex: index })}>
                            <Img src={doc.fileURL} style={{ width: '100%', maxHeight: '100%' }} />
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  )
                  )}
                </Row>
                {(documentsPagination.pageInfo.itemCount > this.props.showPerPage) && (
                  <div style={{ textAlign: 'center', width: 'fit-content', margin: 'auto' }}>
                    <Pagination
                      activePage={currentPage}
                      itemsCountPerPage={documentsPagination.pageInfo.perPage}
                      totalItemsCount={documentsPagination.pageInfo.itemCount}
                      pageRangeDisplayed={5}
                      onChange={this.handlePageChange}
                    />
                  </div>
                )}
              </div>
            )
          }}
        </Query>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex].imgUrl}
            nextSrc={images[(photoIndex + 1) % images.length].imgUrl}
            prevSrc={images[(photoIndex + images.length - 1) % images.length].imgUrl}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
            imageTitle={images[photoIndex].title}
          // discourageDownloads
          />
        )}
      </div>
    )
  }
}
