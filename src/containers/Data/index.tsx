import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IApplicationState, IDataState } from 'reduxTypes';
import { Dispatch } from 'redux';
import { DataActions } from '@actions';

interface DataProps extends IDataState {
    request: () => void;
}


class DataContainer extends Component<DataProps> {
    constructor(props: DataProps) {
        super(props);
        props.request();
    }
    render() {
        console.log(this.props);
        const { loading, error, data } = this.props;
        if (loading) {
            return <div>loading</div>;
        }
        if (error) {
            return <div>Error: {error}</div>
        }

        return (<>
            {JSON.stringify(data)}
        </>);
    }
}

const mapStateToProps = ({ data: { data, loading, error } }: IApplicationState) => ({
    data,
    loading,
    error
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    request: () => dispatch(DataActions.dataRequest())
})

export default connect(mapStateToProps, mapDispatchToProps)(DataContainer);

