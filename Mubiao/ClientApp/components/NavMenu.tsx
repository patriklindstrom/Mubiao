import * as React from 'react';
import { NavLink, Link } from 'react-router-dom';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <div className='main-nav'>
                   <div className='navbar navbar-inverse'>
                       <div className='navbar-header'>
                           <button type='button' className='navbar-toggle' data-toggle='collapse' data-target=
                                   '.navbar-collapse'>
                               <span className='sr-only'>Toggle navigation</span>
                               <span className='icon-bar'></span>
                               <span className='icon-bar'></span>
                               <span className='icon-bar'></span>
                           </button>
                           <Link className='navbar-brand' to={ '/' }>Mubiao</Link>
                       </div>
                       <div className='clearfix'></div>
                       <div className='navbar-collapse collapse'>
                           <ul className='nav navbar-nav'>
                               <li>
                                   <NavLink exact to={ '/' } activeClassName='active'>
                                       <span className='glyphicon glyphicon-home'></span> Home
                                   </NavLink>
                               </li>
                               <li>
                                   <NavLink to={'/attendance'} activeClassName='active'>
                                       <span className='glyphicon glyphicon-ok-sign'></span>Din N&auml;rvaro
                                   </NavLink>
                               </li>
                               <li>
                                   <NavLink to={'/club-trainingplan'} activeClassName='active'>
                                       <span className='glyphicon glyphicon-list-alt'></span> Tr&auml;ningsplanering
                                   </NavLink>
                               </li>
                               <li>
                                   <NavLink to={'/club-feedback'} activeClassName='active'>
                                       <span className='glyphicon glyphicon-comment'></span> Feedback
                                   </NavLink>
                               </li>
                               <li>
                                   <NavLink to={'/your-notes'} activeClassName='active'>
                                       <span className='glyphicon glyphicon-pencil'></span>Dina anteckningar
                                   </NavLink>
                               </li>
                               <li>
                                   <NavLink to={'/your-goals'} activeClassName='active'>
                                       <span className='glyphicon glyphicon-heart-empty'></span> Dina m&aring;l
                                   </NavLink>
                               </li>
                               <li>
                                   <NavLink to={'/your-techniques'} activeClassName='active'>
                                       <span className='glyphicon glyphicon-certificate'></span> Dina tekniker
                                   </NavLink>
                               </li>

                               <li>
                                   <NavLink to={'/your-techniques-rehearse'} activeClassName='active'>
                                       <span className='glyphicon glyphicon-question-sign'></span>
                                       Dina teknikers namn f&ouml;rh&ouml;r
                                   </NavLink>
                               </li>
                               <li>
                                   <NavLink to={'/your-account'} activeClassName='active'>
                                       <span className='glyphicon glyphicon-user'></span> Dina inst&auml;llningar
                                   </NavLink>
                               </li>
                               <li>
                                   <NavLink to={'/about'} activeClassName='active'>
                                       <span className='glyphicon glyphicon-info-sign'></span> Om..
                                   </NavLink>
                               </li>
                           </ul>
                       </div>
                   </div>
               </div>;
    }
}
