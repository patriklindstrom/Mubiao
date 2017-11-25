import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState } from '../store';
import * as AttendanceStore from '../store/Attendance';
import * as WeatherForecasts from '../store/WeatherForecasts';

type AttendanceProps =
    AttendanceStore.AttendanceState
    & typeof AttendanceStore.actionCreators
    & RouteComponentProps<{}>;

class Attendance extends React.Component<AttendanceProps, {}> {
    public render() {
        return <div>
            <h1>N&auml;rvaro</h1>

            <p>Klicka varje gång du tränar</p>

            <p>Nuvarande r&auml;kning: <strong>{this.props.count}</strong></p>

            <button onClick={() => { this.props.increment() }}>Tr&auml;nade</button>
        </div>;
    }
}

// Wire up the React component to the Redux store
export default connect(
    (state: ApplicationState) => state.counter, // Selects which state properties are merged into the component's props
   AttendanceStore.actionCreators                 // Selects which action creators are merged into the component's props
)(Attendance) as typeof Attendance;