function Footer({fixed}) {
    return (
        <div className={`container-fluid mt-5 ${fixed}`}>
            <div className="row">
                <div className="col-12 bg-black text-white p-2 mt-5">
                    <p className="text-center">Lorran Rodrigues ©</p>
                </div>
            </div>
        </div>
    )
}

Footer.defaultProps = {
    fixed: ""
};
export default Footer;