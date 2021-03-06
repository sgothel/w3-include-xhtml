
****** Welcome ******
This project exposes the custom XHTML element 'w3-include-xhtml' 
as defined by the DTD extension:

    <!ELEMENT w3-include-xhtml EMPTY>
    <!ATTLIST w3-include-xhtml href CDATA #REQUIRED>

Example:
    <w3-include-xhtml href="header-l0-inc.html"></w3-include-xhtml>

The naming scheme is also compatible with 
W3C_Custom_Elements_Proposal <https://www.w3.org/TR/custom-elements/>, 
being incooperated within 
W3C_DOM Spec <https://www.w3.org/TR/dom41/#interface-element>
and the W3C_HTML_SPEC <https://www.w3.org/TR/html53/semantics-scripting.html#custom-elements-core-concepts>.
Also see the WHATWG DOM Spec <https://dom.spec.whatwg.org/#interface-element>
and the WHATWG HTML Spec <https://html.spec.whatwg.org/multipage/custom-elements.html>.

You must _not_ use the custom tag in a self-closing manner,
since the spec seemingly only allows build-in types to be void.
We will detect whether the node has children attached as if no end tag has been provided
and insert an error message! This has been observed on Firefox when used as self-closing.

Remaining question: How can we surpass the W3C Markup Validation Service <http://validator.w3.org/>?

If you see any other text elements besides this text block in 'index.html', 
the custom XHTML element w3-include-xhtml is operating.
In detail, a header HEADER, a sidebar SIDEBAR and a footer FOOTER shall be
visible via three w3-include-xhtml elements.

License
========
This work is licensed under the 'New BSD 2-Clause License'.
