import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    main: {
        marginTop: theme.spacing(7)
    }
}))

const Main = () => {
    const classes = useStyles();

    return (
        <section id="main" className={classes.main}>
            <h1>Main</h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque praesentium illum eum exercitationem non fugiat reiciendis nesciunt, eaque nostrum perspiciatis beatae voluptatem dolorem provident. Ullam odit quod ut quaerat voluptatum.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error id nulla officia voluptate dicta aperiam exercitationem accusantium, accusamus doloribus omnis quidem corporis ad esse modi earum deleniti, dolor consectetur consequuntur!
            </p>
        </section> 
        
     );
}
 
export default Main;