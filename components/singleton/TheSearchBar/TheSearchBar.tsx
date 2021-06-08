import { useState } from 'react'
import classNames from 'classnames'
import { useRouter } from 'next/router'

import CommonImage from '../../common/CommonImage/CommonImage'
import styles from './TheSearchBar.module.scss'

const TheSearchBar: React.FC = () => {
  const [searchText, setSearchText] = useState('')
  const router = useRouter()

  const onSearchTextChange: JSX.IntrinsicElements['input']['onInput'] = ({
    target
  }) => {
    setSearchText((target as HTMLInputElement).value)
  }

  const doSearchItems: JSX.IntrinsicElements['form']['onSubmit'] = e => {
    e.preventDefault()

    if (!searchText.trim()) {
      return
    }

    router.push({
      pathname: '/items',
      query: {
        search: searchText
      }
    })
  }

  return (
    <form
      onSubmit={doSearchItems}
      className={classNames(styles.searchBarContainer, 'u-full-height')}>
      <input
        data-test="search-input"
        className={styles.searchBarInput}
        type="search"
        placeholder="Nunca dejes de buscar"
        onInput={onSearchTextChange}
        value={searchText}
      />

      <button
        data-test="search-btn"
        className={classNames(styles.searchBarButton, 'u-hide-to-s')}>
        <CommonImage name="ic_search" />
      </button>
    </form>
  )
}

export default TheSearchBar
