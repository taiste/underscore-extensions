Taiste extensions for underscore_.

.. _underscore: http://github.com/documentcloud/underscore

Contains two functions, ``bipartite`` and ``pluckNested``.

``bipartite`` can be used to partition an iterable to two separate parts, one fullfilling a requirement stated by the
callback, and others that do not.

::

    var o = [1,2,3,4];
    _.bipartite(o, function(item) { return item <= 2; } );


``pluckNested`` can be used as a drop-in replacement for ``pluck``, but it supports nesting:

::

    var o = { foo: { bar: [1,2,3,4] } };
    _.pluckNested(o, 'foo.bar');

