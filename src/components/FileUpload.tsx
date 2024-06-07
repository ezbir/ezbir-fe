import React from 'react';

const FileUpload: React.FC = () => {
    const uploadJSONFiles = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        const formData = new FormData();
        const jsonBodyData = { 'someKey': 'someValue' };

        for (const key of Object.keys(event.target.files || {})) {
            if (key !== 'length') {
                formData.append('files', (event.target.files as FileList)[parseInt(key, 10)]);
            }
        }

        formData.append('jsonBodyData',
            new Blob([JSON.stringify(jsonBodyData)], {
                type: 'application/json'
            }));

        fetch('/api/service/uploadfiles', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(result => console.log('Files successfully uploaded!'))
            .catch(error => console.log('error occurred!'));
    };

    return (
        <div className="uk-margin-medium-top">
            <label>Upload Files</label>
            <input type="file"
                   onChange={(event) => uploadJSONFiles(event)}
                   multiple />
        </div>
    );
};

export default FileUpload;
