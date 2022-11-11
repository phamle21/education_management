import SweetAlert from 'react-bootstrap-sweetalert';

export default function AlertConfirm({ title, onConfirm, }) {
    return (
        <SweetAlert
            warning
            showCancel
            confirmBtnText="Xóa"
            confirmBtnBsStyle="danger"
            title={title}
            onConfirm={onConfirm}
            onCancel={this.onCancel}
            focusCancelBtn
        >
            You will not be able to recover this imaginary file!
        </SweetAlert>
    )
}