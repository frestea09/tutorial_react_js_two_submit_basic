import React from 'react'
function Content(props){
    return(
        <div>
            <form onSubmit={props.sayVariable}>
            <table>
                <tr>
                    <td>
                        <div className="form-group">
                            <label for="bilanganPertama">Bilangan Pertama </label>
                            <input id='bilanganPertama' className='form-control' type='text' value={props.bilanganPertama} onChange={props.setBilanganPertama}/>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="form-group">
                            <label for="bilanganKedua">Bilangan Kedua </label>
                            <input id='bilanganKedua' className='form-control' type='text' value={props.bilanganKedua} onChange={props.setBilanganKedua}/>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button className='btn btn-success' type='submit'>Submit</button>
                    </td>
                </tr>
            </table>
            </form>
            
        </div>
    )
}
export default Content