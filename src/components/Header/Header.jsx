import React, {useEffect} from 'react'
import { useTheme, useDispatch } from '../Hooks/appContext'
import styles from './Header.css'

export default function Header() {
  const theme = useTheme()
  const dispatch = useDispatch()

  const handleChange = () => {
    dispatch({ type: 'THEME' });
  };
  console.log(dispatch)

  useEffect(() => {
    
  }, [theme]);

  return (
    <div className={styles.Header}>
      <input id="toggle" type="checkbox" name="theme" onChange={handleChange}  checked={theme === 'light'} />

    </div>

  )
}
