
import styles from '../stylesheets/base.module.sass'
import React from 'react'
import FormInput from './FormInput'
import {Boton} from './Button'
import Footer from './footer'
import {InputTag} from './InputTag'
import ImageInput from './ImageInput'
import Upload from './Upload'

export default function Base({
  title,
  inputs,
  onInputBlur,
  onInputFocus,
  onInputChange,
  onSubmit,
  errorMsg,
  button_title,
  footer_content
}) {
  const auxiliar = Math.round(Math.random() * (16 - 0) + 0);

  const indice1 = auxiliar;
  const indice2 = auxiliar==16? 0 : (auxiliar+1);
  return (
    <div className={styles.outbox}>
      
      <div className={styles.title_style}>{title}</div>
      <div className={styles.border_style}></div>
      {
        inputs.map(({ title,name, ejemplo, validations }) =>
          <FormInput
            key={name}
            name={name}
            ejemplo={ejemplo}
            title={title}
            validations={validations}
            errorMessage={errorMsg[name].errorMsg}
            onChange={onInputChange}
            onBlur={onInputBlur}
            onFocus={onInputFocus}
          />
        )
      }
      <InputTag/>
      <Upload />
      <Boton button_title={button_title} onClick={onSubmit} indice1={indice1} indice2={indice2} />
      <Footer content={footer_content} />
      
    </div>
  )
}


