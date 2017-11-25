import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

export default class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <h1>Gassho, du som tr&auml;nar Shorinji Kempo!</h1>
            <p>Stockholm S&ouml;dra Shorinji Kempo m&aring;ls&auml;ttnings webapp. H&auml;r kan du:</p>
            <ul>
                <li><a href="./attendance">Registrera n&auml;varo</a> och se <a href="./club-trainingplan">tr&auml;ingsplaneringen</a> </li>
                <li>F&aring; <a href="./club-feedback">feedback p&aring;</a>  din tr&auml;ning, och  <a href="./your-notes">anteckna</a> egna saker</li>
                <li><a href="./your-goals">S&auml;tta upp m&aring;l</a> f&ouml;r fysisk tr&auml;ning</li>
                <li><a href="./your-techniques">F&ouml;lja upp tekniker</a> f&ouml;r n&auml;sta gradering</li>
                <li>F&ouml;rh&ouml;ra dig p&auml;<a href="./your-techniques/rehearse"> tekniknamn</a> f&ouml;r n&auml;sta gradering</li>
            </ul>
        </div>;
    }
}
