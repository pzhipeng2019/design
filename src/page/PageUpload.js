import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Upload from 'rc-upload';
const props = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    multiple: true,
    onStart(file) {
        console.log('onStart', file, file.name);
    },
    onSuccess(ret) {
        console.log('onSuccess', ret);
    },
    onError(err) {
        console.log('onError', err);
    },
    beforeUpload(file, fileList) {
        console.log(file, fileList);
        return new Promise((resolve) => {
            console.log('start check');
            setTimeout(() => {
                console.log('check finshed');
                resolve(file);
            }, 3000);
        });
    },
};

class PageUpload extends Component {
    render() {
        return (
            <div>
                <Upload {...props}><a>开始上传</a></Upload>
            </div>
        );
    }
}

export default PageUpload;