import React, { useRef, useEffect } from "react";

const { tableau } = window;


function TableauEmbedOura2() {
    const ref = useRef(null);
    const url = "https://public.tableau.com/views/T_HeartRate/SelectOneMetric?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link";

    function initViz () {
        new tableau.Viz(ref.current, url);
    }
    useEffect(() => {
        initViz();
    }, [])
    return (
        <div>
            <div ref={ref}></div>
        </div>
    );
}

export default TableauEmbedOura2;