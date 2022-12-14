import React from 'react';
import Svg, {Path} from "react-native-svg";

const Delete = (props) => {
    return (
        <Svg
            width={18}
            height={18}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M8.996 18C13.928 18 18 13.927 18 9c0-4.926-4.08-9-9.013-9C4.063 0 0 4.074 0 9c0 4.927 4.072 9 8.996 9zm-2.967-5.205a.823.823 0 01-.826-.836c0-.208.087-.417.252-.574L7.82 9.009 5.455 6.64a.793.793 0 01-.252-.574c0-.47.365-.827.826-.827.244 0 .435.078.592.235l2.375 2.367 2.383-2.376a.808.808 0 01.592-.244.82.82 0 01.826.827c0 .218-.087.41-.252.583L10.18 9.01l2.366 2.367a.84.84 0 01.244.583c0 .47-.366.836-.835.836a.849.849 0 01-.6-.244l-2.358-2.358-2.358 2.358a.806.806 0 01-.609.244z"
                fill="#8B8B8B"
            />
        </Svg>
    );
};

export default Delete;
