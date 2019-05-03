import React from 'react';
import classes from './Cockpit.css';


const cockpit = (props) => {
    console.log('[Cockput.js...rendering]');
    const assignedClasses = [];
    let buttonClass = '';

    if(props.showPersons){
        buttonClass = classes.Red;
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }
    return (
        <div className={classes.Cockpit}>
            <h1>{props.appName}</h1>
            <p className={assignedClasses.join(' ')}>jsx only allows a single root Component to be rendered</p>
            <button
                className={buttonClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;