const FooterBase = () => {
    let numrows = 24
    const rows = []
    for (let i = 0; i <= numrows; i++) {
        rows.push(
            <div className={`bg-cinnabar`} style={  {marginTop: i, height: numrows - i}  }></div>)
    }
    return (

        <div className={`bg-jet-stream flex flex-col`} aria-hidden="true">
            {rows}

        </div>

    )



}

export default FooterBase