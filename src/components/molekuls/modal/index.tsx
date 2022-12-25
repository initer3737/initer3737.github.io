import React from 'react'
import { Icon } from '../../assembleComponent'
type props={
    modalTitle:string,
    children:Element | undefined | any,
    modalId:string,
    modalTitleIcon:string,
}
export default function Modal(props:props) {
    const {modalId,children,modalTitle,modalTitleIcon}=props
  return (
    <div className="modal fade" id={modalId}>
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable text-centered">
      <div className="modal-content text-light bg-4">
        <div className="modal-header">
          <h5 className="modal-title">
            <Icon variant={''} icon={modalTitleIcon} name={modalTitle}/>
          </h5>
          <button className="btn-close btn-close-white" data-bs-dismiss="modal" id='close-modal'/>
        </div>
        <div className="modal-body">
          <blockquote>
           <div className="d-flex flex-column">
                  {children}
           </div>
          </blockquote>
        </div>
        <div className="modal-footer">
          <button className="btn btn-outline-info text-white rounded-pill px-3 py-2" data-bs-dismiss="modal" id='modalClose'><i className="bi bi-x" /> Close</button>
        </div>
      </div>
    </div>
  </div>
  )
}
