const ApplicationData =({Application})=>{
    // console.log(Application.length)
    return(
        <>
        {
            Application.map((curApplication)=>{
                const {_id,Title,Location,Applicants,Postdate,Closedate,Status,Oprations}=curApplication;
                return (
                    <tr key={_id}>
                        <td>{Title}</td>
                        <td>{Location}</td>
                        <td>{Applicants}</td>
                        <td>{Postdate}</td>
                        <td>{Closedate}</td>
                        <td>{Status}</td>
                    </tr>
                )
            })
        }
        </>
    )

}
export default ApplicationData; 