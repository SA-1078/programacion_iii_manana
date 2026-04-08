import React from "react";

export default function CssGlobalDemo() {
    return (
        <div className="globalCard">
            <h3 className="globalTitle">CSS Global</h3>
            <p style={{ margin: 0 }}>Estas clases viven en un .css global.</p>
        </div>
    );
}