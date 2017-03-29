import React from 'react'

import styles from './SampleComponent.scss'

export default function Button (props) {
  return <button className={styles.bordered} onClick={props.onClick}>{props.children}</button>
}
