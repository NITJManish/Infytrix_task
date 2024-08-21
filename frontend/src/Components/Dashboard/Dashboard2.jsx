import React from 'react'

const Dashboard2 = () => {
    return (
        <>
            <div className='container'>
                <div className="row pr-4 my-5">
                    <div className="col-xl-6 col-sm-12 mb-3">
                        <div className="card text-white bg-success o-hidden h-100">
                            <div className="card-body">
                                <div className="text-center card-font-size">
                                    Comparison sales
                                    <br />
                                    <b>$</b>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6 col-sm-12 mb-3">
                        <div className="card text-white bg-danger o-hidden h-100">
                            <div className="card-body">
                                <div className="text-center card-font-size">
                                    Companrison category
                                    <br />
                                    <b></b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard2
