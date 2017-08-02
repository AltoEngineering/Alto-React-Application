import Alto from '../../frameworks/alto-react/core.js';

// ==========================================================================
// Project: Alto - JavaScript Application Framework
// Copyright: @2017 The Code Boutique, LLC
// License:   MIT License (see license for details)
// Author: Chad Eubanks
// ==========================================================================

const IndexView = Alto.View.extend({
    classNames: ['a'],
    childViews: ['firstView', 'secondView'],
    tag: 'div',
    title: 'parent',
    action: 'didSelectIndexView',

    firstView: Alto.View.extend({
        classNames: ['a-a'],
        childViews: ['nestedView'],
        tag: 'div',
        title: 'first sibling',

        nestedView: Alto.View.extend({
            classNames: ['a-a-a'],
            childViews: ['doubleNestedView'],
            tag: 'div',
            title: 'first sibling ----- first nested sibling',

            doubleNestedView: Alto.View.extend({
                classNames: ['a-a-a-a'],
                tag: 'div',
                title: 'first sibling ----- first nested sibling ----- first double nested sibling',
            })

        })
    }),

    secondView: Alto.View.extend({
        classNames: ['a-b'],
        tag: 'div',
        title: 'second sibling',
    })

});

export default IndexView;