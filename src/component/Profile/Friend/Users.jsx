import React from 'react';
import User from './User';
import Pagination from '../../common/Pagination/Pagination';


let Users = (onPageChange, currentPage, totalUser, pageSize, ...props) => {

    return (<div>

        <Pagination currentPage={currentPage} onPageChange={onPageChange}
            pageSize={pageSize} totalUser={totalUser} />
        <div>
            {
                props.users.map(u => <User key={u.id} user={u}
                    followInProgress={props.followInProgress}
                    unfollow={props.unfollow}
                    follow={props.follow} />)
            }</div>
    </div>)
}

export default Users