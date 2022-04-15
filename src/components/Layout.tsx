import React from "react"
import ThemeContext from '../context/ThemeContext'
import './Layout.css';

export const Layout: React.FC = ({ children }) => {
  return <ThemeContext.Consumer>
      {theme => (
        <div className={(theme.dark ? 'dark' : 'light') + ' page-wrapper'}>
            <ThemeContext.Consumer>
              {theme => (
                <div>
                  <button className={'context-button'} onClick={() => theme.toggleDark()}>Context data toggle: { theme.dark ? 'DARK' : 'LIGHT' }</button>
                </div>
                )}
            </ThemeContext.Consumer>
        { children }
        </div>
      )}
    </ThemeContext.Consumer>
}
