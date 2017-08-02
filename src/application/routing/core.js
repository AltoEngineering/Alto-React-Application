import Alto from '../../frameworks/alto-react/core.js';

// ==========================================================================
// Project: Alto - JavaScript Application Framework
// Copyright: @2017 The Code Boutique, LLC
// License:   MIT License (see license for details)
// Author: Chad Eubanks
// ==========================================================================

import HomeState from '../statechart/home_state.js';

const Router = Alto.Router.extend({

    routes: {

        index: {
            state: HomeState
        }


    }

});

export default Router;