import Alto from '../frameworks/alto-react/core.js';

// ==========================================================================
// Project: Alto - JavaScript Application Framework
// Copyright: @2017 The Code Boutique, LLC
// License:   MIT License (see license for details)
// Author: Chad Eubanks
// ==========================================================================

import Router from  './routing/core.js';

const App = Alto.Application.create({

    version: 1.0,

    milestone: '17a',

    router: Router.create(),

});

export default App;