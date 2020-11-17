import React from 'react'

function HistoryUsers(Component) {
    const historyUsers = JSON.parse(localStorage.getItem('historyUsers') || '[]')
    return function (props) {
        return <Component {...props} historyUsers={historyUsers} />
    }
}

HistoryUsers.propTypes = {

}

export default HistoryUsers

