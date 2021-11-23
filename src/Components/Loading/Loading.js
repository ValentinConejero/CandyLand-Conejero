import "./Loading.css"

const Loading = () => {
    return (
        <div className="row loadcent">
            <div class="spinner-border text-danger col-sm-6 spintop" role="status">
            <span class="sr-only"></span>
            </div>
            <div className="col-sm-6 fontstyle">
                <b className="fontstyle">Cargando...</b>
            </div>
        </div>
        
    )
}

export default Loading