import React from "react"

import {Dropzone} from "./Dropzone"

import styles from '../stylesheets/imageInput.module.sass'

const Upload = () => {
    return (
        <div className='upload-component-container'>
            <div className={styles.upload_component}>
                Imagen del producto
                <Dropzone />
            </div>
        </div>
    )
}
export default Upload
