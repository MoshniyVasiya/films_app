import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import './TransitionedBlock.sass';

const TransitionedBlock = ({children, classes = ''}) => (
    <CSSTransitionGroup
        transitionName="page-animation"
        component="div"
        className={classes}
        transitionAppear={true}
        transitionAppearTimeout={900}
        transitionEnterTimeout={700}
        transitionLeaveTimeout={500}>
        {children}
    </CSSTransitionGroup>
);

export default TransitionedBlock;