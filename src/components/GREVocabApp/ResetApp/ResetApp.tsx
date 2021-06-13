/* Created By: JAshMe */
/*
    Description: To provide ability to reset the app
*/

export interface ResetAppInterface
{
    resetApp : () => void;
}

export const ResetApp = ({resetApp, ...props}: ResetAppInterface) => {
    return (
            <div className="d-flex justify-content-center">
                <button className="btn btn-outline-dark btn-lg" onClick={resetApp}>
                    <h1 className="mb-0 font-weight-light">Start Over!</h1>
                </button>
            </div>
    )
}