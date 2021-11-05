import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { follow, unfollow, currentUsers, setCurrentPage } from '../../redux/userReducer';
import Preloader from '../../common/preloader/Preloader';
import {compose} from 'redux';
import {withAuthRedirect} from '../../HOC/AuthRedirect';
import { getCurrentPage, getIsFetching, getPageSize, getTotalUser, getUsers, getFollowInProgress } from '../../redux/userSelector';

class UsersContainer extends React.Component {
    componentDidMount() {
        const {currentPage, pageSize} =this.props;
        this.props.currentUsers(currentPage,pageSize);
    }
    onPageChange = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.currentUsers(pageNumber,pageSize);
    }

    render() {


        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users pageSize={this.props.pageSize}
                totalUser={this.props.totalUser}
                currentPage={this.props.currentPage}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                onPageChange={this.onPageChange}
                followInProgress={this.props.followInProgress}
                />
        </>

    }
}
let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUser: getTotalUser(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followInProgress: getFollowInProgress(state)
    }
}



export default compose (
    withAuthRedirect,
    connect(mapStateToProps, {
    follow ,
    unfollow,
    setCurrentPage,
    currentUsers
})) (UsersContainer)