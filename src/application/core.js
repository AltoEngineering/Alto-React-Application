import Alto from '../frameworks/alto-react/core.js';
import Router from './routing/core.js';

// ==========================================================================
// Project: Alto - JavaScript Application Framework
// Copyright: @2017 The Code Boutique, LLC
// License:   MIT License (see license for details)
// Author: Chad Eubanks
// ==========================================================================

const App = Alto.Application.create({

    version: 1.0,

    milestone: '17a',

    router: Router,

    statechart: Alto.Statechart

});

export default App;