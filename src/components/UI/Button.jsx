import React, { useEffect, useState } from "react";

function Button(props) {
    const [active, setActive] = useState(false)
    const [styles, setStyles] = useState({
        background: props.background,
        border: props.border,
        borderRadius: props.borderRadius,
        width: props.width,
        height: props.height
    })
    useEffect(() => {
        if (props.activeBtn.stock === 'Нет в наличии') {
            const copyStyles = { ...styles }
            copyStyles.background = 'black'

            setStyles(copyStyles)
            setActive(true)
        }
    }, [props.activeBtn])
    return (
        <button disabled={active} style={styles} onClick={props.click}>{props.text}</button>
    )
}

export default Button